import { ValueObjectBase } from "../shared/value_object_base"

interface ActionProps {
  id: number
  name: string
}

export class Action implements ValueObjectBase<ActionProps> {
  public readonly id: number
  public readonly name: string

  constructor(props: ActionProps) {
    this.id === props.id
    this.name === props.name
  }

  public isEqueals(other: Action): boolean {
    return this.id === other.id && this.name === other.name
  }
}
