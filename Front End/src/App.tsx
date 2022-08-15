import React from 'react'     ; 
import {useSelector , useDispatch} from 'react-redux'
import { BrowserRouter , Routes, Route,  } from "react-router-dom";
import {Header , Nav} from './components'
import {Home , Login , Regester , Productivity} from './pages'
import  LoggedRoute  from  './Routes/loggedRoute'
import  UnloggedRoute from './Routes/unloggedRoute'
import {stateType} from './state/reducers'
const App:React.FC = () =>{
    const userInfo  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const userLogin = useSelector((state : stateType) => state.userLogin) ; 

    console.log(userInfo , userLogin)
    const storageUser = localStorage.getItem("day-after-day")
 return (
<BrowserRouter>
{ userInfo && userLogin && storageUser ? <LoggedRoute/> :<UnloggedRoute/> }
</BrowserRouter>
        )

    }

export default App