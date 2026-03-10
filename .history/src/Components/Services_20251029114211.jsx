import React from 'react'
import {servicesData} from '../assets/Services/Services'

const Services = () => { 
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-36'>
        <div>
           <h1 className='text-white text-5xl font-extralight mb-5'>Services</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index)=>{
                return (
                    <div key={index} className='inline-block text-white bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl px-4 py-2.5 transform hover:scale-105 hover:shadow-2xl transition-all duration-300'>
                        <h3 className="text-white text-3xl mb-4">{service.s_no}</h3>
                        <h2 className='bg-linear-60 from-orange-700 to-yellow-400 bg-clip-text text-transparent font-light text-3xl'>{service.s_name}</h2>
                        <p className='text-white'>{service.s_service}</p>
                    </div>
                )
            })}
        </div>
    </div> 
  )
}

export default Services