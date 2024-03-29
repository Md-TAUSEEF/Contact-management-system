import React from "react";
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { useAuth } from "../Component2/Storetoken/auth_token";
import "./Admin_Navbar.css";

export default function Admin_Navbar() {

  //yah line ushke liye h jab tak user admin search na kar le kab tak loding dikhaye
  const{users}=useAuth();
  const{isAdminlogin}=useAuth();
  const navigate = useNavigate();

  if(isAdminlogin){
    return <h1>loding ...........</h1>
  }

  if (!users.isAdmin) {
    navigate("/"); // Redirect to the home page if user is not admin
    return null; // Return null to avoid rendering the rest of the component
  }
  return (
    <>
    <header>
      <div className="admincontainer">
        <nav>
          <ul>
            <li><NavLink to="/admin/users"><FaUserAlt />users</NavLink></li>
            <li><NavLink to="/admin/contacts"><IoIosContact />contacts</NavLink></li>
            <li><NavLink to="/service"><FaRegListAlt />services</NavLink></li>
            <li><NavLink to="/"><IoHomeSharp />Home</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <Outlet/>
    </>
  );
}
