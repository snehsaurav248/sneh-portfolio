// src/components/Home.js
import React, { useState } from 'react';
import { MailOutlined, LinkedinOutlined, GithubOutlined, FilePdfOutlined, GlobalOutlined } from '@ant-design/icons'; // Import icons

const Home = () => {
  const [showCredentials, setShowCredentials] = useState(false); // State to manage credentials visibility

  const handleButtonClick = () => {
    setShowCredentials(!showCredentials); // Toggle visibility on button click
  };

  return (
    <div 
      className="flex flex-col justify-center items-center text-center min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/assets/default-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-white mb-8">
          Explore my work and skills through the sections above.
        </p>
        <button 
          onClick={handleButtonClick} 
          className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600 transition-all mb-6"
        >
          Get in Touch
        </button>
        {showCredentials && ( // Conditionally render the credentials section
          <div className="flex justify-center space-x-6 text-white mt-6">
            {/* Email */}
            <a href="mailto:snehsauravv248@gmail.com" className="hover:text-yellow-500 transition-colors" aria-label="Email">
              <MailOutlined className="text-3xl" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/snehsaurav248/" className="hover:text-yellow-500 transition-colors" aria-label="LinkedIn">
              <LinkedinOutlined className="text-3xl" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/snehsaurav248" className="hover:text-yellow-500 transition-colors" aria-label="GitHub">
              <GithubOutlined className="text-3xl" />
            </a>
            {/* Resume */}
            <a href="/assets/sneh-saurav-specialised-cv-12113521.pdf" className="hover:text-yellow-500 transition-colors" aria-label="Resume">
              <FilePdfOutlined className="text-3xl" />
            </a>
            {/* LeetCode */}
            <a href="https://leetcode.com/u/snehsauravv248//" className="hover:text-yellow-500 transition-colors" aria-label="LeetCode">
              <GlobalOutlined className="text-3xl" /> {/* Replace with LeetCode icon if available */}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
