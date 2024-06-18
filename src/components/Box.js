import React from 'react'
import SingleBox from './SingleBox'


const Box = ({item,pId,handleClick,isChecked,pointer}) => {
  return (
    <div className='flex w-200 gap-2 mb-2'>
        {item.map((it,index)=>{

            return(
                <React.Fragment key={index}>
                    { it ===1 ? <SingleBox 
                                   item ={it} 
                                   id={index} 
                                   pId={pId} 
                                   handleClick={handleClick} 
                                   isChecked={isChecked}
                                   pointer={pointer}
                                /> : null }
                </React.Fragment>
            )
        })}
    </div>
  )
}

export default Box