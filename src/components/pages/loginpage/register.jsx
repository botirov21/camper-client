import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BASEURL = "http://localhost:5050/api/v1/";



const Register = () => {
  // Create state variables to hold the form field values and errors
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()



  const handleRegister =async()=>{
    // e.preventDefault(); // Prevent form submission

    // Validate repeated password
    if (password !== repeatPassword) {
      setErrors({ repeatPassword: 'Passwords do not match' });
      return;
    }
    try {
      const response = await fetch(`${BASEURL}auth/register`, {
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
        navigate("/"); // Execute the navigation
        alert("Succesfuly registered ");
        console.log(response)
      } else {
        // Handle non-200 responses appropriately
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  }  

  return (
    <div>
      <div className="container">
        <h1>Registrate</h1>
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
            {errors.email && <span style={ {color:'red'}} className="error">{errors.email}</span>}
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
            {errors.password && <span style={ {color:'red'}} className="error">{errors.password}</span>}
          </div>
          <div className="password">
            <label htmlFor="repeatpass">Repeat Your Password</label>
            <input
              type="password"
              id="repeatpass"
              placeholder="Repeat Password..."
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {errors.repeatPassword && <span style={ {color:'red'}} className="error">{errors.repeatPassword}</span>}
          </div>
          <div className="checkbox">
            <div className="check">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
          </div>
          <button className="register" type="submit" onClick={handleRegister}>
            Registrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
