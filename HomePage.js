import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio!</h1>
      <p>On this website you can learn more about me, view my previous projects, contact me, and download my resume!</p>
      <p>Made by Jake Reed</p>
      <Link to="/about">Learn more about me!</Link>
    </div>
  );
};

export default HomePage;