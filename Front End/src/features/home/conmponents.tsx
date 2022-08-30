import React from 'react'
import './index.css'
import {motion} from 'framer-motion'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom'

export const  Header = (): JSX.Element =>{
    const titleInfoText = "Where you can increase your productivity and acheive your goals faster"
  return (
  <div className="header">
    <motion.div className='homeTitle' initial={{rotateZ : 0}} animate={{rotateZ : [6 , -6 , 5 , -5 , 2 , -2 , 0]}} transition={{duration : 0.5 ,  }} > Welcome To Day After Day <div className='logoHome' ></div> </motion.div>
<TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, This is a type writer animation package',
          'it consist of two types...',
          'Single text display and multi text display',
          'Fonts can be customized.',
          'The type speed can be customized as well',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />    </div>
  
  )
}


export const Buttons = () : JSX.Element =>{
    return           <motion.div className="homeButtons" initial={{x : -50 ,y : 50}} animate={{x : 0 , y: 0}} transition={{duration : 0.5}} >
    <button className='homeBtn loginBtn'><Link to='/login' className='link' > login </Link> <br/></button>
    <button className='homeBtn regesterBtn' > <Link className='link' to='/regester' > regester</Link></button>
    <button className='homeBtn aboutHomeBtn' > about the app </button>
    </motion.div>
}
