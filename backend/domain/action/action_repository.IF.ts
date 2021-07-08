import { Action } from "./action.value"

export interface ActionRepositoryIF {
  findAll(): Promise<Action[]>
}
