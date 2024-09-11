// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div 
      className="flex flex-col justify-center items-center text-center min-h-screen"
      style={{ backgroundImage: 'url(/assets/contact-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-white"
      >
        Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg text-white"
      >
        Get in touch with me using the form below or via social media.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 w-full max-w-md p-4 bg-white bg-opacity-80 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

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
          className="text-xl text-white hover:text-gray-300"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://github.com/snehsaurav248" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl text-white hover:text-gray-300"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="mailto:snehsauravv248@gmail.com" 
          className="text-xl text-white hover:text-gray-300"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
