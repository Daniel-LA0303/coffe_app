import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <main className=" flex-1">{children}</main>
    </div>
  );
}

export default RootLayout;
