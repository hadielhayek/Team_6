import React, { useState ,useEffect} from "react";
import axios from 'axios';

function Test() {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(()=>{
axios.get("http://localhost:5000/Experience",  { crossdomain: true }).then(response => {
          setText(response.data.response[0].title);
          setAuthor(response.data.response[0].company);
          console.log(response)
        });
        console.log(author)
        console.log(text)
    })
    return (
        <div>
            
            <h1>{text}</h1>
            <h3>{"-" + author}</h3>
        </div>
    )
}
export default Test;