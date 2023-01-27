import { Box , styled } from '@mui/system'
import React from 'react'
import UnlogedNav from '../components/unlogedNav'
import { AboutComponent, AboutHeader, AboutText, HowToUseApp } from '../features/about/components'
import { AboutPageComponents } from '../features/about/data'
import '../features/about/index.css'
import { AboutPageComponentType } from '../types/data/about'

function About() {
  const StyledAboutPage = styled(Box)(({theme})=>({
    backgroundColor : theme.palette.primary.main ,
    minHeight  : '100vh' ,
    width : '100vw' , 
    display : 'flex' , 
    alignItems : 'center' , 
    justifyContent : 'flexStart' ,
    gap : '80px' ,
    flexDirection : 'column' 
  }))
  return (<StyledAboutPage>
    <UnlogedNav/>
    <AboutHeader/>
    {AboutPageComponents.map( ( component : AboutPageComponentType  , index : number ) =>{
return <AboutComponent data={component} index={index}/>
    })}
    </StyledAboutPage> )
}

export default About