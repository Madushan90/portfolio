import React from 'react'
import { Linkedin, Github  } from 'lucide-react';
import AboutImage from '../../src/assets/about-image.jpg'
import BhanceLogo from '../../src/assets/behance-logo.svg'

const About = () => {
  return (
    <div id="about" className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-36'>
        <div className="flex flex-col md:flex-row gap-10 items-center px-4 md:px-0">
            <div className="flex-1">
                <img className='w-90 mx-auto rounded-full border-0 border-cyan-700 outline-10 outline-offset-0 outline-pink-500 hover:outline-double' src={AboutImage} alt='profile banner' />
                <div className='mt-8'>
                    <div className='flex justify-center'>
                        <a href='https://www.linkedin.com/in/madhushan90/' target='_blank' className='w-46 flex justify-center border-1 border-slate-500 px-7 py-2.5 rounded-3xl transform hover:scale-105 hover:border-transparent transition-all duration-500 cursor-pointer hover:bg-slate-900 hover:border-slate-500/80'>
                            <span className='flex items-center text-white text-xl font-extralight mr-2'>LinkedIn</span>
                            <Linkedin className='text-white  w-6 h-6' />
                        </a>
                    </div>
                    <div className='flex justify-center my-3'>
                        <a href='https://github.com/Madushan90' target='_blank' className='w-46 flex justify-center border-1 border-slate-500 px-7 py-2.5 rounded-3xl transform hover:scale-105 hover:border-transparent transition-all duration-500 cursor-pointer hover:bg-slate-900 hover:border-slate-500/80'>
                            <Github className='text-white mt-0.5 w-6 h-6' />
                            <span className='flex items-center text-white text-xl font-extralight ml-2'>GitHub</span>
                            
                        </a>
                    </div>
                    <div className='flex justify-center'>
                        <a href='https://www.behance.net/chamaramadhushan90' target='_blank' className='w-46 flex justify-center border-1 border-slate-500 px-7 py-2.5 rounded-3xl transform hover:scale-105 hover:border-transparent transition-all duration-500 cursor-pointer hover:bg-slate-900 hover:border-slate-500/80'>
                            <span className='flex items-center text-white text-xl font-extralight mr-2'>Behance</span>
                            <img src={BhanceLogo} alt='behance-logo' className='text-white mt-0.5 w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-2">
                <div>
                    <h1 className='text-white text-5xl font-extralight mb-8'>About Me</h1>
                    <p className='text-white text-lg'>I’m a Frontend Developer and UI/UX Designer with 7+ years of experience crafting engaging and user-centered digital experiences. I specialize in building responsive, high-performance interfaces using modern web technologies including HTML, CSS, JavaScript, and React.js.<br/><br/>
                    My passion lies in bridging the gap between design and development — transforming creative ideas into seamless, functional, and visually appealing user experiences. I’m dedicated to writing clean, maintainable code and creating designs that not only look great but feel intuitive to use.</p>
                </div>
                <br/>
                {/* Html */}
                <div className="flex gap-6 justify-center items-center py-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 text-white">HTML</h3>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-4 overflow-hidden w-full">
                        <div className="h-full rounded-full w-11/12 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-1000 ease-out"></div>
                    </div>
                </div>

                {/* CSS */}
                <div className="flex gap-6 justify-center items-center py-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 text-white">CSS</h3>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-4 overflow-hidden w-full">
                        <div className="h-full rounded-full w-27/30 bg-gradient-to-r from-blue-300 to-cyan-700 transition-all duration-1000 ease-out"></div>
                    </div>
                </div>

                {/* JS */}
                <div className="flex gap-6 justify-center items-center py-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 text-white">Javascript</h3>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-4 overflow-hidden w-full">
                        <div className="h-full rounded-full w-25/30 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 ease-out"></div>
                    </div>
                </div>

                {/* React */}
                <div className="flex gap-6 justify-center items-center py-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 text-white">ReactJS</h3>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-4 overflow-hidden w-full">
                        <div className="h-full rounded-full w-24/30 bg-gradient-to-r from-purple-400 to-sky-600 transition-all duration-1000 ease-out"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About