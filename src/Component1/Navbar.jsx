import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../Component2/Storetoken/auth_token';

export default function Navbar() {

  const{isLoggedIn}=useAuth();
 
  return (
    <>
      <div className='Navbar'>
        <div className='Navbar_left'>
          <NavLink to='/'>Dsk Technology</NavLink>
        </div>
        <div className='Navbar_right'>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/service'>Service</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/tasks'>TaskList</NavLink></li>
              <li><NavLink to='/taskform'>TaskForm</NavLink></li>
              

              {
                isLoggedIn ?<li><NavLink to='/logout'>Logout</NavLink></li>
                :<>

                <li><NavLink to='/registor'>Registort</NavLink></li>
               <li><NavLink to='/login'>Login</NavLink></li>

                </>

              }
             


            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
