import { ValueObjectBase } from "../shared/value_object_base";

interface PlaceProps {
  id: number
  name: string
}

export class Place implements ValueObjectBase<PlaceProps> {
  public readonly id: number
  public readonly name: string

  constructor(props: PlaceProps) {
    this.id === props.id
    this.name === props.name
  }

  public isEqueals(other: Place): boolean {
    return this.id === other.id && this.name === other.name
  }
}
