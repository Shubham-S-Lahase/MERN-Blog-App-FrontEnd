import React, { useState } from "react";
import './RegisterForm.css';

const RegisterForm = () => {
  return(
    <>
      <div className="register">
        <h1>Register here..</h1>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="password" />
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;