import React from 'react'
import useMouseCircle from '../hooks/useMouseCircle'
import Circle from '../components/Circle'

const MouseCircle = () => {
    const {handleMouse,circlePos} = useMouseCircle()
  return (
    <div onMouseMove={handleMouse} style={{width:'100%',height:'100vh',background:'#eee'}}>
        <Circle circlePos={circlePos}/>
    </div>
  )
}

export default MouseCircle