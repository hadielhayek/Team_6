import React, { useState, useEffect } from "react";
import './../Blogs.css';

function Blog({ src, title, description, link, date }) {

   
    return (
        <div className="blog">
            <div className='img_container'><img className="blog_img" src={src} alt="first blog img"></img></div>
            <h5 className="title">{title}</h5>
            <h6 className="date">{(date).substring(0,10)}</h6>
            <p>{description}</p>
            <a href={link} className='bloglink'>Learn more</a>
        </div>
    )
}

export default Blog