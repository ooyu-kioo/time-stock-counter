import { Action } from "../events/action.value";
import { Place } from "../events/place.value";
import { Purpose } from "../events/purpose.value";
import { ValueObjectBase } from "../shared/value_object_base";

interface AccumulationRatioProps {
  id: number
  ratio: number
  action: Action
  place: Place
  purpose: Purpose
}

export class AccumulationRatio implements ValueObjectBase<AccumulationRatioProps> {
  public readonly id: number
  public readonly ratio: number
  public readonly action: Action
  public readonly place: Place
  public readonly purpose: Purpose

  constructor(props: AccumulationRatioProps) {
    this.id === props.id
    this.ratio === props.ratio
    this.action === props.action
    this.place === props.place
    this.purpose === props.purpose
  }

  public isEqueals(other: AccumulationRatio): boolean {
    return this.id === other.id &&
           this.ratio === other.ratio &&
           this.action === other.action &&
           this.place === other.place &&
           this.purpose === other.purpose
  }
}
