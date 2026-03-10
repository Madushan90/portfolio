import React from 'react'
import BgLine from '../../src/assets/bg.svg'

const ContactMe = () => {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-36'>
        <div className='relative'>
                   <h1 className='text-white text-5xl font-extralight text-center mb-20'>Get In Touch</h1>
                   <img src={BgLine} className='absolute top-14 left-23/50 md:left-24/50 transform -translate-x-1/2 -translate-y-1/2 w-80' alt='topic-image' />
                </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <h1 className="text-white text-3xl relative">Talk to me
                    <span className='text-8xl absolute -top-12 text-cyan-600'>,</span>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default ContactMe