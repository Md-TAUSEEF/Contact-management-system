import React, { useState } from "react";
import registorImage from '../Component1/images/register.png'
import "./Registor.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./Storetoken/auth_token";



export default function Registor() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "", 
    phone: "",
    password: ""
  });


  const {StoreTokenIns}=useAuth();
  const handleInputChange=(e)=>{

    
    
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]:value,
    });

   
  }  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  
    try {
      const response = await fetch("https://deploy-mern-api.vercel.app/api/auth/registor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("registration successful");
        StoreTokenIns(responseData.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
       
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  

  return (
    <>
      <div className="registorcnt">
        <div className="registorcnt_left">
          <img src={registorImage} alt="this is registor image" style={{ width: 450, height: 500 }} />
        </div>
        <div className="registorcnt_right">
          <div className="registor_right_head">
            <h1>Registration form</h1> 
          </div>


          <form onSubmit={handleSubmit}>
            <div className="form_row">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter here user name"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInputChange} 
              />
            </div>
            <div className="form_row">
              <label htmlFor="email">Email</label>
              <input
              className="row2"
                type="email"
                name="email"
                placeholder="Enter here user email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInputChange} 
              />
            </div>
            <div className="form_row">
              <label htmlFor="phone">Phone</label>
              <input 
              className="row2"
                type="number"
                name="phone"
                placeholder="Enter here user phone number"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInputChange} 
              />
            </div>
            <div className="form_row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter here password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInputChange} 
              />
            </div>
            <br />
            <button type="submit" className="btn">Register Now</button>
          </form>
        </div>
      </div>

      <div className="footer">
      <p>©Copyright<span>Dsk Technology</span></p>
    </div>
    </>
  );
}
