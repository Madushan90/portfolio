import React from 'react'
import './Navbar.css' 
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap'>
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