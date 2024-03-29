import React, { useState, useEffect } from 'react';
import { useAuth } from './Storetoken/auth_token';
import { Link} from "react-router-dom";

import "./Admin_users.css";

export default function Admin_users() {
  const [users, setUsers] = useState([]);
  const { Authorization } = useAuth();

  //get all user data user data
  const getAllUserData = async () => {
    try {
      const response = await fetch("https://deploy-mern-api.vercel.app/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: Authorization,
        }
      });
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(`this error is coming inside the Admin_user ${error}`);
    }
  }

  useEffect(() => {
    getAllUserData();
  }, []);


 


  //*-----------------------------
  //Delete user data
  //**------------------------------ */

  const deletuser = async(id)=>{
    try{

      const response = await fetch(`https://deploy-mern-api.vercel.app/api/admin/user/delet/${id}`,{
        method: "DELETE",
        headers: {
          Authorization: Authorization,
        }
      });
      const data = await response.json();
      console.log(data);

      if(response.ok){
        getAllUserData();
      }
     
    }catch (error) {
      console.log(`this error is admin user delet ${error}`);
    }
  }

  return (
    <section className='adminuser_cnt'>
      <div className='adminuser_mid'>
        <h1>Admin User data</h1>
      </div>

      <div className='adminuser_table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((currUser, index) => (
              <tr key={index}>
                <td>{currUser.username}</td>
                <td>{currUser.email}</td>
                <td>{currUser.phone}</td>
                <td><Link to = {`/admin/users/${currUser._id}/edit`}>Edit</Link></td>
                <td><button onClick={()=>deletuser(currUser._id)
                }>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </section>
  );
}
