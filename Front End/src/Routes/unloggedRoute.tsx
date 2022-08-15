
import React from "react"
import {Route , Routes} from 'react-router-dom'
import{Home , Login , Regester } from '../pages' 



function UnloggedRoute() {

return ( <Routes>
<Route   path='/'          element={<Home/>}  > </Route>
<Route   path='/login'        element={<Login/>} ></Route>
<Route   path='/regester'        element={<Regester/>} ></Route>
</Routes>   )
}

export default UnloggedRoute
