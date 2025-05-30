 import React from "react";

const teamMembers = [
  {
    name: "Dinesh Karthick",
    role: "Full Stack Developer",
    image: "https://source.unsplash.com/random/150x150?face&1",
    linkedin: "https://linkedin.com/in/dineshkarthick",
    github: "https://github.com/dinesh-karthick849",
  },
  {
    name: "Jagadish",
    role: "Frontend Developer",
    image: "https://source.unsplash.com/random/150x150?face&2",
    linkedin: "https://linkedin.com/in/jagadish",
    github: "https://github.com/jagadish-27",
  },
  {
    name: "Sanjai Kumar",
    role: "Backend Developer",
    image: "https://source.unsplash.com/random/150x150?face&3",
    linkedin: "https://linkedin.com/in/sanjaikumar",
    github: "https://github.com/sanjaikumar2005",
  },
];

function Team() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
            />
            <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
            <p className="text-gray-500 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black text-2xl"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

