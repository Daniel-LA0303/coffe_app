import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-4 py-4">{children}</main>
    </div>
  );
}

export default RootLayout;
