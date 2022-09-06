import React from 'react'
import { AboutText, HowToUseApp } from '../features/about/components'
import '../features/about/index.css'

function About() {
  return (<div className='aboutPage'>
    <h2> About </h2>
    <AboutText/>
    <HowToUseApp/>
    </div> )
}

export default About