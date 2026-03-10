import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About'


const App = () => {
  return (
    <div className='min-h-screen bg-radial from-slate-700 to-slate-800 flex w-full flex-col pb-72'>
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
    
  )
}

export default App