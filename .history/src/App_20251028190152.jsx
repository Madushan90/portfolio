import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-500 via-slate-700 to-sky-900 flex w-full flex-col'>
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
    
  )
}

export default App