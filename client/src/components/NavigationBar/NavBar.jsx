import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

import "./NavBar.css";

const NavBar = () => {
  const {userInfo,setUserInfo} = useContext(UserContext);
  useEffect(() => {
    fetch("https://blogger-trigger-api.onrender.com/api/user/Profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
       setUserInfo(userInfo);
      });
    });
  }, []);

  function logout(){
    fetch('https://blogger-trigger-api.onrender.com/api/user/Logout',{
      // credentials: "include",
      method: 'POST'
    });
    setUserInfo(null);
    console.log("User Logout");
  }

  const username = userInfo?.username;

  return (
    <div className="nav">
      {username && (
        <>
          <nav>
            <li>
              <Link id="l0" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link id="l1" to="/Create">
                Create New Post
              </Link>
            </li>
            <li>  
              <Link id="l2" to='/' onClick={logout}>
                    <h3 id="usernamehead"> ({username}) </h3>
                Logout
              </Link>
            </li>
      </nav>
        </>
      )}
    </div>
  );
};

export default NavBar;
