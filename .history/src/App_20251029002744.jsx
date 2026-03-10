import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About'


const App = () => {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-screen bg-radial from-slate-700 to-slate-800 flex w-full flex-col'>
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
    
  )
}

export default App