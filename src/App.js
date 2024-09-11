// src/App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home'; // Import Home component
import ResumeLink from './components/ResumeLink'; // Import ResumeLink component
import { motion } from 'framer-motion';
import './App.css'; // Ensure you import your global CSS if needed

const App = () => {
  // Initialize state with local storage value or default to null
  const [currentSection, setCurrentSection] = useState(() => {
    return localStorage.getItem('currentSection') || null;
  });

  // Update local storage whenever currentSection changes
  useEffect(() => {
    localStorage.setItem('currentSection', currentSection);
  }, [currentSection]);

  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const getBackgroundClass = () => {
    switch (currentSection) {
      case 'about':
        return 'bg-blue-100';
      case 'skills':
        return 'bg-green-100';
      case 'projects':
        return 'bg-yellow-100';
      case 'contact':
        return 'bg-purple-100';
      default:
        return 'bg-cover bg-center bg-no-repeat';
    }
  };

  return (
    <div className="App">
      <Header onSectionChange={handleSectionChange} />
      
      {/* Background image and content */}
      <div className={`min-h-screen ${getBackgroundClass()} relative`}>
        {!currentSection && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/assets/img.jpg)' }}
          >
            <div className="flex justify-center items-center h-screen text-white">
              <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            </div>
          </div>
        )}
        
        <div className="relative z-10">
          {currentSection === 'home' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <Home />
            </motion.div>
          )}
          {currentSection === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <About />
            </motion.div>
          )}
          {currentSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <Skills />
            </motion.div>
          )}
          {currentSection === 'projects' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <Projects />
            </motion.div>
          )}
          {currentSection === 'contact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <Contact />
            </motion.div>
          )}
          {currentSection === 'resume-link' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <ResumeLink />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
