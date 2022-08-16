import React , { useEffect }from 'react'     ; 
import {useSelector , useDispatch} from 'react-redux'
import { BrowserRouter , Routes, Route  } from "react-router-dom";
import {Header , Nav} from './components'
import {Home , Login , Regester , Productivity} from './pages'
import  LoggedRoute  from  './Routes/loggedRoute'
import   UnloggedRoute from './Routes/unloggedRoute'
import { stateType} from './state/reducers'
import { userInfoAuth } from './actions/auth';
import { login } from './state/actionCreators';
import { userLoginTypes } from './types';
const App:React.FC = () =>{
    const userInfo  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const userLogin = useSelector((state : stateType) => state.userLogin) ; 
    const dispatch = useDispatch()
    console.log(userInfo , userLogin)
    const storageUser = localStorage.getItem("day-after-day")

console.log("chekc here")
console.log(Boolean(userInfo))
console.log(Boolean(Object.keys(userLogin).length)) 
console.log(Boolean(storageUser))


    useEffect(  () => {
async function fetchUser(){
      if(storageUser){
 const {data , error} =  await userInfoAuth(storageUser)
 login(storageUser , data)(dispatch)
    console.log(Boolean(userInfo && Object.keys(userLogin).length && storageUser))
    console.log(userInfo)
    console.log(userLogin)
    console.log(storageUser)
    console.log('data')
      } }
      fetchUser()
    }, [storageUser])
  console.log("user login")
  console.log(userLogin)
 return (
<BrowserRouter>

{ !userInfo && storageUser ? <div> loading...</div>  : ( userInfo && Object.keys(userLogin).length && storageUser ? <LoggedRoute/> :<UnloggedRoute/> )}
</BrowserRouter>
        )

    }

export default App