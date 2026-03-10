import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-700 via-sky-700 to-sky-900 flex w-full flex-col'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap'>
        <Navbar />
        <Hero />
      </div>
    </div>
    
  )
}

export default App