// src/App.js

import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import './App.css'; // Ensure you import your global CSS if needed

const App = () => {
  const [currentSection, setCurrentSection] = useState(null);

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
        </div>
      </div>
    </div>
  );
};

export default App;
