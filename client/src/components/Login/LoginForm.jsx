import React, { useState } from "react";
import { useContext } from "react";
import { Navigate, Link } from 'react-router-dom';
import { UserContext } from "../UserContext";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch('https://blogger-trigger-api.onrender.com/api/user/Login', {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      // credentials: "include"  
    });
    if(response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);  
      });
    } else{
      alert('Incorrect Credentials~~Please enter Correct Credentials')
    }
  };

  if(redirect){
    return <Navigate to={'/Home'} />
  }

  return (
    <>
      <div className="login">
        <h1>Login here..</h1>
        <form onSubmit={login}>
          <input type="text" 
                 placeholder="Username" 
                 value={username}
                 onChange={(e) => setUserName(e.target.value)}
                 />
          <input type="password" 
                 placeholder="Password" 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)}
                 />
          <button>Login</button>
        </form>
        <h3>New here...<Link style={{color: "yellow", paddingLeft: "10px"}} to='/Register'>Join us</Link></h3>
      </div>
    </>
  );
};

export default LoginForm;
