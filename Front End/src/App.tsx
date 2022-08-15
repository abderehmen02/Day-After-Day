import React from 'react'     ; 
import {useSelector , useDispatch} from 'react-redux'
import { stateType } from './state/reducers';
import { BrowserRouter , Routes, Route,  } from "react-router-dom";
import {Header , Nav} from './components'
import {Home , Login , Regester , Productivity} from './pages'

const App:React.FC = () =>{
    const state = useSelector(state => state)
    console.log(state)
    return (
<BrowserRouter>
<Header/>
<Routes>
<Route   path='/'          element={<Home/>}  > </Route>
<Route   path='/login'        element={<Login/>} ></Route>
<Route   path='/regester'        element={<Regester/>} ></Route>
<Route   path='/productivity'  element={<Productivity/>} >  </Route>
</Routes>
<Nav/>
</BrowserRouter>
        )
}

export default App