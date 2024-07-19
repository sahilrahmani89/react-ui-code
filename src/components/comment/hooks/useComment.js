import {useState} from "react";

const useComment = () =>{
    const [commentInput,setcommentInput] = useState('')
    const [data,setdata] = useState([])
    const [id,setid] = useState(0)
    const [reply,setreply] = useState({isOpen:false, id:null})

    const addComment = () =>{
        if(!commentInput) return
        let newObj = {
            comments:commentInput,
            id:id,
            nestedComment:[]
        }
        setdata([...data,{...newObj}])
        setid((prev)=>prev+1)
        setcommentInput('')
    }

    const deleteComment = (id) =>{
        const remove = data && data?.filter((item)=>item.id!==id)
        setdata(remove)
    }

    const handleComment = (e)=>{
        const value = e.target.value
        setcommentInput(value)
    }
    
    const replyClick = (id) =>{
        setreply({isOpen:true,id:id})
    }

    return{
        commentInput,
        handleComment,
        addComment,
        data,
        reply,
        deleteComment,
        replyClick
    }
}
export default useComment