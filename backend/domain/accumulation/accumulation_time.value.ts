import { ValueObjectBase } from "../shared/value_object_base";
import { AccumulationRatio } from "./accumulation_ratio.value";

interface AccumulationTimeProps {
  id: number
  start: number
  end: number
  accumulationRatio: AccumulationRatio
}

export class AccumulationTime implements ValueObjectBase<AccumulationTimeProps> {
  public readonly id: number
  public readonly start: number
  public readonly end: number
  public readonly accumulationRatio: AccumulationRatio

  constructor(props: AccumulationTimeProps) {
    this.id = props.id
    this.start = props.start
    this.end = props.end
    this.accumulationRatio = props.accumulationRatio
  }

  public isEqueals(other: AccumulationTime): boolean {
    return this.id === other.id &&
           this.start === other.start &&
           this.end === other.end &&
           this.accumulationRatio === other.accumulationRatio
  }
}
