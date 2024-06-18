import React, {useState}from "react";
import Box from "../components/Box";

const arr =[
    [1,1,1],
    [1,0,0],
    [1,1,1]
]

const BoxClick = () => {
    const [checked, setChecked] = useState([]);
    const [pointer,setpointer] = useState(true)
  
    let num = 0
   arr.map((item)=>item.map((it)=>{
      if(it===1){
        num++
      }
    }))
  
    const handleClick = (id, pId) => {
      if(!pointer){
        return
      }
      const ids = {
        id: id,
        pId: pId
      };
      const findId= checked.find((item)=>item.id===id && item.pId===pId)
      if(findId){
        setChecked((prevState) =>
          prevState.filter((item) => !(item.id === ids.id && item.pId === ids.pId))
        );
      }else{
        setChecked((prevState) =>{
          const newChecked = [ ...prevState,{...ids}]
          return newChecked
       });
       
       if(num===checked.length+1){
          setpointer(false)
          delayRemove(checked.length+1)
       }
      }
    };
  
    function delayRemove(num){
      if(num>0){
        setTimeout(()=>{
          setChecked((prevState)=>{
            const newState = prevState.slice(1); // Remove the first element
            return newState;
          })
          delayRemove(num-1)
        },1000)
      }else{
        setpointer(true)
        return null
      }
      return
    }
  
   
  return (
    <div className="p-4"> 
      {
        arr.map((item,index)=>{
          return(
          <React.Fragment key={index}>
            <Box 
              item={item} 
              pId={index} 
              handleClick={handleClick} 
              isChecked={checked}
              pointer={pointer}
            />
          </React.Fragment>)
        })
      }
    </div>
  )
}

export default BoxClick