import { PrismaClient } from "@prisma/client"
import { AccumulationPoint } from "../../domain/accumulation_point/accumulation_point.value"
import { AccumulationPointRepositoryIF } from "../../domain/accumulation_point/accumulation_point_repository.IF"
import { AccumulationRatio } from "../../domain/accumulation_point/accumulation_ratio.value"
import { AccumulationTime } from "../../domain/accumulation_point/accumulation_time.value"
import prisma from "../driver/prisma_client"

interface AccumulationPointRepositoryDependencies {
  prismaClient?: PrismaClient
}

export class AccumulationPointRepository implements AccumulationPointRepositoryIF {
  private prismaClient: PrismaClient

  constructor({ prismaClient: prismaClient = prisma }: AccumulationPointRepositoryDependencies) {
    this.prismaClient = prismaClient
  }

  async findAll(): Promise<AccumulationPoint[]> {
    const points = await this.prismaClient.accumulation_points.findMany({})
    const times = await this.prismaClient.accumulation_time.findMany({})
    const ratios = await this.prismaClient.accumulation_ratios.findMany({})

    return points.map((point) => {
      const time = times.find((record) => record.id === point.accumulation_time_id)
      const ratio = ratios.find((record) => record.id === point.accumulation_ratio_id)

      // TODO：include optionで綺麗にできそう？
      return new AccumulationPoint({
        id: point.id,
        point: point.point,
        accumulationTime: new AccumulationTime({
          id: time.id,
          start: time.start,
          end: time.end,
        }),
        accumulationRatio: new AccumulationRatio({
          id: ratio.id,
          ratio: ratio.ratio,
          actionId: ratio.action_id,
          placeId: ratio.place_id,
          purposeId: ratio.purpose_id,
        }),
      })
    })
  }

  // TODO：ID型を分離してfunctionの型と返り値適切にする
  async createPoint(accumulationPoint: AccumulationPoint): Promise<any> {
    const point = await this.prismaClient.accumulation_points.create({
      data: {
        point: accumulationPoint.point,
        accumulation_time: {
          create: { start: accumulationPoint.accumulationTime.start, end: accumulationPoint.accumulationTime.end },
        },
        accumulation_ratio: {
          create: {
            ratio: accumulationPoint.accumulationRatio.ratio,
            action_id: accumulationPoint.accumulationRatio.actionId,
            place_id: accumulationPoint.accumulationRatio.placeId,
            purpose_id: accumulationPoint.accumulationRatio.purposeId,
          },
        },
      },
    })

    return point
  }
}
