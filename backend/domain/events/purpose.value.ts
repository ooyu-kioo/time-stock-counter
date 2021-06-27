import { ValueObjectBase } from "../shared/value_object_base";

interface PurposeProps {
  id: number
  name: string
}

export class Purpose implements ValueObjectBase<PurposeProps> {
  public readonly id: number
  public readonly name: string

  constructor(props: PurposeProps) {
    this.id === props.id
    this.name === props.name
  }

  public isEqueals(other: Purpose) {
    return this.id === other.id && this.name === other.name
  }
}
