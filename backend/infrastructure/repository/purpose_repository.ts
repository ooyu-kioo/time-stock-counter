import { PrismaClient } from "@prisma/client"
import { Purpose } from "../../domain/events/purpose/purpose.value"
import { PurposeRepositoryIF } from "../../domain/events/purpose/purpose_repository.IF"
import prisma from "../driver/prisma_client"

interface PurposeRepositoryDependencies {
  prismaClient?: PrismaClient
}

export class PurposeRepository implements PurposeRepositoryIF {
  private prismaClient: PrismaClient

  constructor({ prismaClient: prismaClient = prisma }: PurposeRepositoryDependencies) {
    this.prismaClient = prismaClient
  }

  async findAll(): Promise<Purpose[]> {
    const records = await this.prismaClient.purposes.findMany({})

    return records.map((record) => {
      return new Purpose({
        id: record.id,
        name: record.name,
      })
    })
  }
}
