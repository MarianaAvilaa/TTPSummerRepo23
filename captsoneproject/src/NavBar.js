import React from "react";
import { Link } from "react-router-dom";
import './navbarstyle.css';
function NavBar(){
    return(
        <div>
        
        <header>
       
        <nav>
            <ul class="navbar">

          <li> <Link to ="/Pollen"> Pollen</Link></li> 
          
          <li> <Link to="/Weather">Weather</Link></li> 
            </ul>
        </nav>
           
        </header>
        </div>
    );
}
export default NavBar;