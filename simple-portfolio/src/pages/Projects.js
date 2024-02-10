import React from "react";
import project1 from '../images/project1.png'; 
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

const Projects = () =>{
    return(
        <section>
			<h2>Projects</h2>
			<ul>
				<li>Project 1</li>
				<img src={project1} alt="" /> 
				<li>Project 2</li>
				<img src={project2} alt="" /> 
                <li>Project 3</li>
				<img src={project3} alt="" /> 
			</ul>
		</section>
    )
}

export default Projects;