import './Navbar.css' 
import { useState, useRef } from 'react'
import logo from '../../assets/logo.png'
import Underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

    const [menu, setMenu] = useState("Home");
    const menuRef = useRef();

    const openMenu = () => {
      menuRef.current.style.right = "0px";
    }

    const closeMenu = () => {
      menuRef.current.style.right = "-350px";
    }

  return (
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between  h-26">
              <div className="flex flex-1 shrink-0 items-center">
                <img src={logo} alt="Your Company" class="h-6 md:h-8 lg:h-12 w-auto" />
                <Menu onClick={openMenu} className='text-white w-8 h-8' />
              </div>
              <div ref={menuRef} class="hidden1 sm:ml-6 md:block"> 
                <div class="flex flex-col p-4 mt-35 items-center w-80  bg-black md:bg-transparent md:flex-row space-x-4">
                  <X onClick={closeMenu} className='text-white w-12 h-12 pt-3' />
                  <AnchorLink href='#home'><p onClick={()=>setMenu("Home")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Home</span>{menu==="Home"? <img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-100} href='#about'><p href="#" onClick={()=>setMenu("About")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>About Me</span>{menu==="About"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-80} href='#services'><p href="services" onClick={()=>setMenu("Services")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Services</span>{menu==="Services"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-80} href='#portfolio'><p href="#" onClick={()=>setMenu("Portfolio")} className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"><span>Portfolio</span>{menu==="Portfolio"?<img className='absolute top-1 left-1 w-17 rotate-8' src={Underline} alt='underline-pattern' /> : <></>}</p></AnchorLink>
                  <AnchorLink offset={-80} href='#contact'><p className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300' href='#'>Contact Me</p></AnchorLink>
                </div>
              </div>
            <div>
                
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar