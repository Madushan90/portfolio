import React from 'react'
import './Navbar.css' 
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Space } from 'lucide-react'

const Navbar = () => {

    const [menu, setMenu] = useState("Home");

  return (
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-26">
              <div className="flex shrink-0 items-center">
                <img src={logo} alt="Your Company" class="h-8 w-auto" />
              </div>
              <div class="hidden sm:ml-6 md:block"> 
                <div class="flex space-x-4">
                  <p onClick={()=>setMenu("Home")} className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Home</span>{menu==="Home"?<Space /> : <></>}</p>
                  <p href="#" onClick={()=>setMenu("About")} className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>About Me</span>{menu==="About"?<Space /> : <></>}</p>
                  <p href="#" onClick={()=>setMenu("Services")} className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Services</span>{menu==="Services"?<Space /> : <></>}</p>
                  <p href="#" onClick={()=>setMenu("Portfolio")} className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Portfolio</span>{menu==="Portfolio"?<Space /> : <></>}</p>
                  <p href="#" onClick={()=>setMenu("Contact")} className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Contact</span>{menu==="Contact"?<Space /> : <></>}</p>
                </div>
              </div>
              <div>
                <a className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300' href='#'>Contact Me</a>
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar