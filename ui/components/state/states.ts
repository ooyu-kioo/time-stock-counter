import { atom } from "recoil"
const timeListState = atom({
  key: "timerState",
  default: [],
})
export default timeListState
