import React,{useState} from "react";

const useCreateCircle = ()=>{
    const [circle,setcircle] = useState([])

    const toggleCircle = (id) =>{
        // console.log('id',id)
        //     const newthing = circle.map((item)=>{
        //         return item.id === id ? {...item,bg :item.bg==='black'? 'transparent':'black'} :item
        //     })
            // console.log('newTHing',newthing)
            setcircle(circle.map((item)=>{
                return item.id === id ? {...item,bg :item.bg==='#000000'? 'transparent':'#000000'} :item
            }))
    }

    const handleClick = (e) =>{
        const rect = e.target.getBoundingClientRect()
        const newCircle = {
            id:Date.now(),
            x: e.clientX-rect.left,
            y:e.clientY-rect.top,
            bg:'#000000'
        }
        setcircle([...circle,newCircle])
    }

    return{
        circle,
        toggleCircle,
        handleClick,
    }
}
export default useCreateCircle