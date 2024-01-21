import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./login.css";
import naver from "../../../assets/naver logo.png";
import google from "../../../assets/google-ion.png";
import ktalk from "../../../assets/kakao-talk-fill.png";

const BASEURL = "http://localhost:5050/api/v1/";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [validEmail, setValidEmail] = useState("");
  // const [validPassword, setValidPassword] = useState("");
  const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validation check
  //   if (!validEmail || !validPassword) {
  //     alert("Please enter both email and password.");
  //     return;
  //   }

  //   console.log(validEmail);
  //   console.log(validPassword);

  //   // history.push("/");
  // };

  const handleLogin =async()=>{
    try {
      const response = await fetch(`${BASEURL}auth/login`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password
        })
      }
      )
      const data = await response.json()
      if(response.ok){
        navigate("/home")
      }
      else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
     alert("Password or email is wrong")
    }
  }  
  return (
    <body>
      <div className="container">
        <h1>Sign In</h1>
        <div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox">
            <div className="check">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div>
            <button className="signin" type="submit" onClick={handleLogin}> 
              Sign In
            </button>
          </div>
        </div>
        <div className="or">
          <h3>Or</h3>
        </div>
        <div className="logos">
          <div className="circle-green">
            <a href="#">
              <img src={naver} alt="Naver" />
            </a>
          </div>
          <div className="circle-red">
            <a href="#">
              <img src={google} alt="Google" />
            </a>
          </div>
          <div className="circle-yellow">
            <a href="#">
              <img src={ktalk} alt="KakaoTalk" />
            </a>
          </div>
        </div>
        <Link to="/register">
          <button className="register">CREATE ACCOUNT</button>
        </Link>
      </div>
    </body>   
  );
};

export default Login;
