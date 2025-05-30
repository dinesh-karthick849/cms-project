 import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">About CodeCraft Technologies</h1>
      
      <p className="mb-4 text-gray-700 leading-relaxed">
        At <span className="font-semibold text-blue-600">CodeCraft Technologies</span>, we specialize in crafting innovative software solutions tailored to your business needs.
        With a team of passionate developers and designers, we transform ideas into high-quality digital products.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Founded in 2023, our mission is to empower companies by delivering scalable, efficient, and user-friendly software that drives success. We believe in the power of technology to transform businesses and improve lives.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our Core Values</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Innovation:</strong> We embrace creativity and continuous learning to stay ahead in technology.</li>
        <li><strong>Quality:</strong> We deliver reliable and performant solutions that exceed expectations.</li>
        <li><strong>Collaboration:</strong> We work closely with our clients and within our teams to achieve the best outcomes.</li>
        <li><strong>Integrity:</strong> Transparency and honesty guide every aspect of our work.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Why Choose Us?</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We combine technical expertise with a client-first approach to ensure every project is a success. From startups to enterprises, our customized solutions help you streamline operations, improve user engagement, and accelerate growth.
      </p>

      <button 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
        onClick={() => alert("Thank you for your interest! Contact us for more info.")}
      >
        Contact Us
      </button>
    </div>
  );
};

export default About;


