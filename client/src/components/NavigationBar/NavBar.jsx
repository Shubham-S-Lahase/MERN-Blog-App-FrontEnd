import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <nav>
        <li id="home">
          <Link id="l0" to="/">Welcome</Link>
          <Link id="l1" to="/Home">Home</Link>
        </li>
        <li id="signup">
          <Link  id="l2" to="/Login">Login</Link>
          <Link id="l3" to="/Register">SignUp</Link>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
