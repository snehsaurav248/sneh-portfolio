// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, CodeOutlined, CloudOutlined, BookOutlined } from '@ant-design/icons';
import SkillsChart from './SkillsChart';

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-16 px-4 lg:px-12"
      style={{ 
        backgroundImage: 'url(/assets/skills-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Skills content */}
      <div className="relative container mx-auto text-center z-10">
        {/* Title */}
        <motion.h2 
          className="text-5xl font-extrabold mb-10 text-white tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        {/* Description */}
        <p className="text-lg mb-12 text-gray-300 max-w-xl mx-auto">
          A quick look at the technologies, frameworks, and coursework that define my technical expertise.
        </p>
        
        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Skill Card 1: Languages */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-xl flex items-center justify-start space-x-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CheckCircleOutlined className="text-4xl text-green-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
              <p className="text-gray-600">C/C++, Java, HTML, CSS, JavaScript</p>
            </div>
          </motion.div>
          
          {/* Skill Card 2: Technologies/Frameworks */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-xl flex items-center justify-start space-x-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CodeOutlined className="text-4xl text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Technologies/Frameworks</h3>
              <p className="text-gray-600">React, Node.js, Git, GitHub, Ubuntu</p>
            </div>
          </motion.div>

          {/* Skill Card 3: Skills */}
          <motion.div 
            className="p-8 bg-yellow-50 shadow-lg rounded-xl flex items-center justify-start space-x-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <CloudOutlined className="text-4xl text-yellow-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
              <p className="text-gray-600">Data Structures, Problem-Solving, Responsive Web Design</p>
            </div>
          </motion.div>

          {/* Skill Card 4: Coursework */}
          <motion.div 
            className="p-8 bg-white shadow-lg rounded-xl flex items-center justify-start space-x-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <BookOutlined className="text-4xl text-red-500" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Coursework</h3>
              <p className="text-gray-600">Operating Systems, OOP, Computer Networks, DBMS</p>
            </div>
          </motion.div>
        </div>
        
        {/* Skills chart */}
        <div className="mt-16">
          <SkillsChart />
        </div>
      </div>
    </section>
  );
};

export default Skills;
