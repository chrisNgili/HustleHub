import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/addjob" className="nav-link">Add job</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
        </nav>
    )
}

export default NavBar