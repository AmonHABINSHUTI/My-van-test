import React from "react";
import { Link,NavLink } from "react-router-dom";
import image2 from "./../images/profile.png"



export default  function Header(){

    return(

    

    <header>
    {/* <NavLink className="site-logo" to="/">#VanLife</NavLink>
    <nav>
      <NavLink to="/host">Host</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/vans">Vans</NavLink>
    </nav> */}
     <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>
                {/* <NavLink 
                    to="/contact"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Contact 
                </NavLink> */}
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>
                {/* <NavLink 
                    to="/login"
                    
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Login
                </NavLink> */}
                  <Link to="login" className="login-link">
                    <img 
                        src={image2}
                        className="login-icon"
                    />
                </Link>
                {/* <NavLink 
                    to="/signup"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Signup
                </NavLink> */}
            </nav>
  </header>
    )
}