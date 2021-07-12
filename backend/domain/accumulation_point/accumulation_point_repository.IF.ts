import { AccumulationPoint } from "./accumulation_point.value"

export interface AccumulationPointRepositoryIF {
  findAll(): Promise<AccumulationPoint[]>
  createPoint(accumulationPoint: AccumulationPoint): Promise<AccumulationPoint>
}
