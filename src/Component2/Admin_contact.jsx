import React from 'react'
import { useAuth } from './Storetoken/auth_token';
import { useState,useEffect } from 'react';
import "./Admin_contact.css";

export default function Admin_contact() {
  const [contact, setContact] = useState([]);
  const { Authorization } = useAuth();

  //get all contact data
  const getAllcontactData = async () => {
    try {
      const response = await fetch("https://deploy-mern-api.vercel.app/api/admin/contact", {
        method: "GET",
        headers: {
          Authorization: Authorization,
        }
      });
      const data = await response.json();
      console.log(data);
      setContact(data);
    } catch (error) {
      console.log(`this error is coming inside the Admin_user ${error}`);
    }
  }

  useEffect(() => {
    getAllcontactData();
  }, []);

  //delete all contact data
  const deletcontact = async(id)=>{
    try{

      const response = await fetch(`https://deploy-mern-api.vercel.app/api/admin/contact/delet/${id}`,{
        method: "DELETE",
        headers: {
          Authorization: Authorization,
        }
      });
      const data = await response.json();
      console.log(data);

      if(response.ok){
        getAllcontactData();
      }
     
    }catch (error) {
      console.log(`this error is admin user delet ${error}`);
    }
  }


  return (
    <section className='admincontact_cnt'>
    <div className='admincontact_mid'>
      <h1>Admin Contact data</h1>
    </div>

    <div className='admincontact_table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((currUser, index) => (
            <tr key={index}>
              <td>{currUser.username}</td>
              <td>{currUser.email}</td>
              <td>{currUser.message}</td>
              <td>Edit</td>
              <td><button onClick={()=>deletcontact(currUser._id)
                }>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  </section>
  )
}
