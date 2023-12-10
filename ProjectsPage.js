import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css'; 
import project1Image from './images/project1.jpg';
import project2Image from './images/project2.jpg';

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      
      <div className="project">
        <img src={project1Image} alt="Project 1" />
        <h2>Project 1</h2>
        <p>This is the first website that I fully built in this class. It is not the best website and it is very basic but I am proud
        of how it came out as it was my first time using HTML and CSS. I learned a lot from working on this project and I took most of
        what I learned from that and put it into this project. Hopefully, in the future, I can look back on this project and see how far
        I came when designing and running websites. 
        </p>
      </div>

      <div className="project">
        <img src={project2Image} alt="Project 2" />
        <h2>Project 2</h2>
        <p>This was my first time using the React application using JavaScript. Learning the basics of how to run this application
        and making sure all the JavaScript and CSS files were in the right place was confusing at first but the more I practiced
        and learned, the easier it was to use. I am also proud of how this came out and how I was able to get it to function correctly
        without having too much confusion aside from the beginning of the project. This project helped me a lot with this final project
        as well as with figuring out how to use React and how to implement buttons/design features.
        </p>
      </div>

      <Link to="/contact">Contact Me</Link>
    </div>
  );
};

export default ProjectsPage;
