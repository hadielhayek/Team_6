import React from "react";
import './../Blogs.css';
import blogg from '../images/blogg.jpg'
import Button from './Button';
import Blog from './Blog';
import axios from 'axios';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

 function Blogs() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5000/blog", { crossdomain: true }).then(response => {
            setData(response.data.response);
            setLoading(false)
            console.log(response)
        });
    }, [])
    console.log("ddddddddddd", data)


    // Aos.init({duration:2000, once:true});
    return (
        <div className="blogs" id="blogs_id">
            <h1> Blogs</h1>

          
            <div className='blogs_container' >
           
           {
               !loading && data.map((data)=>{
                return (<div data-aos="fade-down-right">
                    <Blog title={data.title} src={blogg} description={data.description} link={data.link} date={data.date}/>
                </div>)
               })
           }
             {/* <div data-aos="fade-down-right">
                 
                  <Blog  src={blogg} title={data[0].title} description="kdejsljrkslkjs" link="#" />
                        </div> */}

                        {/* <div data-aos="fade-down-left"> <Blog src={blogg} title="Database" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque feugiat porta erat id rhoncus. Quisque lacus lorem.
                        Fusce vehicula erat non molestie fringilla.
                        Duis fringilla tellus aliquet sodales tincidunt" link="#" /></div> */}
{/* 
             <div data-aos="fade-up-right">   <Blog src={blogg} title="Database" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque feugiat porta erat id rhoncus. Quisque lacus lorem.
                        Fusce vehicula erat non molestie fringilla.
                        Duis fringilla tellus aliquet sodales tincidunt" link="#" /></div> */}

                {/* <div  data-aos="fade-up-left"><Blog src={blogg} title="Database" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque feugiat porta erat id rhoncus. Quisque lacus lorem.
                        Fusce vehicula erat non molestie fringilla.
                        Duis fringilla tellus aliquet sodales tincidunt" link="#" /></div> */}
            
                        </div>  

                        
                 



            <div style={{ textAlign: 'center', marginTop: "20px" }}> <Button text="Show all Blogs" /></div>

                     
        




        </div>
    )

    
}

export default Blogs;
