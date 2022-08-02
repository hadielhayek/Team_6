import React, { Component } from "react";
import './navbar.css'
class Navbar extends Component {

    render() {
        return (

<div className="navbardiv">
<nav><ul className="navbarSection"><li className="navlist"><a href="#aboutme_id" className="navlink"> About me </a> </li>
    <li className="navlist"><a href="#experience_id" className="navlink"  >Experience</a></li>
        <li className="navlist"><a href="#feedbacks_id"  className="navlink">Feedbacks</a></li>
        <li className="navlist"><a href="#blogs_id" className="navlink" > Blogs</a></li>
        <li className="navlist"><a href="#contact_id" className="navlink" >Contact</a></li>
        </ul>
        </nav></div>
        )
        }
    }
    export default Navbar