import React from 'react';
import Feedback from './Feedback';
import Button from './Button';
import '../App.css'

function Feedbacks() {
    return (
        <div id="feedbacks_id" style={{ background: "white", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width:"80%", marginInline:"auto",marginTop:"10px", marginBottom:"10px" , padding:"10px"}}>
            <h1 style={{paddingLeft:"25px", paddingTop:"30px", paddingBottom:"10px"}}> Happy Client </h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' ,paddingBottom:"20px" }}>
               <Feedback/>
               <Feedback/>
            
             <Feedback/>
              <Feedback/>
            </div>
            <div style={{textAlign:"center"}}> <Button text="Add a feedback"/></div>
        </div>
    );
}

export default Feedbacks;
