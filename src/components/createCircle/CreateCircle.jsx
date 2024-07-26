import React from 'react'
import useCreateCircle from './hooks/useCreateCircle'

const CreateCircle = () => {
    const {circle,handleClick,toggleCircle} =  useCreateCircle()
  return (
    <div style={{width:'100%',height:'100vh', position:'relative',overflow:'hidden', background:'#eeeeee'}} 
      onClick={(e)=>handleClick(e)}>
        {
            circle.length> 0  &&  circle.map((item)=>{
                return(
                    <div
                        key={item.id}
                        onClick={(e) => { e.stopPropagation(); toggleCircle(item.id); }} 
                        style={{
                            width:'50px',
                            height:'50px',
                            borderRadius:'50%',
                            backgroundColor:item.bg,
                            position:'absolute',
                            top:item.y -25,
                            left:item.x-25,
                            cursor:'pointer',
                            border:'1px solid #000000'
                        }}
                    >

                    </div>
                )
            })
        }
    </div>
  )
}

export default CreateCircle