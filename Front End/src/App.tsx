import React , { useEffect }from 'react'     ; 
import {useSelector , useDispatch} from 'react-redux'
import { BrowserRouter , Routes, Route  } from "react-router-dom";
import {Header } from './components'
import {Home , Login , Regester , Productivity} from './pages'
import  LoggedRoute  from  './Routes/loggedRoute'
import   UnloggedRoute from './Routes/unloggedRoute'
import { stateType} from './state/reducers'
import { userInfoAuth } from './actions/auth';
import { login } from './state/actionCreators';
import { userLoginTypes } from './types';
import { ResponsiveContainer} from 'recharts'

const App:React.FC = () =>{
    const userInfo  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const userLogin = useSelector((state : stateType) => state.userLogin) ; 
    const dispatch = useDispatch()
    const storageUser = localStorage.getItem("day-after-day")



    useEffect(  () => {
async function fetchUser(){
      if(storageUser){
 const {data , error} =  await userInfoAuth(storageUser)
 login(storageUser , data)(dispatch)
      } }
      fetchUser()
    }, [storageUser])
 return (
<BrowserRouter>

{ (!userInfo && storageUser  ) || userLogin.loading ?  <div> loading...</div>  : ( userInfo && Object.keys(userLogin).length && storageUser ? <LoggedRoute/> :<UnloggedRoute/> )}
</BrowserRouter>
        )

    }

export default App