import React, {useState,useEffect, useCallback} from 'react'
import useDebounce from '../../hooks/useDebounce'

const TripleClick = () => {
    const [isThird, setisThird] = useState(false)
    const [clicked,setclicked] = useState(0)
    const {isDebounce} = useDebounce(clicked,100)

    const handleMouseDown = useCallback(
      (e) => {
        setclicked(prev=>prev+1)
      },
      [],
    )

    useEffect(() => {
        if(isDebounce && clicked === 3){
            setisThird(true)
        }
        let timeOut
        timeOut = setTimeout(() => {
            setclicked(0)
        }, 100);
        return ()=>{
            clearTimeout(timeOut)
        }
    }, [isDebounce,clicked])
  return (
    <div onMouseDown={e=>handleMouseDown(e)} style={{width:'100%',height:'90vh'}}>
      Triplce Click
      {
        isThird  && <h1>Third time shown</h1>
      }
    </div>
  )
}

export default TripleClick
