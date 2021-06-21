import { AccumulationTime } from "./accumulation_time.value";

export interface AccumulationTimeRepositoryIF {
  findAll(): Promise<AccumulationTime[]>
}
