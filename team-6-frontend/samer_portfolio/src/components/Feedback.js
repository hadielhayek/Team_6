import React from 'react';
import './../../src/App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import avatar from '../assets/images/Avatar.png';

function Feedback() {
    Aos.init({duration:2000});
    return (
            <div className="feedback" data-aos="fade-right">
                <div className="image_feedback">
                    <img className='avatar_feedback' src={avatar} alt="avatar" />
                </div>
                <div className = "text_feedback" style={{ backgroundColor: 'lightcyan', padding: "1.5rem" }}>
                    <h2>Front end Developer at Google</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                </div>
            </div>
    );
}

export default Feedback;
