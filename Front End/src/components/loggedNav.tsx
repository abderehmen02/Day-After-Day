import React, { useState } from 'react'
import {Toolbar  , styled, Typography} from '@mui/material'
import { Link, useLocation , Location } from 'react-router-dom'
import './index.css'
import LogOut from './logOut'
function NavBar() : JSX.Element {
const location : Location = useLocation()

const StyledToolBar = styled(Toolbar)(({theme})=>({
 display  : 'flex' , 
 alignItems : 'center' , 
 justifyContent : 'space-between' ,
 width : '100vw' ,
 backgroundColor : theme.palette.primary.main , 
 
  }))

const StyledTypography = styled(Typography)(({theme})=>({
  color : theme.palette.white.main ,
  fontWeight : 'normal' ,
  fontStyle: 'none' ,
  padding : '8px' ,
}))


  const [DisplayList, setDisplayList] = useState(false)
  return ( <StyledToolBar>
    <Typography color={(theme)=>theme.palette.secondary.light} variant="h3" >Day After Day</Typography>
      <Link to="/productivity" className='link'><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/productivity' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/productivity' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4' > Productivity  </StyledTypography></Link>
      <Link to="/goal"  className='link' ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/goal' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/goal' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4'> Goals </StyledTypography> </Link>
      <Link  to="/journal"  className='link' ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/journal' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/journal' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4' > Journal </StyledTypography> </Link> 
       <Link to="/about" className='link' > <StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/about' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/about' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4' > About </StyledTypography> </Link>
       <LogOut/>
  </StyledToolBar> )
  
}

export default NavBar