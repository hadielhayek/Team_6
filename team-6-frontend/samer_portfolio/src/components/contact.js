
import React, { Component } from "react";
import "./contact.css"
import { GoMarkGithub, GoMail } from "react-icons/go";
import { AiTwotonePhone } from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import Aos from "aos";
import 'aos/dist/aos.css';
class Contact extends Component {

    render() {

        Aos.init({duration:2000});
        return (

            <div data-aos="fade-down" id="contact_id" className="contact" style={{display:"flex", justifyContent:"space-around"}}>
                <GoMarkGithub size={40} color="#2C98F0"/>
                <GoMail size={40} color="#2C98F0"/>
                <AiTwotonePhone size={40} color="#2C98F0"/>
                <GrLinkedinOption size={40} color="#2C98F0"/>
            </div>
        )
    }
}
export default Contact;