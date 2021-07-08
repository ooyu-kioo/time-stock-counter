import { PrismaClient } from "@prisma/client"
import { Action } from "../../domain/action/action.value"
import { ActionRepositoryIF } from "../../domain/action/action_repository.IF"
import prisma from "../driver/prisma_client"

interface ActionRepositoryDependencies {
  prismaClient?: PrismaClient
}

export class ActionRepository implements ActionRepositoryIF {
  private prismaClient: PrismaClient

  constructor({ prismaClient: prismaClient = prisma }: ActionRepositoryDependencies) {
    this.prismaClient = prismaClient
  }

  async findAll(): Promise<Action[]> {
    const records = await this.prismaClient.actions.findMany({})

    return records.map((record) => {
      return new Action({
        id: record.id,
        name: record.name,
      })
    })
  }
}
