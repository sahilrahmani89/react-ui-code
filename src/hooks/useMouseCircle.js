import React,{useState} from "react";

const useMouseCircle = () =>{
    const [circlePos,setcirclePos] = useState({left:0,top:0})
    const handleMouse=(e)=>{
        console.log('e',e)

        let timeout = setTimeout(() => {
                setcirclePos({
                    left:e.clientX,
                    top:e.clientY
                })
        }, 100);
       
    }
    return{
        handleMouse,
        circlePos,
    }
}

export default useMouseCircle