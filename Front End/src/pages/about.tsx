import { Box , styled } from '@mui/material'
import { userInfo } from 'os'
import React from 'react'
import UnlogedNav from '../components/unlogedNav'
import { AboutComponent, AboutHeader, AboutText, HowToUseApp } from '../features/about/components'
import { AboutPageComponents } from '../features/about/data'
import '../features/about/index.css'
import { AboutPageComponentType } from '../types/data/about'
import LoggedNav from '../components/loggedNav'
import { useSelector } from 'react-redux'
import { stateType } from '../state/reducers'


function About() {

const userInfo = useSelector((state: stateType)=>state.userInfo)
const userLogin = useSelector((state: stateType)=>state.userLogin)
const storageUser = localStorage.getItem("day-after-day")


  const StyledAboutPage = styled(Box)(({theme})=>({
    backgroundColor : theme.palette.primary.main ,
    minHeight  : '100vh' ,
    width : '100vw' , 
    display : 'flex' , 
    alignItems : 'center' , 
    justifyContent : 'flexStart' ,
    gap : '80px' ,
    flexDirection : 'column'  ,
    [theme.breakpoints.down("sm")] : {
      gap : '200px'
    }
  }))
  return (<StyledAboutPage>
    { userInfo && Object.keys(userLogin).length && storageUser ? <LoggedNav/> : <UnlogedNav/> }
    <AboutHeader/>
    {AboutPageComponents.map( ( component : AboutPageComponentType  , index : number ) =>{
return <AboutComponent data={component} index={index}/>
    })}
    </StyledAboutPage> )
}

export default About