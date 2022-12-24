import React from 'react'
import {Toolbar , Stack ,styled, Typography, Button } from '@mui/material'
import  {Link} from 'react-router-dom'
import Icon from '../assets/images/favicon.png'

function UnlogedNav() {
  const StyledToolBar = styled(Toolbar)(({theme})=>({
 display  : 'flex' , 
 alignItems : 'center' , 
 justifyContent : 'space-between' ,
 width : '100vw'
  }))

  const StyledButton =  styled(Button)(({theme})=>({
  }))
const StyledTypography = styled(Typography)(({theme})=>({
  color : theme.palette.white.main ,
  fontWeight : 'normal' ,
  fontStyle: 'none' ,
  '&:hover' : {
     color : theme.palette.secondary.light
  }
}))

  return (
    <StyledToolBar>
        <img src={Icon} style={{width: '60px' , height : '60px'  }} ></img>
        <Stack direction="row" gap='40px' >
<Link style={{textDecoration : 'none'}} to="/home" ><StyledTypography  variant='h4'  >Home</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to='/login' ><StyledTypography variant="h4" >Login</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to="/regester" > <StyledTypography   variant='h4' >Regester</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}}  to="/about" ><StyledTypography  variant='h4' >About</StyledTypography></Link>
        </Stack>
        <StyledButton variant='standard' >Get Started</StyledButton>
    </StyledToolBar>
  )
}

export default UnlogedNav