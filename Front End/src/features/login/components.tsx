import React , {useEffect }from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userLoginState } from '../../types'
import { stateType } from '../../state/reducers'
import { Typography , Box} from '@mui/material'
export const Header =  ():JSX.Element=> {
  return (
    <div className='loginHeader' >
        <h2> Login </h2>
        <h6>if you dont't have an account yet you can <Link to="/regester" >regester</Link></h6>
    </div>
  )
}


export const ErrorSection = (): JSX.Element=>{
const loginInfo : userLoginState = useSelector( (state : stateType ) => state.userLogin )
// effects
  return (<div className='errorSection' style={{visibility : loginInfo.error? 'visible' : 'hidden'}} >
{loginInfo.error || ''}
    </div>
  )
}

export  const LoginText = () : JSX.Element =>{

  return <Box   sx={{display : 'flex'  , alignItems : 'center' , gap : '32px' , flexDirection: 'column' , width : {xs : '85%' , sm : '40%'}  , marginTop: {xs : "128px" , sm : '0px' } , marginBottom : {xs : "128px" , sm : '0px' }  }} >
    <Typography sx={{width : '70%' , textAlign : 'center'}} color={(theme)=>theme.palette.secondary.light} variant='h3'> Why You Should Check Your Account Every Day  </Typography>
    <Typography textAlign='center' color={(theme)=>theme.palette.white.main} variant='caption' > By checking your account , you will get  control of all your ideas and your taughts  throught your month or year , this will help  you to increase your productivity and be more  effective and live a hapier life  </Typography>
    <Typography textAlign='center' color={(theme)=>theme.palette.white.main} variant='caption' > checking your account can also make you change some  of your goals that you have set in the past  </Typography>
    <Typography textAlign='center' color={(theme)=>theme.palette.white.main} variant='caption'> it is also important to write your taughts everyday so you will get more control over them </Typography>
  </Box>
}