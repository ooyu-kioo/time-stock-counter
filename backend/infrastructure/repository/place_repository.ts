import { PrismaClient } from "@prisma/client"
import { Place } from "../../domain/place/place.value"
import { PlaceRepositoryIF } from "../../domain/place/place_repository.IF"
import prisma from "../driver/prisma_client"

interface PlaceRepositoryDependencies {
  prismaClient?: PrismaClient
}

export class PlaceRepository implements PlaceRepositoryIF {
  private prismaClient: PrismaClient

  constructor({ prismaClient: prismaClient = prisma }: PlaceRepositoryDependencies) {
    this.prismaClient = prismaClient
  }

  async findAll(): Promise<Place[]> {
    const records = await this.prismaClient.places.findMany({})

    return records.map((record) => {
      return new Place({
        id: record.id,
        name: record.name,
      })
    })
  }
}
