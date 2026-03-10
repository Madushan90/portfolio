import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex w-full flex-col'>
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
    
  )
}

export default App