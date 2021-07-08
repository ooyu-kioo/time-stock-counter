import { AccumulationPoint } from "../../domain/accumulation_point/accumulation_point.value"
import { AccumulationPointRepositoryIF } from "../../domain/accumulation_point/accumulation_point_repository.IF"
import { AccumulationPointRepository } from "../../infrastructure/repository/accumulation_point_repository"

interface GetAccumulationPointsUsecaseDependencies {
  accumulationPointRepository?: AccumulationPointRepositoryIF
}

export class GetAccumulationPointsUsecase {
  private readonly accumulationPointRepository: AccumulationPointRepositoryIF

  constructor({
    accumulationPointRepository = new AccumulationPointRepository({}),
  }: GetAccumulationPointsUsecaseDependencies) {
    this.accumulationPointRepository = accumulationPointRepository
  }

  public async execute(): Promise<AccumulationPoint[]> {
    return this.accumulationPointRepository.findAll()
  }
}
