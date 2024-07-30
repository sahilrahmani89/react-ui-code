import React from 'react'

const SingleBar = ({name, color, heightOfBar,}) => {
       
  return (
    <div className='singleBar' style={{height:`${heightOfBar}%`,backgroundColor:color}}>
        <div className='bar-content'>
            {name}
        </div>
    </div>
  )
}

export default SingleBar