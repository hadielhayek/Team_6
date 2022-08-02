import './App.css';
import React, { useState , useEffect} from 'react';
import avatar from './assets/images/Avatar.png';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Components
import Feedbacks from './components/Feedbacks';
import Experience from './components/Experience';
import Blogs from './components/Blogs';
import Navbar from './components/navbar';
import About from './components/About'
import AboutDB from './pages/About/About';
import AboutEdit from './pages/About/AboutEdit';
import Contact from './components/contact'
import Blog from './pages/Blog/Blog';
import BlogEdit from './pages/Blog/BlogEdit';
import ExperienceDB from './pages/Experience/Experience';
import ExperienceEdit from './pages/Experience/ExperienceEdit';
import FeedbackDB from './pages/Feedback/FeedbackDB';
import Test from './components/test'
import axios from 'axios';


function App() {
  const [experiences, SetExperience] = useState({})
  const [blogs, SetBlogs] = useState({})

  
  const editExperience = (experience)=>{
      SetExperience(experience)
      console.log("From APP"+JSON.stringify(experience))
  }
  const editBlog = (blog)=>{
    SetBlogs(blog)
    console.log("From APP"+JSON.stringify(blog))
}

  return (

    <Router>
      {/* <Navbar />,
      <About/>,
      <Experience />,
      <Feedbacks />,
      <Blogs />,
      <Contact/> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="admin/experience" element={<ExperienceDB  editExperience={editExperience}/>} />
        <Route path="admin/experience/edit" element={<ExperienceEdit experiences={experiences}/>} />
        <Route path="admin/feedback" element={<FeedbackDB />} />
        <Route path="admin/blogs" element={<Blog editBlog={editBlog}/>} />
        <Route path="admin/blogs/edit" element={<BlogEdit blogs={blogs}/>} />
        <Route path="admin/blog/add" element={<BlogEdit/>} />
        <Route path="admin/about" element={<AboutDB/>}/>
        <Route path="admin/about/edit" element={<AboutEdit />}/>
      </Routes>
    </Router>

  );
    }
function Home() {
  return (
    <div>
      <Navbar />,
      <About />
      <Experience />
      <Feedbacks />
      <Blogs />
      <Contact />
      {/* <Test/> */}
    </div>
  )
}


export default App;
