
import React from "react"
import {Route , Routes} from 'react-router-dom'
import{Home , Login , Regester } from '../pages' 
import { IsLoggedOut } from "../helpers/userChack"



function UnloggedRoute() {

return ( <Routes>
<Route   path='/login'        element={<IsLoggedOut><Login/></IsLoggedOut>} ></Route>
<Route   path='/regester'        element={ <IsLoggedOut> <Regester/> </IsLoggedOut>} ></Route>
<Route   path='*'          element={<IsLoggedOut><Home/></IsLoggedOut>}  > </Route>
</Routes>   )
}

export default UnloggedRoute
