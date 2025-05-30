import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive, fast, and user-friendly web applications using the latest technologies like React, Node.js, and MongoDB.",
    icon: "fas fa-code",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with stunning UI and high performance using Flutter and React Native.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and modern designs that deliver the best user experience. We focus on accessibility and aesthetics.",
    icon: "fas fa-paint-brush",
  },
  {
    title: "Cloud Integration",
    description:
      "Secure cloud infrastructure using AWS, Azure, or Google Cloud for scalable and reliable applications.",
    icon: "fas fa-cloud",
  },
  {
    title: "Machine Learning",
    description:
      "Smart AI-driven applications including data analytics, prediction models, and recommendation engines.",
    icon: "fas fa-brain",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automated testing, deployment, and monitoring to deliver quality software faster with fewer bugs.",
    icon: "fas fa-cogs",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Our Services
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl text-blue-600 mb-4">
              <i className={service.icon}></i>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
