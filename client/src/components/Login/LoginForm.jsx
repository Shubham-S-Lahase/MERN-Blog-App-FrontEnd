import React, { useState } from "react";
import './LoginForm.css';

const LoginForm = () => {
  return(
    <>
      <div className="login">
        <h1>Login here..</h1>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;