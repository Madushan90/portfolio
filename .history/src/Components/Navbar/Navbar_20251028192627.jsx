import React from 'react'
import './Navbar.css' 
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
      <nav>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-26">
              <div class="flex shrink-0 items-center">
                <img src={logo} alt="Your Company" class="h-8 w-auto" />
              </div>
              <div class="hidden sm:ml-6 sm:block"> 
                <div class="flex space-x-4">
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
                </div>
              </div>
              <div>
                <a className='inline-block text-white text-xl bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl px-6 py-2 transform hover:scale-105 transition-all duration-300' href='#'>Contact Me</a>
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar