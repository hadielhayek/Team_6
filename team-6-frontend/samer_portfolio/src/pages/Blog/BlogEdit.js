import  React, { useState ,useEffect} from "react";
import Navbar from "../../components/navbar";
import './Blog.css';
import Button from "../../components/Button";
import axios from "axios";
import SmallButton from "../../components/SmallButton";
import { Link ,useLocation } from "react-router-dom";
export default function BlogEdit({blogs}) {

    const [blog, SetBlogs] = useState({
            title:"",
            description:"",
            date:"",
            image:"",
            link:"",

    })
    const location = useLocation().state.flag
    console.log(location) 
       useEffect(()=>{
           SetBlogs({
               title:blogs.title,
               description:blogs.description,
               date:blogs.date,
               image:blogs.image,
               link:blogs.link
           })
        } , [blogs])


        const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        SetBlogs({...blog, [e.target.name]:value});
        }

        const handleSubmission = (e) => {
        e.preventDefault();
        if(location){
              axios.post("http://localhost:5000/blog",{title:blog.title, description:blog.description, link:blog.link, image:blog.image, date:blog.date}).then(
              )
              console.log("this is the post")
        }
              else
              axios.put(`http://localhost:5000/blog/${blogs._id}`,{title:blog.title, description:blog.description, link:blog.link, image:blog.image, date:blog.date}).then(

              )

              SetBlogs({
                title:"",
                description:"",
                date:"",
                image:"",
                link:""
         })

        }
        useEffect(()=>{
            return(
            SetBlogs({})
            
            )
               },[])




    return(
        <>
        <Navbar />
     
    
       <form onSubmit={handleSubmission}>
         <div id="container2">
             
        <label for="description" id="description">Description:</label> &nbsp;
        <input type="text" name="description" id="description"  value={blog.description} onChange={handleOnChange}></input><br></br><br></br>
       
        <label for="title" id="title">Title:</label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  id="title" name="title" value={blog.title} onChange={handleOnChange} ></input><br></br><br></br>

        <label for="date" id="date">Date:</label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  id="date" name="date" value={blog.date} onChange={handleOnChange} ></input><br></br><br></br>



        <label for="image" id="image">Image:</label>&nbsp;&nbsp;
        <input type="text"  id="image" name="image" value={blog.image} onChange={handleOnChange} ></input><br></br><br></br>

        <label for="link" id="link">Link:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  id="link"  name="link"  value={blog.link}   onChange={handleOnChange} ></input><br></br><br></br>
         

        <div id="contbut">
            {/* <div>
            <div className="divbtn" style={{ marginLeft:"150px", marginTop: "20px" }}><Button text="Delete"  /></div>
            </div> */}
            <div>
            <div className="divbtn" style={{ marginLeft:"150px", marginTop: "20px"  }}><Button text="Submit" /></div>
            </div>
        
        </div>

         </div>
        
        </form>
        

        
        </>
    )
}