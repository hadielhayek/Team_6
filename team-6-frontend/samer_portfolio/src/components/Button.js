import React from 'react';
import { useState } from 'react';
import "../App.css"

let styles="";

export default function Button ({onClick, text}){

  if(text == "Add" || text=="Submit" || text=="Add a feedback" || text=="Show all Blogs"){
    styles = {backgroundColor: '#2C98F0', cursor:'pointer'}
    
  }else if (text == "Delete"){
    styles = {backgroundColor: '#EC5453',cursor:'pointer'}
  }
  else if(text=="Edit"){
    styles={backgroundColor:'#27AE60',cursor:'pointer'}
  }

  return (
    <>
        <button type='submit' onClick={onClick} style={styles}>{text}</button>
    </>);

  
  
}

