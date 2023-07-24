import { Outlet } from "react-router-dom";
import NavBar from "./Header/NavBar";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-[80vh]">
          {/* Navbar */}
          <NavBar />
          {/* Page content here */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          {/* Sidebar */}
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
