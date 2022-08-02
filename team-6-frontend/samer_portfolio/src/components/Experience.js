
import React, { useState, useEffect } from "react";
import './experience.css'
import iconpen from '../images/iconpen'
import { BsPencil } from 'react-icons/bs';
import axios from 'axios';
import Aos from "aos";
import 'aos/dist/aos.css';

function Experience() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/Experience", { crossdomain: true }).then(response => {
            setData(response.data.response);

            console.log(response)
        });
        console.log()
        console.log()
    }, [])
    return (

        <div id="experience_id" data-aos="fade-right">

            <div className='experiences'>
                <h1 className="experienceTitle">Experience</h1>
                {
                    data.map((data,index) => {
                        return(
                        <div className='experience'>
                            <div className='experience_items'>
                                <div className='experience_icon_div blue_icon'>
                                    <BsPencil />
                                </div>
                                <div className='experience_item'>

                                    <h1> { data.title}</h1>
                                    <h4>{data.company}</h4>
                                    <p>  <span></span><br />
                                      </p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

                <div className='experience'>
                    <div className='experience_items'>
                        <div className='experience_icon_div white_icon'>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Experience;
