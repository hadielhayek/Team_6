import React from 'react'
import './smallButton.css';



function SmallButton({text,onClick,id}) {
  let styles="";

   if (text == "Delete"){
    styles = {backgroundColor: '#EC5453', marginLeft:'10px',cursor:'pointer'}
  }
  else if(text=="Edit" || text=="Show"){
    styles={backgroundColor:'#27AE60',cursor:'pointer'}
  }
  else if(text=="Hide"){
    styles={backgroundColor:'#828282',cursor:'pointer'}
  }

  return (
    <button className='smallButton' id={id} type="button" style={styles} onClick={onClick}>{text}</button>

  )
}

export default SmallButton