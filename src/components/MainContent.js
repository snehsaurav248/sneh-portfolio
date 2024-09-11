import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header'; // Import Header
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home'; // Import Home
import ResumeLink from './ResumeLink'; // Import ResumeLink

const MainContent = ({ currentSection, onSectionChange }) => {
  return (
    <div className="relative min-h-screen">
      {/* Include Header at the top */}
      <Header onSectionChange={onSectionChange} />

      {/* Show Home component when no section is selected */}
      {!currentSection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center mt-16" // Adjust margin for header
        >
          <Home />
        </motion.div>
      )}

      {/* Show sections with their respective background images */}
      {currentSection === 'about' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center mt-16" // Adjust margin for header
        >
          <About />
        </motion.div>
      )}
      {currentSection === 'skills' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center mt-16" // Adjust margin for header
        >
          <Skills />
        </motion.div>
      )}
      {currentSection === 'projects' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center mt-16" // Adjust margin for header
        >
          <Projects />
        </motion.div>
      )}
      {currentSection === 'contact' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center mt-16" // Adjust margin for header
        >
          <Contact />
        </motion.div>
      )}
      {currentSection === 'resume-link' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center mt-16" // Adjust margin for header
        >
          <ResumeLink />
        </motion.div>
      )}
    </div>
  );
};

export default MainContent;
