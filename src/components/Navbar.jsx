import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate();
    const { user } = useContext(AuthContext);

    return (
    <div className="navbar">
        <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo"><img className="pic-logo" src="/img/compass-regular.png" alt="Logo" />Trava</span>
        </Link>
        {user ? user.username : (
            <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={() => navigate('/login')} className="navButton">Login</button>
        </div>
        )}
    </div>
    </div>
);
};

export default Navbar;