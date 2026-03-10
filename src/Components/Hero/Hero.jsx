import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import BannerImage from '../../assets/madu-portfolio.jpg'
const Hero = () => {
  return (
    <div id="home" className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-15'>
        <div className='flex items-center gap-10 md:gap-2 flex-col-reverse md:flex-row'>
            <div className='px-5 md:px-0'>
                <h1 className='text-white text-5xl tracking-tighter mb-8 space leading-14 tracking-normal'>I'm <span className='bg-linear-60 from-orange-700 to-yellow-400 bg-clip-text text-transparent font-extrabold'>Chamara Madhushan</span>, Frontend Developer based in Sri Lanka</h1>
                
                <p className='text-white text-lg'>I am a Frontend Developer and UI / UX Designer from Sri Lanka, with 7+ years of experience.</p>
                <div className='flex items-center text-center gap-5 justify-center mt-10'>
                  <div>
                      <AnchorLink href='#contact'><p className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 text-center border-2 border-amber-500 transform hover:scale-105 hover:shadow-2xl transition-all duration-200' href='#'>Contact Me</p></AnchorLink>
                  </div>
                  <div>
                      <a className='inline-block text-amber-300 border-2 border-double border-amber-500 rounded-3xl px-4 py-2.5 text-center transform bg-transparent transition-all duration-200 hover:scale-105 hover:shadow-2xl' href='#'>Download CV</a>
                  </div>
                </div>
            </div>
            <div className='px-7 md:px-0 lg:pl-10'>
                <img className='rounded-full border-8 border-orange-400 shadow-2xl w-auto' src={BannerImage} alt='profile banner' />
            </div>
        </div>
    </div>
  )
}

export default Hero