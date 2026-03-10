import React from 'react'
import BgLine from '../../src/assets/bg.svg'
import { MailIcon, Phone, MapPin  } from 'lucide-react'

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
                <p className="text-white text-lg mt-10 mb-5 leading-7">
                    Feel free to send me a message on anything about Frontend Development, Web and UI/UX Designing, Wordpress Development or anything you believe that I can help to you from my knowladge.
                </p>
                <div className='flex text-white mb-5'>
                    <MailIcon /><p className='text-lg ml-3 leading-5'><a href="mailto:cmkumarathunga@gmail.com">cmkumarathunga@gmail.com</a></p> 
                </div>
                <div className='flex text-white mb-5'>
                    <Phone /><p className='text-lg ml-3 leading-5'>Phone</p> 
                </div>
                <div className='flex text-white'>
                    <MapPin /><p className='text-lg ml-3 leading-5'>Sri Lanka</p> 
                </div>
            </div>
            <div>
                <div className='p-5 bg-cyan-800/10'>
                    <form>
                        <label for="username" class="block text-sm text-white">Username</label>
                        <div class="flex items-center rounded-md bg-black/20 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <input id="username" type="text" name="username" placeholder="janesmith" class="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                        </div>
                        <label>Name</label>
                        <input type='text' placeholder='Your Name' name='name' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe