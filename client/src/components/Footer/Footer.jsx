import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons-holder">
        <div className="icons">
          <a href="https://github.com/Shubham-S-Lahase"><img src={require("./gitlogo.png")} alt="Github Logo" /></a>
          <a href=""><img src={require("./instalogo.png")} alt="Instagram Logo" /></a>
          <a href=""><img src={require("./telelogo.png")} alt="Telegram Logo" /></a>
          <a href=""><img src={require("./twitterlogo.png")} alt="Twitter Logo" /></a>
          <a href="https://api.whatsapp.com/send?phone=7709601253"><img src={require("./wplogo.png")} alt="WhatsApp Logo" /></a>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright@2023</span> <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
