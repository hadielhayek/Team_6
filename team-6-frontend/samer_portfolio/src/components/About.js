import React, { Component } from "react";
import './about.css'
import samerimg from '../images/samer'
import Aos from "aos";
import 'aos/dist/aos.css';
import samercv from '../files/samercv.pdf'
import './Button'
class About extends Component {

    render() {

        Aos.init({duration:2000});
        return (
            
            <div className="about" id="aboutme_id" data-aos="fade-down">
                <div className="Personalinfo">
                    <div className="profilepicture">
                        <img src={samerimg} alt="samer portfolio"></img>
                    </div>
                    <div className="information">
                        <p>  Samer Hoblos</p>
                        <p>  Front end Developer</p>
                        <p>  samerhoblos94@gmail.com</p>
                        <p>   00961 3 28 21 03  </p>
                    </div>
                </div>
                <div className="aboutinfo">
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Vivamus eget justo suscipit,
                        dictum leo vitae, faucibus nulla. Ut cursus
                        mi dui. Proin nec mauris volutpat, molestie
                        tellus in, gravida dolor. Pellentesque nibh
                        eros, fermentum ut ullamcorper at, rutrum
                        varius enim.</p>
                        
   <div className="donload" > <a className="btnCv" href={samercv} download > download CV</a></div>

                        </div>
              
            </div>
        )
    }
}
export default About;