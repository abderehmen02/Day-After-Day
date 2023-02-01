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
minHeight : '100vh' ,
gap : '40px'  ,
alignItems : 'center' ,
}))


const StyledBody = styled(Box)(({theme})=>({
display: 'flex' , 
alignItems : 'center' ,
justifyContent : 'space-around'   ,
width: '90%' ,
[theme.breakpoints.down("sm")] : {
  flexDirection : 'column'
}
}))
  return (
    <HomeContainer >
      <UnlogedNav/>
      <StyledBody>
        <HeroText/>
<Box   sx={{width: "20%" , height: "300px"}} display={{xs : 'none' , sm : 'block'}}>        <img src={HomeImage} style={{width: '100%'  , height :'100%' }} ></img> </Box>
     </StyledBody>
    </HomeContainer>
  )
}
