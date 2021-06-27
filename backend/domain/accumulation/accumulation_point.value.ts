import { ValueObjectBase } from "../shared/value_object_base";
import { AccumulationTime } from "./accumulation_time.value";

interface AccumulationPointProps {
  id: number,
  point: number,
  accumulationTime: AccumulationTime
}

export class AccumulationPoint implements ValueObjectBase<AccumulationPointProps> {
  public readonly id: number
  public readonly point: number
  public readonly accumulationTime: AccumulationTime

  constructor(props: AccumulationPointProps) {
    this.id = props.id
    this.point = props.point
    this.accumulationTime = props.accumulationTime
  }

  public isEqueals(other: AccumulationPoint): boolean {
    return this.id === other.id &&
           this.point === other.point &&
           this.accumulationTime === other.accumulationTime
  }
}
