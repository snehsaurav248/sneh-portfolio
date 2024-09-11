import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const MainContent = ({ currentSection }) => {
  return (
    <div className="relative min-h-screen">
      {/* Show sections with their respective background images */}
      {currentSection === 'about' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center"
        >
          <About />
        </motion.div>
      )}
      {currentSection === 'skills' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center"
        >
          <Skills />
        </motion.div>
      )}
      {currentSection === 'projects' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center"
        >
          <Projects />
        </motion.div>
      )}
      {currentSection === 'contact' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center"
        >
          <Contact />
        </motion.div>
      )}
    </div>
  );
};

export default MainContent;
