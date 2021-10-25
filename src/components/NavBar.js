import React from "react";
import {Link} from "react-router-dom";

function NavBar(){

    return(
        <>
       <nav>
       <div>
       <Link to="/" className="nav-link">Home </Link>
       <Link to="/Potions" className="nav-link">Potions </Link>
        </div>
       </nav>

        </>
    )


};


export default NavBar;