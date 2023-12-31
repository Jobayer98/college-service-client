import { Link, NavLink, useNavigate } from "react-router-dom";
import Theme from "./Theme";
import "./Navbar.css";
import Search from "./Search";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <nav className="w-full navbar bg-base-200 text-base-content border-b border-b-gray-300 fixed">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <Link to="/" className="text-2xl font-extrabold font-['Lugrasimo']">
          College Connect
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <div className="flex items-center">
          <ul className="custom_menu menu-horizontal">
            {/* Navbar menu content here */}
            <Search />
            <li>
              <NavLink
                to="/colleges"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Colleges
              </NavLink>
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
          <Theme />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
