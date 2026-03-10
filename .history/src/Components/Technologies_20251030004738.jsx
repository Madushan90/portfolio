import React from 'react'
import ReactLogo from '../../src/assets/reactjs-logo.svg'
import GitLogo from '../../src/assets/github-logo.svg'
import NpmLogo from '../../src/assets/npm-logo.svg'
import MuiLogo from '../../src/assets/material-logo.svg'
import BootstrapLogo from '../../src/assets/bootstrap-logo.svg'
import HtmlLogo from '../../src/assets/html-logo.svg'
import CssLogo from '../../src/assets/css-logo.svg'
import JsLogo from '../../src/assets/javascript-logo.svg'
import JqueryLogo from '../../src/assets/jquery-logo.svg'
import CanvaLogo from '../../src/assets/canva-logo.svg'
import FigmaLogo from '../../src/assets/figma-logo.svg'
import TailwindLogo from '../../src/assets/tailwindcss-logo.svg'
import PhotoshopLogo from '../../src/assets/adobe-illustrator-logo.svg'
import IllustratorLogo from '../../src/assets/adobe-photoshop-logo.svg'

const Technologies = () => {
  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 pt-36 px-4 md:px-0'>
        <div>
            <div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8'>
                    <div className='flex'>
                        <img src={ReactLogo} alt='reactjs-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={GitLogo} alt='github-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={NpmLogo} alt='npm-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={MuiLogo} alt='mui-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={BootstrapLogo} alt='bootstrap-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={HtmlLogo} alt='html-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={CssLogo} alt='css-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={JsLogo} alt='js-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={JqueryLogo} alt='jquery-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={CanvaLogo} alt='canva-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={FigmaLogo} alt='figma-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={TailwindLogo} alt='tailwind-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={PhotoshopLogo} alt='photoshop-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    <div>
                        <img src={IllustratorLogo} alt='illustrator-logo' className='w-15 h-15 mx-auto' />
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Technologies