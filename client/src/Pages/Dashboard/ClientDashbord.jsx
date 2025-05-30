 import React from "react";

const ClientDashboard = () => {
  const stats = [
    { icon: "✔️", label: "Project Status", detail: "65% completed", progress: 65 },
    { icon: "📝", label: "Tasks", detail: "UI done, API ongoing, tests next", progress: 40 },
    { icon: "💳", label: "Billing", detail: "₹30k paid / ₹20k pending", progress: 60 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Client Dashboard</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{s.icon}</span>
              <h2 className="text-xl font-semibold">{s.label}</h2>
            </div>
            <p className="text-gray-600 mb-3">{s.detail}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${s.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{s.progress}%</p>
          </div>
        ))}
      </div>

      {/* Documents & Chat Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">📄</span>
            <h2 className="text-xl font-semibold">Documents</h2>
          </div>
          <p className="text-gray-600 mb-4">Last upload: project-specs.pdf</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Upload New File
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">💬</span>
            <h2 className="text-xl font-semibold">Chat Support</h2>
          </div>
          <p className="text-gray-600 mb-4">Have a question? Connect with our team.</p>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

