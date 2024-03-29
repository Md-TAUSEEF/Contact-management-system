import React from "react";
import Homeimg from "../Component1/images/home.png";
import design from '../Component1/images/design.png';
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Storetoken/auth_token";

export default function Home() {

  const{users}=useAuth();
  return (<>
    <div className="Home_container">
      <div className="Home_midcnt">
        <div className="Home_midcnt_left">
          <h3>Hii I am {users.username}and Full Stack Devloper</h3>
          <h1>Well Come to Dsk Technology</h1>
          <p>
            As a highly motivated and dedicated Computer Science student, I am
            excited to launch my career in the technology industry. Throughout
            my academic journey, I have gained a solid understanding of computer
            science principles, programming languages, and software development
            concepts. I possess a strong analytical mindset and a passion for
            solving complex problems through innovative technological solutions.
          </p>

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

        <div className="Home_midcnt_right">
          <img
            src={Homeimg}
            alt="this is come page image"
            style={{ width: 380, height: 400 }}
          />
        </div>
      </div>

      {/* this is service part */}

      <div className="Home_cnt_mid">
      <div className="Home_cnt_midh">
        <div className="Home_cnt_midrow1">
          <h1>50+ </h1>
          <p>registered Company</p>
        </div>

        <div className="Home_cnt_midrow1">
          <h1>100,00+ </h1>
          <p>Happy Clients</p>
        </div>

        <div className="Home_cnt_midrow1">
          <h1>500+ </h1>
          <p>Well Known Devlopers</p>
        </div>

        <div className="Home_cnt_midrow1">
          <h1>24/7 </h1>
          <p>Service</p>
        </div>
      </div>
      </div>

      <div className="Home_midend">
        <div className="Home_midend_left">


       
        <img
            src={design}
            alt="this is come page image"
            style={{ width: 380, height: 400 }}
          />

        </div>

        <div className="Home_btn_right">

        <h3>I am Full Stack Devloper</h3>
          <h1>Well Come to Dsk Technology</h1>
          <p>
            As a highly motivated and dedicated Computer Science student, I am
            excited to launch my career in the technology industry. Throughout
            my academic journey, I have gained a solid understanding of computer
            science principles, programming languages, and software development
            concepts. I possess a strong analytical mindset and a passion for
            solving complex problems through innovative technological solutions.
          </p>

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
      </div>
    </div>

    <div className="footer">
      <p>©Copyright<span>Dsk Technology</span></p>
    </div>

    </>
    
  );
}
