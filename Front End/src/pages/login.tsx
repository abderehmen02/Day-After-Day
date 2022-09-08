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

export const Login: React.FC = () =>{
     const [email, setEmail]       = useState<string | undefined>("")
     const [password, setPassword] = useState<string | undefined>("")
     const dispatch = useDispatch()
     const {login , emitAction , loginError } = bindActionCreators(actionCreators , dispatch)
     const navigate = useNavigate()
     const userLogin : userLoginState = useSelector(( state : stateType )=>state.userLogin)
    

  return (
    <div className='loginPage' >
      <Header/>
      <ErrorSection/>
      <div className="loginForm">
<div><label htmlFor='userName'   >user name</label>      <input name='userName' value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} className={userLogin.error === 'can not find user' ? 'inputError': 'normalInput'} ></input></div>
<div><label htmlFor="password"> password</label>      <input  name='password' value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} className={userLogin.error === 'password incorrect' ? 'inputError' : 'normalInput'} ></input></div>
      <button className='bg-primary' onClick={()=>{loginAction({email , password} , login , loginError , navigate )}}> Login </button>
      </div>
    </div>
  )
}