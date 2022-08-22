import React , {useState} from 'react'
import {login} from '../features/login'
import {login as loginAction} from '../state/actionCreators'


export const Login: React.FC = () =>{
     const [email, setEmail] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
 
  return (
    <div>
      <input value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} ></input>
      <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} ></input>
      <button onClick={()=>{login({email , password} , loginAction  )}}> submit </button>
    </div>
  )
}