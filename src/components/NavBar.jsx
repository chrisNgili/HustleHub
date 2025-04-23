import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
        <div>
            <nav>
                
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/addjob" className="nav-link">Add job</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
            </nav>
        </div>    
    )
}

export default NavBar