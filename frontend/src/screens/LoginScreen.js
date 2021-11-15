import "./Login.css"
import { Component, useState } from 'react'
import Axios from 'axios'
import { useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";


const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPass] = useState('')

    const submitReview = () => {
        Axios.post('http://localhost:3001/api/login', {
            username: username,
            password: password,
        }).then(() => {
            alert("sucessful login");
        });
    }; 
  
    return <div className="loginScreen">
      <div class = "form">
          <h1 id = "loginHeader">Login</h1>
          <label>Username</label>
          <input id = "input1"
              type = "text"
              name = "username"
              onChange = {(e) => {
                  
              }}
          />
          <label>Password</label>
          <input
              type = "text"
              name = "password"
              onChange = {(e) => {
                  
              }}
          />
          <button id = "loginButton"> Login </button>
      </div>
    </div>
    
}

export default LoginScreen;
