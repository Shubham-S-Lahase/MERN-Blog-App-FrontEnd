import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons-holder">
          <div className="icons">
          <img src={require('./gitlogo.png')} alt="Github Logo" />
          <img src={require('./instalogo.png')} alt="Instagram Logo" />
          <img src={require('./telelogo.png')} alt="Telegram Logo" />
          <img src={require('./twitterlogo.png')} alt="Twitter Logo" />
          <img src={require('./wplogo.png')} alt="WhatsApp Logo" />
          </div>
        </div>
      <div className="copyright">
        <span>Copyright@2023</span> <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
