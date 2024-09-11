// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ onSectionChange }) => {
  const handleClick = (sectionId) => {
    onSectionChange(sectionId);
    localStorage.setItem('currentSection', sectionId); // Save section to localStorage
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4 h-16">
        <div className="text-xl font-extrabold tracking-wide">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleClick('home')}
            className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
          >
            Sneh Saurav
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleClick('home')}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => handleClick('about')}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => handleClick('skills')}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => handleClick('projects')}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => handleClick('contact')}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
