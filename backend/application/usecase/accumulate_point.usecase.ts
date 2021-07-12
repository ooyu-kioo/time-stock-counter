import { AccumulationPoint } from "../../domain/accumulation_point/accumulation_point.value"
import { AccumulationPointRepositoryIF } from "../../domain/accumulation_point/accumulation_point_repository.IF"
import { AccumulationRatio } from "../../domain/accumulation_point/accumulation_ratio.value"
import { AccumulationTime } from "../../domain/accumulation_point/accumulation_time.value"
import { CalculatePoint } from "../../domain/accumulation_point/calculate_point.value"
import { AccumulationPointRepository } from "../../infrastructure/repository/accumulation_point_repository"

interface AccumulatePointUsecaseDependencies {
  accumulationPointRepository?: AccumulationPointRepositoryIF
}

interface AccumulatePointUsecaseProps {
  start: number
  end: number
  // TODO：action, place, purpose追加
}

export class AccumulatePointUsecase {
  private readonly accumulationPointRepository: AccumulationPointRepositoryIF

  constructor({
    accumulationPointRepository = new AccumulationPointRepository({}),
  }: AccumulatePointUsecaseDependencies) {
    this.accumulationPointRepository = accumulationPointRepository
  }

  public async execute(props: AccumulatePointUsecaseProps): Promise<AccumulationPoint> {
    const accumulationTime = new AccumulationTime({ start: props.start, end: props.end })
    const accumulationRatio = new AccumulationRatio({ ratio: 3, actionId: 5, placeId: 5, purposeId: 5 })
    const accumulationPoint = new AccumulationPoint({
      point: new CalculatePoint({
        accumulationTime: accumulationTime,
        accumulationRatio: accumulationRatio,
      }).calculatePoint(),
      accumulationTime: accumulationTime,
      accumulationRatio: accumulationRatio,
    })
    const result = this.accumulationPointRepository.createPoint(accumulationPoint)
    return result
  }
}
