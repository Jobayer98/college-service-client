import { Outlet } from "react-router-dom";
import NavBar from "./Header/NavBar";
import SideBar from "./SideBar/SideBar";

const Root = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <NavBar />
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        {/* Sidebar */}
        <SideBar />
      </div>
    </div>
  );
};

export default Root;
