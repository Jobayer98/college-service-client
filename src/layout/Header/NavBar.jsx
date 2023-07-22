import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full navbar bg-base-300">
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
        <NavLink to="/">Title</NavLink>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
