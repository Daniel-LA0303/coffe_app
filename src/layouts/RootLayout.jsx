import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function RootLayout() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
