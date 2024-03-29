
import React  from "react"
import {Link, Route , Routes} from 'react-router-dom'
import{Home , Login , Regester } from '../pages' 
import { IsLoggedOut } from "../helpers/userChack"
import About from "../pages/about"
import { useLocation , Location} from "react-router-dom"
import { pathToFileURL } from "url"


function UnloggedRoute() {
const location : Location = useLocation() ;

return ( 
<div>
<Routes>
<Route   path="/about" element={<About/>} ></Route>
<Route   path='/login'        element={<IsLoggedOut><Login/></IsLoggedOut>} ></Route>
<Route   path='/regester'        element={ <IsLoggedOut> <Regester/> </IsLoggedOut>} ></Route>
<Route   path='*'          element={<IsLoggedOut><Home/></IsLoggedOut>}  > </Route>
</Routes>   
</div>)
}

export default UnloggedRoute
