import React from 'react'
import {Toolbar , Stack , Box ,styled, Typography, Button  } from '@mui/material'
import  {Link ,useLocation , Location } from 'react-router-dom'
import Icon from '../assets/images/favicon.png'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import theme from '../styling/theme';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from "../state/reducers"
import CloseIcon from '@mui/icons-material/Close';
function UnlogedNav() {
  const mobileNavButtonState = useSelector((state: stateType)=>state.mobileNavButton)
  const dispatch = useDispatch()
  const location : Location = useLocation() 
  const StyledToolBar = styled(Toolbar)(({theme})=>({
 display  : 'flex' , 
 alignItems : 'center' , 
 justifyContent : 'space-between' ,
 width : '100vw' ,
 [theme.breakpoints.down("sm")] : {
    display : 'none'

  } 
  }))
const StyledTypography = styled(Typography)(({theme})=>({
  color : theme.palette.white.main ,
  fontWeight : 'normal' ,
  fontStyle: 'none' ,
  padding : '8px' ,  
}))

  return (
    <Box>
    <StyledToolBar>
        <img src={Icon} style={{   width: '60px' , height : '60px'  }} ></img>
        <Stack direction="row" gap='40px' >
<Link  style={{textDecoration : 'none'}} to="/" ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4'  >Home</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to='/login' ><StyledTypography variant="h4" sx={(theme)=>({borderBottom : location.pathname === '/login' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/login' ? theme.palette.white.light : theme.palette.secondary.light}})} >Login</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to="/regester" > <StyledTypography   variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/regester' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/regester' ? theme.palette.white.light : theme.palette.secondary.light}})} >Regester</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}}  to="/about" ><StyledTypography  variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/about' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/about' ? theme.palette.white.light : theme.palette.secondary.light}})} >About</StyledTypography></Link>
        </Stack>
{   location.pathname === '/login'? <Link to='/regester' style={{textDecoration : 'none'}} > <Button variant='contained' >Regester</Button> </Link> :       <Link to="/login" style={{textDecoration : 'none' }}><Button variant='outlined'  > Login  </Button></Link> }
    </StyledToolBar>

    {/* navigation for mobile devices */}

<Box display={{xs : 'flex' , sm : 'none'}} >    {
      mobileNavButtonState ? <Stack direction="column" sx={{width : '100vw' , position : 'absolute' , backgroundColor: '#000'  , alignItems : 'center' ,zIndex : 2 , height : '100vh' , top : '0px' , left : '0px' }} spacing="32px" justifyContent="center"  >
<Link  style={{textDecoration : 'none'}} to="/" onClick={()=>{dispatch({type: 'Reverse'})}}  ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/' ? '1.5px solid white'  : 'none' , color : location.pathname === '/' ?'secondary.light': '#fff' })} variant='h4'   >Home</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to='/login' onClick={()=>{dispatch({type: 'Reverse'})}}  ><StyledTypography variant="h4" sx={(theme)=>({borderBottom : location.pathname === '/login' ? '1.5px solid white'  : 'none' , color : location.pathname === '/login' ?'secondary.light' : '#fff'  }  )} >Login</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to="/regester" onClick={()=>{dispatch({type: 'Reverse'})}}  > <StyledTypography   variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/regester' ? '1.5px solid white'  : 'none'  , color : location.pathname === '/regester' ?'secondary.light' : '#fff'})} >Regester</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}}  to="/about" onClick={()=>{dispatch({type: 'Reverse'})}}  ><StyledTypography  variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/about' ? '1.5px solid white'  : 'none' , color : location.pathname === '/about' ?'secondary.light' :'#fff' })} >About</StyledTypography></Link>
<Typography sx={{color : 'red'}}  onClick={()=>{dispatch({type : 'Reverse'})}} ><CloseIcon fontSize='large' /> </Typography>
      </Stack> : <Stack direction="row" width="100vw" paddingY="16px" justifyContent="space-around" alignItems="center" ><Box onClick={()=>{dispatch({type: 'Reverse'})}} > <Typography color="secondary.light" > <FormatListBulletedIcon/></Typography></Box> <Typography variant='h3' color={(theme)=>theme.palette.secondary.light} >Day After Day</Typography>      <img src={Icon} style={{   width: '60px' , height : '60px'  }} ></img> </Stack>
} </Box>
    </Box>
  )
}




export default UnlogedNav