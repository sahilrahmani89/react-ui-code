import React ,{useState}from "react";

const usePriceMul = () =>{
    const [price,setprice] = useState()
    const onChange = (e) =>{
        const {value} = e.target || {}
        setprice(value)
    }
    return{
        price,
        onChange,
    }
}

export default usePriceMul