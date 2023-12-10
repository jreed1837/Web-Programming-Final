import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        My name is Jake. I grew up in the town Stoneham, MA which is about 15 minutes away from Boston. 
        I love to play sports with my friends such as basketball and football. I also love to learn about new technology and how it
        changes the world. I hope to become a programmer sometime in the future.
      </p>
      <p>
        Some of my skills include working on websites using React, HTML, CSS, and JavaScript which was also used on this project.
        I'm also familiar with other programs such as SQL and Python. I have had some experience with cybersecurity and networking
        at my old college. That was interesting to learn but I prefer coding over working with numbers.
        I have enjoyed all the programs I've learned but I think my favorite so far is Python. 
      </p>
      <h3>Hobbies</h3>
      <p>
        When I'm not coding or learning about other technologies, I love to watch any Boston sports team play (besides the Patriots 
        this year). Sports have always been a big part of my life and I hope to continue playing them as I get older. As previously 
        mentioned, I also enjoy hanging out with my friends and spending time with my family. Every summer, my family and I try and go
        on a vacation to somewhere we haven't been to before and it is always a blast to spend time with them.
      </p>
      <Link to="/projects">See My Projects</Link>
    </div>
  );
};

export default AboutPage;
