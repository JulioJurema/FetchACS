import { AiFillAppstore, AiFillHdd } from "react-icons/ai"
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar: React.FC = () => {
    return(
        <nav>
            <Link className="navItem" to="/"><AiFillAppstore className="navIcon" /> Dashboard</Link>
            <Link className="navItem" to="/devices"><AiFillHdd className="navIcon" /> Devices</Link>
        </nav>
    );
};

export default NavBar;