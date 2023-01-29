import React from 'react'
import {Toolbar , Stack , Box ,styled, Typography, Button  } from '@mui/material'
import  {Link ,useLocation , Location } from 'react-router-dom'
import Icon from '../assets/images/favicon.png'

function UnlogedNav() {
  const location : Location = useLocation()
  const StyledToolBar = styled(Toolbar)(({theme})=>({
 display  : 'flex' , 
 alignItems : 'center' , 
 justifyContent : 'space-between' ,
 width : '100vw'
  }))
const StyledTypography = styled(Typography)(({theme})=>({
  color : theme.palette.white.main ,
  fontWeight : 'normal' ,
  fontStyle: 'none' ,
  padding : '8px' ,
}))

  return (
    <StyledToolBar>
        <img src={Icon} style={{width: '60px' , height : '60px'  }} ></img>
        <Stack direction="row" gap='40px' >
<Link  style={{textDecoration : 'none'}} to="/" ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4'  >Home</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to='/login' ><StyledTypography variant="h4" sx={(theme)=>({borderBottom : location.pathname === '/login' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/login' ? theme.palette.white.light : theme.palette.secondary.light}})} >Login</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to="/regester" > <StyledTypography   variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/regester' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/regester' ? theme.palette.white.light : theme.palette.secondary.light}})} >Regester</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}}  to="/about" ><StyledTypography  variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/about' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/about' ? theme.palette.white.light : theme.palette.secondary.light}})} >About</StyledTypography></Link>
        </Stack>
{   location.pathname === '/login'?  <Button variant='contained' >Regester</Button> :       <Link to="/login" style={{textDecoration : 'none' }}><Button variant='outlined' > Login  </Button></Link> }
    </StyledToolBar>
  )
}

export default UnlogedNav