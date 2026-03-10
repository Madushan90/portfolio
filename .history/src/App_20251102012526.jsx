import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWorks from './Components/MyWorks'
import Technologies from './Components/Technologies'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='min-h-screen bg-radial from-slate-700 to-slate-800 flex w-full flex-col'>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Technologies />
        <MyWorks />
        <ContactMe />
        <Footer />
      </div>
    </div>
    
  )
}

export default App