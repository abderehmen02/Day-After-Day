import React  from 'react'
import { Link } from 'react-router-dom'
import '../features/home/index.css'
import { Buttons, Header, HeroText } from '../features/home/conmponents'
import homeImgOne from '../assets/images/goal6.png'
import homeImgTwo from  '../assets/images/goal11.png'
import * as actionCreators from '../state/actionCreators'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import UnlogedNav from '../components/unlogedNav'
import {styled , Box } from '@mui/material'
import HomeImage from '../assets/images/homeIllustration.png'



export const Home: React.FC =  ()=> {
const HomeContainer = styled(Box)(({theme})=>({
backgroundColor : theme.palette.primary.main ,
display : 'flex' , 
flexDirection : 'column' ,
height : '100vh'
}))


const StyledBody = styled(Box)(({theme})=>({
display: 'flex' , 
alignItems : 'center' ,
justifyContent : 'space-around'   ,
width: '90%'
}))
  return (
    <HomeContainer >
      <UnlogedNav/>
      <StyledBody>
        <HeroText/>
        <img src={HomeImage} style={{width: '20%'  , height :'300px' }} ></img>
     </StyledBody>
    </HomeContainer>
  )
}
