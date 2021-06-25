export interface ValueObjectBase<Prop> {
  isEqueals(props: ValueObjectBase<Prop>): boolean
}
