import { ValueObjectBase } from "../shared/value_object_base";

interface AccumulationTimeProps {
  start: number
  end: number
}

export class AccumulationTime implements ValueObjectBase<AccumulationTimeProps> {
  public readonly start: number
  public readonly end: number

  constructor(props: AccumulationTimeProps) {
    this.start = props.start
    this.end = props.end
  }

  public isEqueals(other: AccumulationTime): boolean {
    return this.start === other.start && this.end === other.end
  }

}
