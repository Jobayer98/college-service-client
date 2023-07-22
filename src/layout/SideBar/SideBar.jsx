import { NavLink } from "react-router-dom";

const SideBar = () => {
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
      </ul>
    </>
  );
};

export default SideBar;
