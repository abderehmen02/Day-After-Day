import React from 'react'
import { bindActionCreators } from 'redux'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import * as actionCreators from '../../state/actionCreators'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import {Box , Stack} from '@mui/material'
import {login as loginAction} from '../login'




export const  Header = (): JSX.Element =>{
    const titleInfoText = "Where you can increase your productivity and acheive your goals faster"
  return (
  <div className="header">
    <div className='homeTitle'  > Welcome To Day After Day <div className='logoHome' ></div> </div>
  </div> 
  
  )
}



export const Buttons = () : JSX.Element =>{
   const dispatch  = useDispatch()
   const {login , emitAction } = bindActionCreators(actionCreators , dispatch)

    return           <div className="homeButtons"  >
    <button className='homeBtn loginBtn'    ><Link  className='link'  to='/login'  > login <i className="bi bi-box-arrow-in-right"></i> </Link> <br/></button>
    <button className='homeBtn regesterBtn' ><Link  className='link'  to='/regester' > regester <i className="bi bi-person-plus icon"></i></Link></button>
    <button className='homeBtn loginGuestBtn link' > login as a guest </button>
     <button className='homeBtn aboutHomeBtn' ><Link className='link' to="/about" > about the app <i className="bi bi-journal-text"></i> </Link> </button>
    </div>
}



export const HeroText = () :  JSX.Element =>{
     const navigate = useNavigate()
  const dispatch = useDispatch()
  const {login , loginError } = bindActionCreators(actionCreators , dispatch)
  return <Box sx={{   width : {xs : '90%' , sm : '60%'} , display : 'flex' , alignItems : 'center'  , justifyContent : 'space-around' , flexDirection : 'column' , gap : '80px' }} >
    <Stack gap="24px" margin="16px">
    <Typography variant='h3'  textAlign='center' color={(theme)=>theme.palette.white.light}  > A Platform Built For A New Way To Increase Your Productivity </Typography>
    <Typography variant='h5' textAlign='center'  color={(theme)=>theme.palette.white.dark} >track your dailly ideas , goals and journalings </Typography>
    </Stack>
    <Stack justifyContent='space-around' spacing={{xs: '32px' }}  alignItems="center" direction={{'xs'  : 'column'  , 'sm' : 'row'}} width='100%'  > 
  <Link to="/regester" style={{textDecoration : 'none'}}>    <Button variant='standard'  >Regester</Button></Link>
   <Button variant='contained' onClick={()=>{ loginAction({email : process.env.React_App_GUESS_PASSWORD , password : process.env.React_App_GUESS_PASSWORD}  , login , loginError , navigate ) }} >Guest Login</Button>
    </Stack>
    <Stack direction={{xs : 'column' , sm : 'row'}} width='90%' justifyContent='space-around' >
      <Box sx={{ minWidth:'125px' , margin : '8px'  ,border: '1.5px solid white'  , borderRadius:'8px' , height :'100px' , paddingX : '8px'    , display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' , flexDirection: 'column' }} bgcolor={(theme)=>theme.palette.dark.dark}  >
        <Typography variant="h5" color={(theme)=>theme.palette.white.main} >Productivity</Typography>
        <BarChartIcon color='white' />
      </Box>
      <Box sx={{ minWidth:'125px'  , margin : '8px', border: '1.5px solid white'  , borderRadius:'8px' , height :'100px' , paddingX : '8px'    , display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' , flexDirection: 'column' }} bgcolor={(theme)=>theme.palette.dark.dark}  >
        <Typography variant="h5" color={(theme)=>theme.palette.white.main}  >Journaling</Typography>
        <ArticleIcon color='white' />
      </Box>
      <Box sx={{ minWidth:'125px' , margin : '8px' ,border: '1.5px solid white'  , borderRadius:'8px' , height :'100px' , paddingX : '8px'    , display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' , flexDirection: 'column' }} bgcolor={(theme)=>theme.palette.dark.dark}  >
        <Typography variant="h5" color={(theme)=>theme.palette.white.main}  >Goals</Typography>
        <AutoGraphIcon color='white' />
      </Box>
    </Stack>
  </Box>
}