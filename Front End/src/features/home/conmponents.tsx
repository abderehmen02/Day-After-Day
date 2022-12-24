import React from 'react'
import { bindActionCreators } from 'redux'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import {login as loginAction} from '../../features/login'
import * as actionCreators from '../../state/actionCreators'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import {Box , Stack} from '@mui/material'




export const  Header = (): JSX.Element =>{
    const titleInfoText = "Where you can increase your productivity and acheive your goals faster"
  return (
  <div className="header">
    <div className='homeTitle'  > Welcome To Day After Day <div className='logoHome' ></div> </div>
  </div> 
  
  )
}



// initial={{x : -50 ,y : 50}} animate={{x : 0 , y: 0}} transition={{duration : 0.5}}
export const Buttons = () : JSX.Element =>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {login , emitAction } = bindActionCreators(actionCreators , dispatch)

    const loginGuest = ()=>{
         loginAction({ email  : process.env.REACT_APP_GUEST_USERNAME , password :  process.env.REACT_APP_GUEST_PASSWORD } , login , emitAction , navigate )
    }
    return           <div className="homeButtons"  >
    <button className='homeBtn loginBtn'    ><Link  className='link'  to='/login'  > login <i className="bi bi-box-arrow-in-right"></i> </Link> <br/></button>
    <button className='homeBtn regesterBtn' ><Link  className='link'  to='/regester' > regester <i className="bi bi-person-plus icon"></i></Link></button>
    <button className='homeBtn loginGuestBtn link' onClick={loginGuest} > login as a guest </button>
     <button className='homeBtn aboutHomeBtn' ><Link className='link' to="/about" > about the app <i className="bi bi-journal-text"></i> </Link> </button>
   
    </div>
}



export const HeroText = () :  JSX.Element =>{
  return <Box sx={{ border: '2px solid black' , width : '60%' , display : 'flex' , alignItems : 'center'  , justifyContent : 'space-around' , flexDirection : 'column' }} >
    <Box>
    <Typography variant='h3'  textAlign='center' color='white'  > A Platform Built For A New Way To Increase Your Productivity </Typography>
    <Typography variant='h5'  >track your dailly ideas , goals and journalings </Typography>
    </Box>
    <Box> 
      <Button variant='outlined' >Log In</Button>
      <Button variant="contained" >Regester</Button>
    </Box>
    <Stack direction="row">
      <Box sx={{ height :'200px' }} >
        <Typography variant="caption" >Productivity</Typography>
        <BarChartIcon/>
      </Box>
      <Box sx={{ height :'200px' }} >
        <Typography variant='caption' >Journaling</Typography>
        <ArticleIcon/>
      </Box>
      <Box sx={{ height :'200px' }} >
        <Typography variant='caption' >Goals</Typography>
        <AutoGraphIcon/>
      </Box>
    </Stack>
  </Box>
}