  import React  , {useState } from 'react'
  import { regester } from '../actions/auth'
  import { authInfo} from '../types/actions/auth'
  import { login } from '../state/actionCreators'
   import {useDispatch , useSelector} from 'react-redux'

  export const  Regester: React.FC = ()=> {
  const dispatch = useDispatch() ;
  const state = useSelector(state => state)
  console.log(state)
  const [email, setEmail] = useState<string>("adbdlqdmsq@gmail.com") ; 
  const [myError, setmyError] = useState(null)
  const [password, setPassword] = useState<string>("abdo2015") ; 
  const [birthDate, setBirthDate] = useState<string>(new Date().toUTCString()) ; 
  const [fullName, setFullName] = useState<string>("abderehmen")
  const handleSubmit =  async (event : any)  =>{
       event.preventDefault() ; 
       const {data , error} = await regester({email , password , birthDate , fullName})  ; 
       if(error) {
        return setmyError(error)
       }
        login(data.token , data.userObj)(dispatch)
           }
 
  return (
    <div>
    <div>this is the regester page</div>
    <form  >
      <label>full name</label><input  onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  ></input>
      <label>email</label><input type="email"  onChange={(e)=>{setEmail(e.target.value)}}  value={email}  ></input>
      <label>birthDate</label><input onChange={(e)=>{setBirthDate(e.target.value.toString())}} value={birthDate}  type='Date' ></input>
      <label>password</label><input value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
      <button onClick={(e)=>{handleSubmit(e)}} type="submit" >submit</button>
      </form>
    </div>
  )
}
