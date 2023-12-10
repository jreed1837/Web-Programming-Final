import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css'; 

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
      
      <p><Link to="/resume">View My Resume</Link></p>
    </div>
  );
};

export default ContactPage;
