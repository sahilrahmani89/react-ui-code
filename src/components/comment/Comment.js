import React from 'react'
import useComment from './hooks/useComment'

const Comment = ({isRecursive}) => {
    const {commentInput, 
           handleComment,
           addComment,
           data,
           deleteComment,
           reply,
           replyClick
        } = useComment()
        console.log('data',data)
        console.log('reply',reply)
  return (
    <React.Fragment>
    <div style={{padding:'20px'}}>
        <input 
         onChange={handleComment}
         type='text'
         value={commentInput}
         placeholder='Add Comment'
        />
        <button onClick={addComment} style={{marginLeft:'10px'}}>Add Comment</button>
    </div>

    <div style={{margin:`${isRecursive? '0px':'20px'}`}}>
           {
                data?.map((item)=>{
                  return(
                    <div key={item.id}>
                    <p>
                    <button onClick={()=>deleteComment(item.id)}>Delete</button>
                    {item.comments}  
                    </p>
                    <button onClick={()=>replyClick(item.id)}>Reply</button>
                    {(reply.isOpen && reply.id==item.id )  &&
                    <>
                        <Comment isRecursive={true}/>
                    </>
                    }
                    </div>
                  )
                })
            }
    </div>
    </React.Fragment>
  )
}

export default Comment