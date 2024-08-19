import React from 'react'

const Circle = ({circlePos}) => {

     const style ={
        position:'absolute',
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        backgroundColor:'#000',
        left:circlePos.left,
        top:circlePos.top,
        transition:'all'
     }
     
  return (
    <div style={style}></div>
  )
}

export default Circle