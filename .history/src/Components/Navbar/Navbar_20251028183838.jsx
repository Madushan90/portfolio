import React from 'react'
import './Navbar.css' 
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' />

        <ul className="nav-menu bg-red-400 text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">
            <a className='primary-button'>Contact Me</a>
        </div>
    </div>
  )
}

export default Navbar