import React from 'react'
import './Navbar.css' 
import { useState } from 'react'
import logo from '../../assets/logo.png'
import Underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

    const [menu, setMenu] = useState("Home");

  return (
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-26">
              <div className="flex shrink-0 items-center">
                <img src={logo} alt="Your Company" class="h-6 md:h-8 lg:h-12 w-auto" />
              </div>
              <div class="hidden sm:ml-6 md:block"> 
                <div class="flex space-x-4">
                  <AnchorLink href='#home'><p onClick={()=>setMenu("Home")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Home</span>{menu==="Home"? <img className='absolute' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-100} href='#about'><p href="#" onClick={()=>setMenu("About")} className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>About Me</span>{menu==="About"?<Space /> : <></>}</p></AnchorLink>
                  <AnchorLink href='#services'><p href="services" onClick={()=>setMenu("Services")} className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Services</span>{menu==="Services"?<Space /> : <></>}</p></AnchorLink>
                  <AnchorLink href='#portfolio'><p href="#" onClick={()=>setMenu("Portfolio")} className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Portfolio</span>{menu==="Portfolio"?<Space /> : <></>}</p></AnchorLink>
                  <AnchorLink href='#contact'><p href="#" onClick={()=>setMenu("Contact")} className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Contact</span>{menu==="Contact"?<Space /> : <></>}</p></AnchorLink>
                </div>
              </div>
              <div>
                <AnchorLink href='#contact'><p className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300' href='#'>Contact Me</p></AnchorLink>
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar