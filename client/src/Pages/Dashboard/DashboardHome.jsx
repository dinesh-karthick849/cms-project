 import React from "react";

const stats = [
  { label: "Active Projects", value: 12, color: "bg-blue-500" },
  { label: "Team Members", value: 26, color: "bg-green-500" },
  { label: "Clients Served", value: 105, color: "bg-purple-500" },
  { label: "Tasks Completed", value: 548, color: "bg-pink-500" },
];

const DashboardHome = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to CodeCraft Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        Monitor project activity, manage your team, and stay on top of your goals.
      </p>

      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl shadow-md text-white ${stat.color}`}
          >
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p className="mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            + New Project
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Add Team Member
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

