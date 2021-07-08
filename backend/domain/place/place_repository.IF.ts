import { Place } from "./place.value"

export interface PlaceRepositoryIF {
  findAll(): Promise<Place[]>
}
