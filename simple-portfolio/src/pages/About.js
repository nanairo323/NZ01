import React from "react";
import image1 from '../images/image1.jpg'; 

const About = () =>{
    return(
        <section className="aboutpage"> 
            <h2>About Me</h2>
            <img src={image1} alt="" /> 
            <br />
            <p>I am a web developer beginner.</p>
            <p></p>
        </section>
    )
}

export default About;