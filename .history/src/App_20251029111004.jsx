import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About'
import Services from './Components/Services'


const App = () => {
  return (
    <div className='min-h-screen bg-radial from-slate-700 to-slate-800 flex w-full flex-col pb-40'>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
      </div>
    </div>
    
  )
}

export default App