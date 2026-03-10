import React from 'react'
import './Navbar.css' 
import { useState } from 'react'
import { Menu, X  } from 'lucide-react'
import logo from '../../assets/logo.png'
import Underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [sideBar, setsideBarOpen] = useState(true);
  
  const [menu, setMenu] = useState("Home");


  return (
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <Menu onClick={() => setsideBarOpen(true)} className='md:hidden text-white mt-3 w-8 h-8 cursor-pointer hover:text-amber-400' />
        <div class={`${sideBar ? "translate-x-0" : "translate-x-full"} md:hidden fixed inset-y-0 right-0 z-50 w-80 bg-white/10 backdrop-blur-2xl border-r border-white/20 transform transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className='flex pr-2 justify-end'>
            <X onClick={() => setsideBarOpen(false)} className='text-white mt-3 w-8 h-8 cursor-pointer hover:text-amber-400' />
          </div>
          <AnchorLink href='#home'><p onClick={()=>setMenu("Home")} className="relative cursor-pointer rounded-full px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white mb-3"><span>Home</span>{menu==="Home"? <img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
          <AnchorLink offset={-100} href='#about'><p href="#" onClick={()=>setMenu("About")} className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white mb-3"><span>About Me</span>{menu==="About"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
          <AnchorLink offset={-80} href='#services'><p href="services" onClick={()=>setMenu("Services")} className="cursor-pointer rounded-full px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white mb-3"><span>Services</span>{menu==="Services"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
          <AnchorLink offset={-80} href='#portfolio'><p href="#" onClick={()=>setMenu("Portfolio")} className="cursor-pointer rounded-full px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white mb-3"><span>Portfolio</span>{menu==="Portfolio"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
          <AnchorLink offset={-80} href='#contact'><p href="#" onClick={()=>setMenu("Contact")} className="cursor-pointer rounded-full px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white mb-3"><span>Contact</span>{menu==="Contact"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
        </div>

            <div className="flex items-center justify-between h-26">
              <div className="flex shrink-0 items-center">
                <img src={logo} alt="Your Company" class="h-6 md:h-8 lg:h-12 w-auto" />
              </div>
              <div class="hidden sm:ml-6 md:block"> 
                <div class="flex space-x-4">
                  <AnchorLink href='#home'><p onClick={()=>setMenu("Home")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Home</span>{menu==="Home"? <img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-100} href='#about'><p href="#" onClick={()=>setMenu("About")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>About Me</span>{menu==="About"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-80} href='#services'><p href="services" onClick={()=>setMenu("Services")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Services</span>{menu==="Services"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-80} href='#portfolio'><p href="#" onClick={()=>setMenu("Portfolio")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Portfolio</span>{menu==="Portfolio"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-80} href='#contact'><p href="#" onClick={()=>setMenu("Contact")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Contact</span>{menu==="Contact"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                </div>
              </div>
              <div>
                <AnchorLink offset={-80} href='#contact'><p className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300' href='#'>Contact Me</p></AnchorLink>
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar