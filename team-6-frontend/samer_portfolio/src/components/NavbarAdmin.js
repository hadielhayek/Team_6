import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
class NavbarAdmin extends Component {

    render() {
        return (

            <div className="navbardiv">
                <nav><ul className="navbarSection"><li className="navlist"><Link to="/admin/about" className="navlink"> About me </Link> </li>
                    <li className="navlist"><Link to="/admin/experience" className="navlink"  >Experience</Link></li>
                    <li className="navlist"><Link to="/admin/feedback" className="navlink">Feedbacks</Link></li>
                    <li className="navlist"><Link to="/admin/blogs" className="navlink" > Blogs</Link></li>
                </ul>
                </nav></div>
        )
    }
}
export default NavbarAdmin