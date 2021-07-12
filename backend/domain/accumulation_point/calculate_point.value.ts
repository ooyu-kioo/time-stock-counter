import { ValueObjectBase } from "../shared/value_object_base"
import { AccumulationRatio } from "./accumulation_ratio.value"
import { AccumulationTime } from "./accumulation_time.value"

interface CalculatePointProps {
  accumulationTime: AccumulationTime
  accumulationRatio: AccumulationRatio
}

export class CalculatePoint implements ValueObjectBase<CalculatePointProps> {
  public readonly accumulationTime: AccumulationTime
  public readonly accumulationRatio: AccumulationRatio

  constructor(props: CalculatePointProps) {
    this.accumulationTime = props.accumulationTime
    this.accumulationRatio = props.accumulationRatio
  }

  public isEqueals(other: CalculatePoint): boolean {
    return this.accumulationTime === other.accumulationTime && this.accumulationRatio === other.accumulationRatio
  }

  public calculatePoint(): number {
    return this.accumulationTime.elapesedTime() * this.accumulationRatio.ratio
  }
}
