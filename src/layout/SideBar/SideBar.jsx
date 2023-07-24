import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const SideBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <>
      <ul className="menu p-4 pt-8 w-80 h-full bg-base-200">
        {/* Sidebar content here */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/colleges">Colleges</NavLink>
        </li>
        <li>
          <NavLink to="/Admission">Admission</NavLink>
        </li>
        <li>
          <NavLink to="/my-college">My College</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default SideBar;
