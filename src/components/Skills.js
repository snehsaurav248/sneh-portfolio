// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, CodeOutlined, CloudOutlined, BookOutlined } from '@ant-design/icons';

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-16 px-4"
      style={{ 
        backgroundImage: 'url(/assets/skills-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Ensures the image stays fixed during scrolling
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative container mx-auto text-center z-10">
        <motion.h2 
          className="text-5xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <p className="text-lg mb-12 text-gray-300">
          Here’s a snapshot of my skills and expertise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CheckCircleOutlined className="text-4xl text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Languages</h3>
              <p className="text-gray-600">C/C++, Java, HTML, CSS, JavaScript</p>
            </div>
          </motion.div>
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CodeOutlined className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Technologies/Frameworks</h3>
              <p className="text-gray-600">React, Node.js, Git, GitHub, Ubuntu</p>
            </div>
          </motion.div>
          <motion.div 
            className="p-6 bg-yellow-100 shadow-lg rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <CloudOutlined className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Skills</h3>
              <p className="text-gray-600">Data Structures and Algorithms, Problem-Solving, Responsive Web Design</p>
            </div>
          </motion.div>
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <BookOutlined className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Coursework</h3>
              <p className="text-gray-600">Operating Systems, OOP, Computer Networks, DBMS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
