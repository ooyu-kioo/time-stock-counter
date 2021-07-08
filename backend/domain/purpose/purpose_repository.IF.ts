import { Purpose } from "./purpose.value"

export interface PurposeRepositoryIF {
  findAll(): Promise<Purpose[]>
}
