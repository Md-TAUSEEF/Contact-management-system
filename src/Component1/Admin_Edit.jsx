import React from "react";
import "./Admin_Edit.css";
import { useState, useEffect } from "react";
import { useAuth } from "../Component2/Storetoken/auth_token";
import { useParams } from "react-router-dom"; //useparams hook always use to take url from component

export default function Admin_Edit() {
  const params = useParams();



  const { users } = useAuth();
  const [usersDat, setUserDat] = useState([]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { Authorization } = useAuth();

  //get single user Data

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `https://deploy-mern-api-nu.vercel.app/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: Authorization,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      console.log(data);
      setUserDat(data);
    } catch (error) {
      console.error(`Error fetching user data: ${error}`);
    }
  };

  useEffect(() => {
   
      getSingleUserData();
    
  }, []);

  //auto fill data

  // const [userData, setUserData] = useState(true);

  // useEffect(() => {
  //   if (userData && users) {
  //     setUser({
  //       username: users.username,
  //       email: users.email,
  //       phone: users.phone,
  //     });
  //     setUserData(false);
  //   }
  // }, [userData, users]);

  const inputchange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const editformsubmit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));

    //update the user data in admin pannel

   
    try {
      const response = await fetch(
        `https://deploy-mern-api-nu.vercel.app/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: Authorization,
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        alert("update sucessfully");
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.log(`this error is coming in side the update component ${error}`);
    }
  };
  return (
    <>
      <div className="Edit_container">
        <div className="Edit_mid">
          <form onSubmit={editformsubmit}>
            <div className="Editform">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Name"
                
                required
                autoComplete="off"
                value={user.username}
                onChange={inputchange}
              />
            </div>

            <div className="Editform">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="off"
                value={user.email}
                onChange={inputchange}
              />
            </div>

            <div className="Editform">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                autoComplete="off"
                value={user.phone}
                onChange={inputchange}
              />
            </div>

            <br />

            <button type="submit" className="btn">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
