import React from "react"
import Layout from "../ui/components/Layout"
import Timer from "react-compound-timer/build/components/Timer/Timer"
import axios from "axios"
import timeListState from "../ui/components/state/states"
import { useRecoilValue, useSetRecoilState } from "recoil"

// TODOs
// リロードしても保持する
// start時にstate追加
// stop時にstate追加
// unixtimeを使う
// startとstop stateから時間を計算
// finishでポイントを作る & 画面の値をリセットする

const Blog: React.FC = () => {
  // set up recoil
  const timeList = useRecoilValue(timeListState)
  const setTimeList = useSetRecoilState(timeListState)

  const addTime = () => {
    setTimeList((oldTimeList) => {
      return [
        ...oldTimeList,
        {
          name: "time",
          label: "start",
        },
      ]
    })
  }

  const createPoint = async () => {
    const body = {
      start: 100,
      end: 200,
    }
    await axios.post("/api/accumulate-point", body)
  }

  return (
    <Layout>
      <Timer
        initialTime={0}
        startImmediately={false}
        onStart={() => console.log("onStart hook")}
        onStop={() => console.log("onStop hook")}
        onReset={() => console.log("onReset hook")}
      >
        {({ start, stop, reset }) => (
          <React.Fragment>
            <div>
              <Timer.Hours /> hours
              <Timer.Minutes /> minutes
              <Timer.Seconds /> seconds
            </div>
            <br />
            <div>
              <button onClick={start}>Start</button>
              <button onClick={stop}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
      <div>
        <button onClick={createPoint}>finish</button>
      </div>

      <button onClick={addTime}>time保存</button>
      <div>
        {timeList.map((time) => (
          <div>{time.name}</div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
