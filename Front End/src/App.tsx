import React , { useEffect }from 'react'     ; 
import {useSelector , useDispatch} from 'react-redux'
import { BrowserRouter , Routes, Route,  } from "react-router-dom";
import {Header , Nav} from './components'
import {Home , Login , Regester , Productivity} from './pages'
import  LoggedRoute  from  './Routes/loggedRoute'
import  UnloggedRoute from './Routes/unloggedRoute'
import {stateType} from './state/reducers'
import { userInfoAuth } from './actions/auth';
const App:React.FC = () =>{
    const userInfo  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const userLogin = useSelector((state : stateType) => state.userLogin) ; 

    console.log(userInfo , userLogin)
    const storageUser = localStorage.getItem("day-after-day")

    useEffect(  () => {

async function fetchUser(){
      if(storageUser){
  await userInfoAuth(storageUser)
      } }
      fetchUser()
    }, [storageUser])
    
 return (
<BrowserRouter>
{ userInfo && Object.keys(userLogin).length && storageUser ? <LoggedRoute/> :<UnloggedRoute/> }
</BrowserRouter>
        )

    }

export default App