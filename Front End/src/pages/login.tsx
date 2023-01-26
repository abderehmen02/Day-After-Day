import React , {useEffect, useState} from 'react'
import {login as loginAction} from '../features/login'
import * as actionCreators from '../state/actionCreators'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { useNavigate } from 'react-router-dom'
import '../features/login/index.css'
import { Header , ErrorSection, LoginText } from '../features/login/components'
import { useSelector } from 'react-redux'
import { stateType } from '../state/reducers'
import { userLoginState } from '../types'
import { TextField  , Box , styled , Typography ,InputAdornment, FormControl, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import UnlogedNav from '../components/unlogedNav'

export const Login: React.FC = () =>{
     const [email, setEmail]       = useState<string | undefined>("")
     const [password, setPassword] = useState<string | undefined>("")
     const dispatch = useDispatch()
     const {login , emitAction , loginError } = bindActionCreators(actionCreators , dispatch)
     const navigate = useNavigate()
     const userLogin : userLoginState = useSelector(( state : stateType )=>state.userLogin)
    
const CssTextField = styled(TextField)(({theme})=>({
   width : '350px' ,
   color : 'white' ,
  '& label.Mui-focused': {
    color: theme.palette.secondary.light,
  },
  '& label.Mui' : {
    color : 'white'
  } ,
  '& .MuiInput-underline:after': {
    borderBottomColor: 'yellow',
  },
  '& .MuiOutlinedInput-root': {
    '& label' : {
      color : 'white' ,
    } ,
    '& fieldset': {
      borderColor: theme.palette.white.light,
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.light,
    },
  },
}));


console.log(email)
console.log("password")
console.log(password)
  return (
    <Box sx={{display : 'flex' , minHeight: '100vh' , gap : '10vh'  , alignItems :'center' , flexDirection: 'column' }} bgcolor={(theme)=>theme.palette.primary.main} >
      <UnlogedNav/>
<Box sx={{display : 'flex' , justifyContent : 'space-around',  gap : '40px'  , width : '100%'}} >      
<FormControl sx={{display : 'flex' , flexDirection : 'column' , gap : '56px'}} >
<Box>
  <Typography  variant='h3' color={(theme)=>theme.palette.secondary.light} textAlign='center' >Login</Typography>
  <Typography variant='h4' color={(theme)=>theme.palette.white.light} textAlign='center'  >Welcome Back To Day After Day </Typography>
</Box>
<Box sx={{display : 'flex' , alignItems : 'center'    , gap : '16px'   , flexDirection : 'column'  }} >
   <CssTextField   label='User Name'   value={email}  onChange={(e)=>{setEmail(e.target.value)}}  />
<CssTextField     label='Password'   value={password}  onChange={(e)=>{setPassword(e.target.value)}}  
 />
</Box>
    <Button variant='outlined' onClick={()=>{loginAction({email , password} , login , loginError , navigate )}} >    Login   </Button>
</FormControl>
<LoginText></LoginText>
</Box>
      {/* <div className="loginForm">
<div><label htmlFor='userName'   >user name</label>      <input name='userName' value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} className={userLogin.error === 'can not find user' ? 'inputError': 'normalInput'} ></input></div>
<div><label htmlFor="password"> password</label>      <input  name='password' value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} className={userLogin.error === 'password incorrect' ? 'inputError' : 'normalInput'} ></input></div>
      <button className='bg-primary' onClick={()=>{loginAction({email , password} , login , loginError , navigate )}}> Login </button>
      </div> */}
    </Box>
  )
}