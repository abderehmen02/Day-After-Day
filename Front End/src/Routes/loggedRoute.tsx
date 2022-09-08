import React from "react";
import { Productivity } from "../pages";
import { Route , Routes , Navigate } from "react-router-dom";
import { IsLoggedIn } from "../helpers/userChack";
import LoggedNav from '../components/loggedNav'


import Goal from "../pages/goal";
import About from "../pages/about";
import Journal from "../pages/journal";
function LoggedRoute (){
    return<div className="webPage" >
        <LoggedNav/>
     <Routes>   
<Route  path="/productivity"   element={<IsLoggedIn><Productivity/></IsLoggedIn>}  ></Route>
<Route path="/goal" element={<IsLoggedIn> <Goal/> </IsLoggedIn> } >  </Route>
<Route path="/about"  element={<About/>} ></Route>
<Route path='/journal' element={<IsLoggedIn><Journal/></IsLoggedIn>} />
<Route path="*" element={<Navigate to="/productivity" ></Navigate>} ></Route>
    </Routes>
</div>
}

export default LoggedRoute