import React , {useState} from 'react'
import {login as loginAction} from '../features/login'
import * as actionCreators from '../state/actionCreators'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { useNavigate } from 'react-router-dom'



export const Login: React.FC = () =>{
     const [email, setEmail]       = useState<string | undefined>("")
     const [password, setPassword] = useState<string | undefined>("")
     const dispatch = useDispatch()
     const {login , emitAction } = bindActionCreators(actionCreators , dispatch)
     const navigate = useNavigate()
     
  return (
    <div>
      <input value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} ></input>
      <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} ></input>
      <button onClick={()=>{loginAction({email , password} , login , emitAction , navigate )}}> submit </button>
    </div>
  )
}