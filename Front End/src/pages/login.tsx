import React , {useState} from 'react'
import {login as loginAction} from '../features/login'
import * as actionCreators from '../state/actionCreators'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { useNavigate } from 'react-router-dom'
import '../features/login/index.css'
import { Header } from '../features/login/components'


export const Login: React.FC = () =>{
     const [email, setEmail]       = useState<string | undefined>("")
     const [password, setPassword] = useState<string | undefined>("")
     const dispatch = useDispatch()
     const {login , emitAction } = bindActionCreators(actionCreators , dispatch)
     const navigate = useNavigate()
     
  return (
    <div className='loginPage' >
      <Header/>
      <div className="loginForm">
<div><label htmlFor='userName' >user name</label>      <input name='userName' value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} ></input></div>
<div><label htmlFor="password"> password</label>      <input  name='password' value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} ></input></div>
      <button className='bg-primary' onClick={()=>{loginAction({email , password} , login , emitAction , navigate )}}> Login </button>
      </div>
    </div>
  )
}