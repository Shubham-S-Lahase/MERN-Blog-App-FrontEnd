import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./RegisterForm.css";

const RegisterForm = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
      const response = await fetch('https://blogger-trigger-api.onrender.com/api/user/Register',  {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type':'application/json' }
    });
    if (response.status === 200){
      alert('registration successful');
      navigate('/Login')
    } else {
      alert('registration failed');
    }
  }

  return (
    <>
      <div className="register">
        <h1>Register here..</h1>
        <form onSubmit={register}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Register</button>
        </form>
        <h3>Already have an account??<Link style={{color: "yellow", paddingLeft: "10px"}} to='/Login'>Login here...</Link></h3>
      </div>
    </>
  );
};

export default RegisterForm;
