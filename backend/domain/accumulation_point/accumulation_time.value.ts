import { ValueObjectBase } from "../shared/value_object_base"

interface AccumulationTimeProps {
  id?: number
  start: number
  end: number
}

export class AccumulationTime implements ValueObjectBase<AccumulationTimeProps> {
  public readonly id: number
  public readonly start: number
  public readonly end: number

  constructor(props: AccumulationTimeProps) {
    // TODO：endはstartより大きくなければいけない
    this.id = props.id
    this.start = props.start
    this.end = props.end
  }

  public isEqueals(other: AccumulationTime): boolean {
    return this.id === other.id && this.start === other.start && this.end === other.end
  }

  public elapesedTime(): number {
    return this.end - this.start
  }
}
