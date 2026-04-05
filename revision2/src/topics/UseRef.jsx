import { useRef, useState } from 'react'

const pad = (n) => String(Math.floor(n)).padStart(2, '0')

const Stopwatch = () => {
  const [ticks, setTicks] = useState(0)   // 1 tick = 10ms
  const intervalRef = useRef(null)

  const start = () => {
    if (intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
      setTicks(x => x + 1)
    }, 10)                                  // ✅ 10ms interval, not 0
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const reset = () => {
    stop()
    setTicks(0)
  }

  // ✅ Derived directly from ticks — no useEffect or extra state needed
  const totalMs = ticks * 10
  const ms      = Math.floor(totalMs / 10) % 100
  const totalSec = Math.floor(totalMs / 1000)
  const sec      = totalSec % 60
  const min      = Math.floor(totalSec / 60) % 60
  const hrs      = Math.floor(totalSec / 3600)

  const isRunning = intervalRef.current !== null

  return (
    <div className="w-screen h-screen bg-zinc-600 flex justify-center items-center flex-col gap-10">
      <div className=" px-4 py-2 rounded-xl bg-slate-400/10 flex justify-center items-center">
        <h1 className="text-2xl font-extrabold text-white font-mono tracking-wide">
          {`${pad(hrs)} : ${pad(min)} : ${pad(sec)} · ${pad(ms)}`}
        </h1>
      </div>
      <div className="flex gap-5">
        <button
          onClick={start}
          disabled={isRunning}
          className="px-4 py-2 rounded-lg bg-orange-500 font-semibold text-xl
                     active:bg-orange-300 disabled:opacity-40"
        >
          Start
        </button>
        <button
          onClick={stop}
          disabled={!isRunning}
          className="px-4 py-2 rounded-lg bg-orange-500 font-semibold text-xl
                     active:bg-orange-300 disabled:opacity-40"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-orange-500 font-semibold text-xl
                     active:bg-orange-300"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Stopwatch