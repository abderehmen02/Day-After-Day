import React, { useState } from 'react'
import {Toolbar  , styled, Typography} from '@mui/material'
import { Link, useLocation , Location } from 'react-router-dom'
import './index.css'
import LogOut from './logOut'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from '../state/reducers'
import  {Box , Stack} from  '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Icon from '../assets/images/favicon.png'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Dispatch } from 'redux'
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CreateIcon from '@mui/icons-material/Create';
function NavBar() : JSX.Element {
const location : Location = useLocation()
const dispatch : Dispatch<any> = useDispatch()
const mobileNavButtonState  = useSelector((state : stateType)=>state.mobileNavButton)
const StyledToolBar = styled(Toolbar)(({theme})=>({
 display  : 'flex' , 
 alignItems : 'center' , 
 justifyContent : 'space-between' ,
 width : '100vw' ,
 backgroundColor : theme.palette.primary.main , 
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


  const [DisplayList, setDisplayList] = useState(false)
  return (<Box>
    {/* mobile navigation  */}
    <Box display={{xs : 'flex' , sm : 'none'}} >    {
      mobileNavButtonState ? <Stack direction="column" sx={{width : '100vw' , position : 'fixed' , backgroundColor: '#000'  , alignItems : 'center' ,zIndex : 2 , minHeight : '100vh' , top : '0px' , left : '0px' }} spacing="32px" justifyContent="center"  >
<Typography variant='h3' color="secondary.light" >Day After Day</Typography>
<Link  style={{textDecoration : 'none'}} to="/productivity" onClick={()=>{dispatch({type: 'Reverse'})}}  ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/productivity' ? '1.5px solid white'  : 'none' , color : location.pathname === '/productivity' ?'secondary.light': '#fff' })} variant='h4'   > <BarChartIcon/> Productivity</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to='/goal' onClick={()=>{dispatch({type: 'Reverse'})}}  ><StyledTypography variant="h4" sx={(theme)=>({borderBottom : location.pathname === '/goal' ? '1.5px solid white'  : 'none' , color : location.pathname === '/goal' ?'secondary.light' : '#fff'  }  )} > <AutoGraphIcon/> Goals</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}} to="/journal" onClick={()=>{dispatch({type: 'Reverse'})}}  > <StyledTypography   variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/journal' ? '1.5px solid white'  : 'none'  , color : location.pathname === '/journal' ?'secondary.light' : '#fff'})} ><CreateIcon/> Journals</StyledTypography></Link>
<Link  style={{textDecoration : 'none'}}  to="/about" onClick={()=>{dispatch({type: 'Reverse'})}}  ><StyledTypography  variant='h4' sx={(theme)=>({borderBottom : location.pathname === '/about' ? '1.5px solid white'  : 'none' , color : location.pathname === '/about' ?'secondary.light' :'#fff' })} ><ArticleIcon/> About</StyledTypography></Link>
       <LogOut/>

<Typography sx={{color : 'red'}}  onClick={()=>{dispatch({type : 'Reverse'})}} ><CloseIcon fontSize='large' /> </Typography>
      </Stack> : <Stack direction="row" width="100vw" paddingY="16px" justifyContent="space-around" alignItems="center" ><Box onClick={()=>{dispatch({type: 'Reverse'})}} > <Typography color="secondary.light" > <FormatListBulletedIcon/></Typography></Box> <Typography variant='h3' color={(theme)=>theme.palette.secondary.light} >Day After Day</Typography>      <img src={Icon} style={{   width: '60px' , height : '60px'  }} ></img> </Stack>
} </Box> <StyledToolBar >
    <Typography color={(theme)=>theme.palette.secondary.light} variant="h3" >Day After Day</Typography>
      <Link to="/productivity" className='link'><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/productivity' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/productivity' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4' ><BarChartIcon/> Productivity  </StyledTypography></Link>
      <Link to="/goal"  className='link' ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/goal' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/goal' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4'><AutoGraphIcon/> Goals </StyledTypography> </Link>
      <Link  to="/journal"  className='link' ><StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/journal' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/journal' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4' ><CreateIcon/> Journal </StyledTypography> </Link> 
      <Link to="/about" className='link' > <StyledTypography sx={(theme)=>({borderBottom : location.pathname === '/about' ? '1.5px solid white'  : 'none' , '&:hover'  : {color:  location.pathname === '/about' ? theme.palette.white.light : theme.palette.secondary.light}})} variant='h4' ><ArticleIcon/> About </StyledTypography> </Link>
      <LogOut/>
  </StyledToolBar> </Box> )
  
}

export default NavBar