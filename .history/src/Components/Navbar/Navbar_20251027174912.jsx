import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='' alt='logo' />

        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">
            Contact Me
        </div>
    </div>
  )
}

export default Navbar