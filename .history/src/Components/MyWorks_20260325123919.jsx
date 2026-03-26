import React from 'react'
import MovieAppImage from '../../src/assets/movie-app.jpg'
import AdminDashboardImage from '../../src/assets/admin-dashboard.jpg'
import GsapImage from '../../src/assets/gsap-animation.jpg'
import TourismImage from '../../src/assets/tourism-website.jpg'
import CoachingImage from '../../src/assets/coaching-website.jpg'
import BgLine from '../../src/assets/bg.svg'

const MyWorks = () => {
  return (
    <div id="portfolio" className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-36'>
        <div className='relative'>
            <h1 className='text-white text-5xl font-extralight text-center mb-20'>My Works</h1>
            <img src={BgLine} className='absolute top-14 left-23/50 md:left-24/50 transform -translate-x-1/2 -translate-y-1/2 w-80' alt='topic-image' />
        </div>

        <div className='relative'>
            <h1 className='text-white text-2xl font-light text-left mb-5'>React Js</h1>
        </div>

        <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 mb-25 gap-4'>
            <div className='col-span-4'>
                <a href='https://admin-dashboard-three-sage-gkzs8n0ry5.vercel.app/' target='_blank'>
                    <div className='inline-block bg-slate-900/15 border-1 border-slate-400/10 text-white hover:bg-linear-120 from-sky-300/20 to-blue-700/20 rounded-xl p-3 transform hover:scale-101 hover:shadow-2xl transition-all duration-500'>
                        <img src={AdminDashboardImage} alt='admin-dashboard-img' className='rounded-xl' />
                        <p className='text-white font-extralight text-center mt-4'>Admin Dashboard - React Js</p>
                    </div>
                </a>
            </div>
            <div className='col-span-8'>
                <div className='flex text-white'>
                    <div>
                        <b>Modern React Architecture:</b> Expertly utilizes functional components and hooks (useState, useEffect) for real-time state and dynamic UI updates.
                    </div>
                </div>
            </div>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-3 gap-8 place-items-center mb-25'>
            <div>
                <a href='https://admin-dashboard-three-sage-gkzs8n0ry5.vercel.app/' target='_blank'>
                    <div className='inline-block bg-slate-900/15 border-1 border-slate-400/10 text-white hover:bg-linear-120 from-sky-300/20 to-blue-700/20 rounded-xl p-3 transform hover:scale-101 hover:shadow-2xl transition-all duration-500'>
                        <img src={AdminDashboardImage} alt='admin-dashboard-img' className='rounded-xl' />
                        <p className='text-white font-extralight text-center mt-4'>Admin Dashboard - React Js</p>
                    </div>
                </a>
            </div>

            <div>
                <a href='https://moviespot-ten.vercel.app/' target='_blank'>
                    <div className='inline-block bg-slate-900/15 border-1 border-slate-400/10 text-white hover:bg-linear-120 from-sky-300/20 to-blue-700/20 rounded-xl p-3 transform hover:scale-101 hover:shadow-2xl transition-all duration-500'>
                        <img src={MovieAppImage} alt='movie-app-img' className='rounded-xl' />
                        <p className='text-white font-extralight text-center mt-4'>Movie App -React Js</p>
                    </div>
                </a>
            </div>
            <div>
                <a href='https://gsap-landing-page-two.vercel.app/' target='_blank'>
                    <div className='inline-block bg-slate-900/15 border-1 border-slate-400/10 text-white hover:bg-linear-120 from-sky-300/20 to-blue-700/20 rounded-xl p-3 transform hover:scale-101 hover:shadow-2xl transition-all duration-500'>
                        <img src={GsapImage} alt='GSAP-img' className='rounded-xl' />
                        <p className='text-white font-extralight text-center mt-4'>GSAP Animation - React Js</p>
                    </div>
                </a>
            </div>

        </div>

        <div className='relative'>
            <h1 className='text-white text-2xl font-light text-left mb-5'>Wordpress</h1>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
            <div>
                <a href='https://noje-ceylon.travel/' target='_blank'>
                    <div className='inline-block bg-slate-900/15 border-1 border-slate-400/10 text-white hover:bg-linear-120 from-sky-300/20 to-blue-700/20 rounded-xl p-3 transform hover:scale-101 hover:shadow-2xl transition-all duration-500'>
                        <img src={TourismImage} alt='tourism-website-img' className='rounded-xl' />
                        <p className='text-white font-extralight text-center mt-4'>Tourism Website - Wordpress</p>
                    </div>
                </a>
            </div>

            <div>
                <a href='https://www.creativejunction.coach/' target='_blank'>
                    <div className='inline-block bg-slate-900/15 border-1 border-slate-400/10 text-white hover:bg-linear-120 from-sky-300/20 to-blue-700/20 rounded-xl p-3 transform hover:scale-101 hover:shadow-2xl transition-all duration-500'>
                        <img src={CoachingImage} alt='coaching-website-img' className='rounded-xl' />
                        <p className='text-white font-extralight text-center mt-4'>Coaching Website - Wordpress</p>
                    </div>
                </a>
            </div>

        </div>


    </div>
  )
}

export default MyWorks