 import React, { useState } from "react";

const Profile = () => {
  // Dummy user data, you can replace with real data or context
  const [user, setUser] = useState({
    name: "Dinesh Karthick",
    email: "dinesh.karthick@example.com",
    role: "Full Stack Developer",
    bio: "Passionate developer at CodeCraft Technologies. Lover of clean code and great UX.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Profile</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
          {isEditing ? (
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-800">{user.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
          {isEditing ? (
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-800">{user.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="role">Role</label>
          {isEditing ? (
            <input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-800">{user.role}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="bio">Bio</label>
          {isEditing ? (
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-800">{user.bio}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md mr-4 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;

