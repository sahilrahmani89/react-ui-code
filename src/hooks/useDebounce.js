import  {useState, useEffect} from 'react'

const useDebounce = (clicked,time) =>{
    const [isDebounce,setisDebounce] = useState(false)
    useEffect(() => {
        setisDebounce(true)
       let clrTime
        clrTime= setTimeout(()=>{
            setisDebounce(false)
        },time)
    
      return () =>{
        clearTimeout(clrTime)
      }
    }, [clicked,time])
    return {
        isDebounce
    }
}

export default useDebounce