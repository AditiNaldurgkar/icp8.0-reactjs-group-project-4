import React from 'react';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">123 Main Street, Anytown, USA</p>
          <p className="footer-text">Phone: (123) 456-7890</p>
          <p className="footer-text">Email: job@gmail.com</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="ri-facebook-circle-fill"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="ri-twitter-fill"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link"><i class="ri-instagram-fill"></i></a>
            
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">At JobPortal, our mission is to connect job seekers with their ideal career opportunities and assist employers in finding the best talent. </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
