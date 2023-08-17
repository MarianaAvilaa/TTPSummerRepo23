import React from "react";
import {Routes, Route} from "react-router-dom";

import PollenPage from "./PollenPage";
import App from "./App";
import WeatherPage from "./WeatherPage";
import NavBar from "./NavBar";
import './navbarstyle.css';

const Root =()=>{
    return(
        <div>
           <NavBar/>

            <Routes>
                <Route path= "/" element ={<App/>} />
                <Route path = "/Pollen" element= {<PollenPage/>} />
                <Route path ="/Weather" element={<WeatherPage/>} />
            </Routes>

            
        </div>

    )
}

export default Root;