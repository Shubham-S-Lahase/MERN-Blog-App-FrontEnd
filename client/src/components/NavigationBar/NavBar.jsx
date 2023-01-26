import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <nav>
        <li id="home">
          <Link to="/">Home</Link>
        </li>
        <li id="signup">
          <Link  id="l1" to="/Login">Login</Link>
          <Link to="/Register">SignUp</Link>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
