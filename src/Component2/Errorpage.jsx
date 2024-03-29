import React from 'react'
import './Errorpage.css';
import { NavLink } from 'react-router-dom'

export default function Errorpage() {
  return (
    <div id='error_page'>
    <div className='content'>
        <h2 className='header'>404</h2>
        <h4>Sorry! Page is not found</h4>

        <p>
        Oops! It seems like the page you're trying to access doesn't exist.
        If you believe there's an issue, feel free to report it, and we'll look into it.
        </p>
    </div>

    <div className='btns'>
        <NavLink to="/">return home</NavLink>
        <NavLink to='/contact'>report probleam</NavLink>
    </div>
      
    </div>
  )
}
