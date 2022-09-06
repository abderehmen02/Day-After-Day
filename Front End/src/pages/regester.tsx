  import React  , {useState } from 'react'
  import { regester } from '../actions/auth'
  import { authInfo  } from '../types/actions/auth'
  import { userLoginTypes } from '../types'
  import * as ActionCreators from '../state/actionCreators'
  import {useDispatch , useSelector} from 'react-redux'
  import {bindActionCreators} from 'redux'
  import { useNavigate } from 'react-router-dom'
  import { Header } from '../features/regester/components'
  import '../features/regester/index.css'


  export const  Regester: React.FC = ()=> {
  const dispatch = useDispatch() ;
  const navigate  = useNavigate() ;
  const {login} = bindActionCreators( ActionCreators  , dispatch)
  const state = useSelector(state => state)
  const [email, setEmail] = useState<string>("adbdlqdmsq@gmail.com") ; 
  const [myError, setmyError] = useState(null)
  const [password, setPassword] = useState<string>("abdo2015") ; 
  const [birthDate, setBirthDate] = useState<string>(new Date().toUTCString()) ; 
  const [fullName, setFullName] = useState<string>("abderehmen")

  const handleSubmit =  async (event : any)  =>{
       event.preventDefault() ; 
       dispatch({type: userLoginTypes.userLoginRequest })
       const {data , error} = await regester({email , password , birthDate , fullName})  ; 
       if(error) {
        return dispatch({type : userLoginTypes.userLoginFail , error })
       }
       console.log("data from login")
       console.log(data)
        login(data.token , data.userObj)
        navigate("/productivity")
       console.log(error)
           }
 
  return (
    <div  className='regesterPage'  >
    <Header/>
     <form className='regesterForm' >
<div><label>full name</label><input  onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  ></input>   </div>
<div><label>email</label><input type="email"  onChange={(e)=>{setEmail(e.target.value)}}  value={email}  ></input>    </div>
<div><label>birthDate</label><input onChange={(e)=>{setBirthDate(e.target.value.toString())}} value={birthDate}  type='Date' ></input>  </div>
<div><label>password</label><input value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input> </div>
      <button onClick={(e)=>{handleSubmit(e)}} type="submit" > regester </button>
      </form>
    </div>
  )
}
