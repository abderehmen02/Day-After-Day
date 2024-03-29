import React , { useEffect, useRef, useState} from 'react'
import {login as loginAction} from '../features/login'
import * as actionCreators from '../state/actionCreators'
import {useDispatch  } from 'react-redux'
import {bindActionCreators , Dispatch } from 'redux'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import '../features/login/index.css'
import { Header , ErrorSection, LoginText } from '../features/login/components'
import { useSelector } from 'react-redux'
import { stateType } from '../state/reducers'
import { userLoginState } from '../types'
import { TextField  , Box , styled , Typography ,InputAdornment, FormControl, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import UnlogedNav from '../components/unlogedNav'


const CssTextField  = styled(TextField)(({theme})=>({
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



export const Login: React.FC = () =>{
     const email : any = useRef(null)
     const [UserEmail, setUserEmail] = useState<string>("")
     const [UserPassword, setUserPassword] = useState<string>("")
     const password : any = useRef(null)
     const dispatch : Dispatch = useDispatch()
     const {login , emitAction , loginError } = bindActionCreators(actionCreators , dispatch)
     const navigate : NavigateFunction = useNavigate()
     const userLogin : userLoginState = useSelector(( state : stateType )=>state.userLogin)
    
  return (
    <Box sx={{display : 'flex' , minHeight: '100vh' , gap : '10vh'  , alignItems :'center' , flexDirection: 'column' }} bgcolor={(theme)=>theme.palette.primary.main} >
      <UnlogedNav/>
<Box flexDirection={{xs : 'column' , sm : 'row'}} sx={{display : 'flex' , justifyContent : 'space-around',  gap : '40px'  , width : '100%'}} alignItems="center" >      
<FormControl sx={{display : 'flex' , flexDirection : 'column' , gap : '56px'}} >
<Box>
  <Typography  variant='h3' color={(theme)=>theme.palette.secondary.light} textAlign='center' >Login</Typography>
  <Typography   variant='h4' color={(theme)=>theme.palette.white.light} textAlign='center'  >Welcome Back To Day After Day </Typography>
</Box>
<Box sx={{  display : 'flex' , alignItems : 'center'    , gap : '16px'   , flexDirection : 'column'  }} >
{ userLogin.error === 'can not find user' ? <TextField value={UserEmail} onChange={(e)=>setUserEmail(e.target.value)} sx={{width : '350px'}} error  helperText="incorect email" ></TextField> :  <CssTextField value={UserEmail} onChange={(e)=>setUserEmail(e.target.value)}   label='User Name'     /> }
{ userLogin.error === 'password incorrect' ? <TextField value={UserPassword} onChange={(e)=>setUserPassword(e.target.value)} sx={{width : '350px'}} error helperText="incorect password"   ></TextField> : <CssTextField   value={UserPassword} onChange={(e)=>setUserPassword(e.target.value)} type="password" label='Password'       /> }
      <Button sx={{width : '350px'}} variant='outlined' onClick={()=>{ loginAction({email : UserEmail , password : UserPassword}  , login , loginError , navigate ) }} >    Login   </Button>
</Box>
</FormControl>
<LoginText></LoginText>
</Box>
    </Box>
  )
}