import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
    <div className='min-h-screen bg-radial from-pink-400 to-fuchsia-700 flex w-full flex-col'>
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
    
  )
}

export default App