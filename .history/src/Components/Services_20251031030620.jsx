import React from 'react'
import {servicesData} from '../assets/Services/Services'
import BgLine from '../../src/assets/bg.svg'

const Services = ({TopicImage}) => { 
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 pt-36 px-4 md:px-0'>
        <div className='relative'>
           <h1 className='text-white  text-center text-5xl font-extralight mb-15 overflow-hidden'>Services</h1>
           <img src={BgLine} className='absolute -top-7 left-22/40 w-30 transform translate-x-2 translate-y-0 rotate-0.5' alt='topic-image' />
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index)=>{
                return (
                    <div key={index} className='inline-block border-1 border-white/10 text-white hover:bg-linear-120 from-orange-500/10 to-yellow-600/20 rounded-2xl p-8 transform hover:scale-102 hover:shadow-2xl hover:cursor-default transition-all duration-500'>
                        <h3 className="text-white text-3xl mb-4">{service.s_no}.</h3>
                        <h2 className='bg-linear-60 from-orange-700 to-yellow-400 bg-clip-text text-transparent font-light text-3xl mb-5'>{service.s_name}</h2>
                        <p className='text-white text-xl font-extralight'>{service.s_service}</p>
                    </div>
                )
            })}
        </div>
    </div> 
  )
}

export default Services