import { NavLink } from "react-router-dom"

import "./Navbar.css"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode"

function Navbar(){

const activeLink = "nav-list__link nav-list__link--active"
const normallink = "nav-list__link"


    return(
        <nav className="nav">
<div className="container">
    <div className="nav-row">
        <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>

        <BtnDarkMode/>

        <ul className="nav-list">
            <li className="nav-list__item">
                <NavLink to="/"className={({isActive}) => isActive ? activeLink : normallink}>Home</NavLink>
            </li>
            <li className="nav-list__item">
                <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normallink}>Projects</NavLink>
           </li>
            <li className="nav-list__item">
                <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normallink}>Contacts</NavLink>
            </li>
        </ul>
    </div>
</div>
</nav>
    )}
    
    export default Navbar