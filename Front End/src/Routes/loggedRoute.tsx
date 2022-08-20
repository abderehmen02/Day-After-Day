import React from "react";
import { Productivity } from "../pages";
import { Route , Routes , Navigate } from "react-router-dom";
import { IsLoggedIn } from "../helpers/userChack";
import Goal from "../pages/goal";
function LoggedRoute (){
    return <Routes>
<Route  path="/productivity"   element={<IsLoggedIn><Productivity/></IsLoggedIn>}  ></Route>
<Route path="/goal" element={<IsLoggedIn> <Goal/> </IsLoggedIn> } >  </Route>
<Route path="*" element={<Navigate to="/productivity" ></Navigate>} ></Route>
    </Routes>
}

export default LoggedRoute