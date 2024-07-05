import { BiMenu , BiGridAlt, BiCollection, BiFolder,BiCog, BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
    return(
        <nav>
            <div className="navAlign">
                <div>
                    <div className="navButton">
                        <button className="menuButton"><BiMenu size={25}/></button>
                    </div>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/">
                        <BiGridAlt size={25} />
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/devices">
                        <BiCollection className="navIcon" size={25}/>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/">
                        <BiFolder className="navIcon" size={25}/>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/">
                        <BiCog className="navIcon" size={25}/>
                    </NavLink>
                </div>
            </div>
            <div className="logOutArea">
                <button className="logoutButton"><BiLogOut size={25}/></button>
            </div>
        </nav>
    );
};

export default NavBar;
