import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-slate-900 py-15'>
      <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-white'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='max-w-full md:max-w-1/2 lg:max-w-1/3'>
                <div className="flex shrink-0 justify-center items-center">
                  <img src={logo} alt="Your Company" class="h-6 md:h-8 lg:h-7 w-auto" />
                </div>
              <p className='text-sm mt-3 font-extralight text-center mt-5 md:mt-3'>I am a Frontend Developer and UI / UX Designer from Sri Lanka, with 7+ years of experience.</p>
            </div>
            <p className='text-sm font-extralight mt-5 md:mt-0'><span className='text-[17px]'>&#169;</span> 2026 Chamara Madhushan, All right reserved.</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Footer