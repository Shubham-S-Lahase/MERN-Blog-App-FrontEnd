import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/user/Login', {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',  
    });
    if(response.ok) {
      setRedirect(true);
    } else{
      alert('Incorrect Credentials~~Please enter Correct Credentials')
    }
  };

  if(redirect){
    return <Navigate to={'/'} />
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
