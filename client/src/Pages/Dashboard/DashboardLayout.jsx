 import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logout
    localStorage.removeItem("authenticated");
    navigate("/signIn");
  };

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Team", path: "/dashboard/team" },
    { label: "Services", path: "/dashboard/services" },
    { label: "About", path: "/dashboard/about" },
    { label: "Profile", path: "/dashboard/profile" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-5">
        <h1 className="text-2xl font-bold mb-10 text-center">CodeCraft</h1>
        <nav className="flex-1 space-y-4">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {/* Topbar (optional) */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Dashboard Panel
          </h2>
        </div>

        {/* Outlet for nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;


