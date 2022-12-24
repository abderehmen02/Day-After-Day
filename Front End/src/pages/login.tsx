import React , {useEffect, useState} from 'react'
import {login as loginAction} from '../features/login'
import * as actionCreators from '../state/actionCreators'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { useNavigate } from 'react-router-dom'
import '../features/login/index.css'
import { Header , ErrorSection } from '../features/login/components'
import { useSelector } from 'react-redux'
import { stateType } from '../state/reducers'
import { userLoginState } from '../types'
import { TextField  , Box , Typography ,InputAdornment, FormControl, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Login: React.FC = () =>{
     const [email, setEmail]       = useState<string | undefined>("")
     const [password, setPassword] = useState<string | undefined>("")
     const dispatch = useDispatch()
     const {login , emitAction , loginError } = bindActionCreators(actionCreators , dispatch)
     const navigate = useNavigate()
     const userLogin : userLoginState = useSelector(( state : stateType )=>state.userLogin)
    

  return (
    <FormControl >
      <ErrorSection/>
<Box>
  <Typography variant='h3' >Login</Typography>
  <Typography variant='h4' >Welcome Back To Day After Day </Typography>
</Box>
<Box>
   <TextField variant="filled"  label='User Name'        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon/>
            </InputAdornment>
          ),
        }}
 />
   <TextField variant="filled" label='Password' />
</Box>
    <Button variant='outlined' >    Login   </Button>

      {/* <div className="loginForm">
<div><label htmlFor='userName'   >user name</label>      <input name='userName' value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} className={userLogin.error === 'can not find user' ? 'inputError': 'normalInput'} ></input></div>
<div><label htmlFor="password"> password</label>      <input  name='password' value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} className={userLogin.error === 'password incorrect' ? 'inputError' : 'normalInput'} ></input></div>
      <button className='bg-primary' onClick={()=>{loginAction({email , password} , login , loginError , navigate )}}> Login </button>
      </div> */}
    </FormControl>
  )
}