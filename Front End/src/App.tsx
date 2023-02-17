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

import {ThemeProvider} from '@mui/material'
import theme from './styling/theme';
import { createAction } from './utils';
import { sendVisitingEmail } from './features/email/functions';
import { UserLoadingSkeleton } from './features/skeleton/skeleton';
const App:React.FC = () =>{
    const userInfo  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const userLogin = useSelector((state : stateType) => state.userLogin) ; 
    const dispatch = useDispatch()
    const storageUser = localStorage.getItem("day-after-day")



    useEffect(  () => {
        // login if there is a token store in the localStorage

async function fetchUser(){
      if(storageUser){
 const {data , error} =  await userInfoAuth(storageUser)
 login(storageUser , data)(dispatch)
      } }
      fetchUser()
    }, [storageUser])

// sending an email to me when any user visit this app (day after day)
    useEffect(  sendVisitingEmail, [])

return (
<BrowserRouter>
<ThemeProvider theme={theme} >
{ (!userInfo && storageUser  ) || userLogin.loading ?  <UserLoadingSkeleton/>  : ( userInfo && Object.keys(userLogin).length && storageUser ? <LoggedRoute/> :<UnloggedRoute/> )}
</ThemeProvider>
</BrowserRouter>
        )

    }

export default App