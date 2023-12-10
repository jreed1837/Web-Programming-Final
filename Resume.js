import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css'; 

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <p>Download my resume to learn about my skills!</p>
      <a href="/Resume.pdf" download>
        Download Resume
      </a>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  );
};

export default Resume;
