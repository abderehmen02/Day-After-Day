import React from 'react'
import {Toolbar , Stack ,styled, Typography, Button } from '@mui/material'
import  {Link} from 'react-router-dom'
import Icon from '../assets/images/favicon.png'

function UnlogedNav() {
  const StyledToolBar = styled(Toolbar)(({theme})=>({
    border: '2px solid red'  ,
 display  : 'flex' , 
 alignItems : 'center' , 
 justifyContent : 'space-between' ,
 width : '100vw'
  }))

  const StyledButton =  styled(Button)(({theme})=>({
  }))


  return (
    <StyledToolBar>
        <img src={Icon} style={{width: '60px' , height : '60px'  , border : '2px solid red'}} ></img>
        <Stack direction="row" gap='40px' >
<Link to="/home" ><Typography sx={{color : (theme)=>theme.palette.secondary.light  }} variant='h4'  >Home</Typography></Link>
<Link to='/login' ><Typography  sx={{color : (theme)=>theme.palette.secondary.light   }}  variant='h4' >Login</Typography></Link>
<Link to="/regester" > <Typography  sx={{color : (theme)=>theme.palette.secondary.light   }} variant='h4' >Regester</Typography></Link>
<Link to="/about" ><Typography   sx={{color : (theme)=>theme.palette.secondary.light   }} variant='h4' >About</Typography></Link>
        </Stack>
        <StyledButton variant='contained' >Regester</StyledButton>
    </StyledToolBar>
  )
}

export default UnlogedNav