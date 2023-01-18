import React, { useState } from "react";
import Add from "../img/addAvatar.png";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};
