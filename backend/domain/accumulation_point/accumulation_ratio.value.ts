import { ValueObjectBase } from "../shared/value_object_base"

interface AccumulationRatioProps {
  id: number
  ratio: number
  actionId: number
  placeId: number
  purposeId: number
}

export class AccumulationRatio implements ValueObjectBase<AccumulationRatioProps> {
  public readonly id: number
  public readonly ratio: number
  public readonly actionId: number
  public readonly placeId: number
  public readonly purposeId: number

  constructor(props: AccumulationRatioProps) {
    this.id = props.id
    this.ratio = props.ratio
    this.actionId = props.actionId
    this.placeId = props.placeId
    this.purposeId = props.purposeId
  }

  public isEqueals(other: AccumulationRatio): boolean {
    return (
      this.id === other.id &&
      this.ratio === other.ratio &&
      this.actionId === other.actionId &&
      this.placeId === other.placeId &&
      this.purposeId === other.purposeId
    )
  }
}
