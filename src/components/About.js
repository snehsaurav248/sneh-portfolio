import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center min-h-screen"
      style={{
        backgroundImage: "url(/assets/about-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="bg-opacity-60 p-8 rounded-lg shadow-lg max-w-4xl mx-4 sm:mx-8">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <img
            src="/assets/profile-pic.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white"
          />
        </motion.div>

        {/* About Content */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-lg leading-relaxed"
        >
          I am an enthusiastic software developer with a passion for crafting
          dynamic and responsive web applications. My journey spans a diverse
          array of languages and technologies—from C/C++ and Java to JavaScript,
          React.js, and Node.js. I thrive on tackling complex problems and am
          always eager to embrace new challenges that push me to grow both
          technically and personally. With a creative mindset and a commitment
          to continuous learning, I am dedicated to turning innovative ideas
          into reality.
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/snehsaurav248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <i className="fab fa-linkedin-in"></i>{" "}
            {/* Ensure the class name is correct */}
          </a>
          <a
            href="https://github.com/snehsaurav248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:snehsauravv248@gmail.com"
            className="text-xl hover:text-gray-300"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
