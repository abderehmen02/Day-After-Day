import React from 'react'     ; 
import {useSelector , useDispatch} from 'react-redux'
import { stateType } from './state/reducers';
import { BrowserRouter , Routes, Route,  } from "react-router-dom";
import {Header , Nav} from './components'
import {Home , Login , SignUp , Productivity} from './pages'

const App:React.FC = () =>{
    return (
<BrowserRouter>
<Header/>
<Routes>
<Route   path='/home'          element={<Home/>}  > </Route>
<Route   path='/login'        element={<Login/>} ></Route>
<Route   path='/signUp'        element={<SignUp/>} ></Route>
<Route   path='/productivity'  element={<Productivity/>} >  </Route>
</Routes>
<Nav/>
</BrowserRouter>
        )
}

export default App