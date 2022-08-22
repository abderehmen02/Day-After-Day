import React , {useState} from 'react'



export const Login: React.FC = () =>{
     const [email, setEmail] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
 
  return (
    <div>
      <input value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} ></input>
      <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} ></input>
      <button > submit </button>
    </div>
  )
}