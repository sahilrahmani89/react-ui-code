import React,{useMemo} from 'react'
import SingleBar from './SingleBar'

const BarContainer = ({data}) => {
  const heightOfBar = useMemo(()=>{
    return Math.max(...data.map((item)=>item.height))
  },[])
  return (
    <div className='container'>
        <div className='chart'>
          {
            data.length ? data.map((item)=>{
             return <React.Fragment key={item.id}>
                  <SingleBar 
                    {...item}
                    heightOfBar={(item.height/heightOfBar)*100}
                  />
               </React.Fragment>
            }) :''
          }
        </div>
        <div className='y-axis-label'>Y Axis</div>
        <div className='x-axis-label'>X Axis</div>
    </div>
  )
}

export default BarContainer