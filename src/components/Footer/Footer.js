import React from 'react';
import './Footer.css';
import logo from '../Navbar/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-container">

        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            At JobPortal, our mission is to connect job seekers with their ideal career opportunities and assist employers in finding the best talent.
          </p>
          <div className="footer-social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">
            <a
              href="https://www.google.com/maps/place/Ground+Floor,+Tower+1,+Pune+IT+Park,+Kharadi,+Pune,+Maharashtra+411014,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ground Floor, Tower 1, Pune IT Park, Kharadi, Pune, Maharashtra 411014, India
            </a>
          </p>
          <p className="footer-text">
            <a href="tel:+11234567890">+91 8790654321</a>
          </p>
          <p className="footer-text">
            <a href="mailto:hireme@gmail.com">careerconnect@gmail.com</a>
          </p>

        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/SignUp" className="footer-link">Sign-Up</a></li>
            <li><a href="/login" className="footer-link">Login</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2024 . All rights reserved.</p>
        <ul className="footer-legal">
          <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;