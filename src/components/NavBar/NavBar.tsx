import { AiFillAppstore, AiFillHdd, AiFillSetting, AiFillFolder, AiOutlineLogout} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
    return(
        <nav>
            <div>
                <div>
                    <img className="logo" src="/public/Logo.svg" alt="Logo site" />
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/">
                        <AiFillAppstore className="navIcon" /> Dashboard
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/devices">
                        <AiFillHdd className="navIcon" /> Devices
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/">
                        <AiFillFolder className="navIcon" /> Files
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navItem active" : "navItem"} to="/">
                        <AiFillSetting className="navIcon" /> Config
                    </NavLink>
                </div>
            </div>
            <div>
                <button className="logOut"><AiOutlineLogout /> Logout</button>
            </div>
        </nav>
    );
};

export default NavBar;
