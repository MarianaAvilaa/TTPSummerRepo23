import React from "react";
import {Routes, Route,Navigate} from "react-router-dom";

import PollenPage from "./PollenPage";
import App from "./App";

const Root =()=>{
    return(
        <div>
           
            <Routes>
                <Route path= "/" element ={<App/>} />
                <Route path = "/Pollen" element= {<PollenPage/>} />
            </Routes>
            
        </div>

    )
}

export default Root;