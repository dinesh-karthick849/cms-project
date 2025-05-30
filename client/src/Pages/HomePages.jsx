 import { useNavigate } from "react-router-dom";

function HomePages() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 text-gray-800">
      {/* Header Section */}
      <header className="py-6 px-8 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-blue-700">CodeCraft Technologies</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/signin")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Sign In
          </button>
          <button
            onClick={() => alert("You are logged out.")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-gradient-to-r from-blue-100 to-white">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-800">
          Empowering the Future of Digital Innovation
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          At CodeCraft Technologies, we build custom software solutions that solve real business problems.
          From startups to enterprises, we turn your ideas into secure, scalable, and beautiful digital products.
        </p>
        {/* ✅ Updated to navigate to /about-us */}
        <button
          onClick={() => navigate("/about-us")}
          className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Learn More About Us
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-12">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              desc: "Responsive, secure, and SEO-friendly websites built with the latest technologies."
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform apps that offer seamless user experience and performance."
            },
            {
              title: "Cloud Solutions",
              desc: "Scalable cloud infrastructure with AWS, Azure, and Google Cloud."
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-200 to-blue-100">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">
          Ready to bring your idea to life?
        </h3>
        <p className="text-gray-700 mb-6">
          Let's build something amazing together. Sign in and explore your dashboard now!
        </p>
        <button
          onClick={() => navigate("/signin")}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeCraft Technologies. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePages;





 



