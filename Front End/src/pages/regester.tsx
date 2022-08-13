  import React  , {useState } from 'react'
  import { regester } from '../actions/auth'
  import { authInfo} from '../types/actions/auth'
  export const  Regester: React.FC = ()=> {
  const [email, setEmail] = useState("adbdlqdmsq@gmail.com") ; 
  const [error, setError] = useState(null)
  const [password, setPassword] = useState("abdo2015") ; 
  const [birthDate, setBirthDate] = useState<any>(new Date()) ; 
  const [fullName, setFullName] = useState("abderehmen")
  const handleSubmit =  async ()  =>{
  const {error, data} = await regester({email , password ,birthDate , fullName})    ;  
  if(error){
     return    setError(error)  ;
  }
  console.log(data)
  }
  return (
    <div>
    <div>this is the regester page</div>
    <form>
      <label>full name</label><input  onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  ></input>
      <label>email</label><input type="email"  onChange={(e)=>{setEmail(e.target.value)}}  value={email}  ></input>
      <label>birthDate</label><input onChange={(e)=>{setBirthDate(e.target.value)}} value={birthDate}  type='Date' ></input>
      <label>password</label><input value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
      <button onClick={handleSubmit} >submit</button>
    </form>
    </div>
  )
}
