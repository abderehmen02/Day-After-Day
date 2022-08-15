import React from "react";
import { Productivity } from "../pages";
import { Route , Routes  } from "react-router-dom";

function LoggedRoute (){
    return <Routes>
<Route path="/productivity"   element={<Productivity/>}  ></Route>
    </Routes>
}

export default LoggedRoute