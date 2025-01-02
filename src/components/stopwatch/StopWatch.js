import React ,{useState,useEffect} from 'react'
import './stopwatch.css'

const StopWatch = () => {
  const [time,settime] = useState(0)
  const [isStart,setisStart] = useState(false)
  const [pause,setpause] = useState(true)
  useEffect(() => {
    console.log('will check isStater',isStart)
    let interval
    if(isStart){
        interval = setInterval(()=>{
          settime(prev=>prev+1)
        },1000)
    }
    return () => {
        clearInterval(interval)
    }
  }, [isStart])

  const start = () =>{
    setisStart(true)
  }
  const pauseFun = () =>{
    setisStart(!pause)
    setpause(prev=>!prev)
  }
  const reset = () =>{
    settime(0)
    setisStart(false)
    setpause(true)
  }
  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={pauseFun}>{pause?'puase':'resume'}</button>
      <button onClick={reset}>Reset</button>
      <h1>Timer : {time}</h1>
    </div>
  )
}

export default StopWatch
