import React from 'react'
import ReactLogo from '../../src/assets/reactjs-logo.svg'

const Technologies = () => {
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 pt-36 px-4 md:px-0'>
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='flex'>
                        <img src={ReactLogo} alt='reactjs-log' className='w-15 h-15' />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies