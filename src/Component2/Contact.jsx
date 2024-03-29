import React, { useState, useEffect } from 'react';
import './Contact.css';
import login from '../Component1/images/login.png';
import { useAuth } from './Storetoken/auth_token';

export default function Contact() {
  //auto fill component
  const { users } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: ""
  });

  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && users) {
      setUser({
        username: users.username,
        email: users.email,
        message: ""
      });
      setUserData(false);
    }
  }, [userData, users]);

  const inputchange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  const contactformsubmit =async (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));

    try{
      const contactform = await fetch('https://deploy-mern-api.vercel.app/api/form/contact',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(user),
      });

      console.log("login data",contactform);

      if(contactform.ok){
        const contactformdata = await contactform.json();
        console.log(contactformdata);
        alert("message successfull");
      }

    }catch(error){
      console.log("error is comin in contact form ${error}");

    }

    console.log(user);
    setUser({
      username: "",
      email: "",
      message: ""
    });
  }

  return (
    <>
      <div className='contactcnt'>
        <div className='contactcnt_left'>
          <img src={login} alt='this is login page image' style={{ width: 410, height: 480 }} />
        </div>

        <div className='contactcnt_right'>
          <div className='logincnt_header'>
            <h1>Contact Us</h1>
          </div>

          <form onSubmit={contactformsubmit}>
            <div className='contactform'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' placeholder='Enter your username' required autoCapitalize='off' value={user.username} onChange={inputchange} />
            </div>

            <div className='contactform'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' placeholder='Enter your email id' required autoCapitalize='off' value={user.email} onChange={inputchange} />
            </div>

            <div className='contactform'>
              <label htmlFor='message'>Message</label>
              <textarea rows="10" cols="36" name="message" form="usrform" value={user.message} onChange={inputchange}>
                Enter text here...
              </textarea>
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>

      <div className='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944508.8714321019!2d72.30283889418497!3d22.372961767898033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1703930841115!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer">
        <p>©Copyright<span>Dsk Technology</span></p>
      </div>
    </>
  )
}
