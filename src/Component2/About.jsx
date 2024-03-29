import React from "react";
import Homeimg from "../Component1/images/home.png";
import { NavLink } from "react-router-dom";
import './About.css';

import { useAuth } from "./Storetoken/auth_token";

export default function About() {

  const{users}=useAuth();
  return (
    <>
    <div className="about_container">
    <div className="aboutcnt">
      <div className="aboutcnt_left">
        <h3>Welcome,{users.username} to our website</h3>
        <br />

        <h1>Why Choose Us?</h1>
        <br />
        <p>
          Expertise. Our team consists of experienced IT professionals who
          arepassionate about staying up-to-date with the latest industry
          trends.
        </p>
        <br />

        <p>
          Customization: We understand that every business is unique. That's
          whywe create solutions that are tailored to your specific needs and
          goals.
        </p>
        <br />

        <p>
          Customer-Centric Approach: We prioritize your satisfaction and
          providetop-notch support to address your IT concerns.
        </p>
        <br />

        <p>
          Affordability: We offer competitive pricing without compromising on
          the quality of our services.
        </p>
        <br />

        <p>
          Reliability. Count on us to bo there when you need us. We're
          committedto ensuring your IT environment is reliable and available
          24/7
        </p>

        <br />
        <div className="Home_btn_left">

        <NavLink to="/contact">
          <button type="submit" className="btn">
            Contact
          </button>
        </NavLink>
        <button type="submit" className="btn1">
          Learn More
        </button>

        </div>
      </div>

      <div className="aboutcnt_right">
      <img
            src={Homeimg}
            alt="this is come page image"
            style={{ width: 380, height: 400 }}
          />
      </div>
    
    </div>

    </div>

    <div className="footer">
      <p>©Copyright<span>Dsk Technology</span></p>
    </div>
    </>
  );
}
