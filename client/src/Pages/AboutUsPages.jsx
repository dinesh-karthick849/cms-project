 import React from 'react';

const AboutUsPages = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 lg:px-24 py-12">
      {/* Hero / Intro */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          About CodeCraft Technologies
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          CodeCraft Technologies is a forward-thinking software company committed to delivering
          innovative, reliable, and scalable digital solutions. We combine technology with creativity
          to transform businesses and empower growth across industries.
        </p>
      </section>

      {/* Company Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded by a group of passionate developers and designers, CodeCraft Technologies has grown
          into a full-service digital agency that serves clients globally. We specialize in web and
          mobile application development, cloud solutions, UI/UX design, and custom enterprise systems.
          <br /><br />
          Our mission is to empower organizations through purposeful digital products that deliver real value.
        </p>
      </section>

      {/* Our Core Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          {[
            { title: "Innovation", desc: "We constantly explore emerging technologies and creative strategies." },
            { title: "Integrity", desc: "We believe in honest communication, fair practices, and doing what’s right." },
            { title: "Customer Success", desc: "We’re dedicated to delivering products that drive our clients' growth." },
            { title: "Team Collaboration", desc: "We work together across disciplines to solve complex challenges." },
          ].map((item, i) => (
            <li
              key={i}
              className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services Summary */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Web Development",
              desc: "We build fast, secure, and responsive websites tailored to your brand and users."
            },
            {
              title: "Mobile Apps",
              desc: "Our cross-platform mobile solutions ensure smooth performance and usability."
            },
            {
              title: "Cloud & DevOps",
              desc: "We design cloud-native architectures and automate deployments for scalability."
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Team Philosophy</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe in building not just software, but relationships. Our team thrives in a culture of curiosity,
          mentorship, and mutual respect. We invest in learning, encourage experimentation, and collaborate
          deeply with our clients.
          <br /><br />
          Every project is a partnership — we listen first, design smart, and build with purpose.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-12 bg-blue-100 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-800 mb-2">Let’s Build Something Together</h3>
        <p className="text-gray-700 mb-4">
          Got an idea or challenge? Let's talk about how we can make it happen.
        </p>
        <a
          href="mailto:contact@codecraft.tech"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUsPages;

