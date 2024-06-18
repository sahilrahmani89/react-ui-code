import React from 'react';
import './singlebox.css'

const SingleBox = ({ id, pId ,handleClick,isChecked,pointer}) => {
  return (
    <span className={`single-box 
      ${isChecked.find((item)=>item.id===id && item.pId===pId) ? 'checked' : '' }
      ${pointer?'pointer':'no-pointer'}`} 
      onClick={() => handleClick(id, pId)}>
      
      </span>
  );
};

export default SingleBox;
