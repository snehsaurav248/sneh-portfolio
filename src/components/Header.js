// src/components/Header.js
import React from 'react';

const Header = ({ onSectionChange }) => {
  return (
    <header 
      className="bg-blue-600 text-white py-4 fixed top-0 w-full z-50 shadow-md"
      style={{ backgroundImage: 'url(/assets/de-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          My Portfolio
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-12">
          <span
            onClick={() => onSectionChange('about')}
            className="cursor-pointer hover:text-gray-300 transition-colors text-lg font-bold"
          >
            About
          </span>
          <span
            onClick={() => onSectionChange('skills')}
            className="cursor-pointer hover:text-gray-300 transition-colors text-lg font-bold"
          >
            Skills
          </span>
          <span
            onClick={() => onSectionChange('projects')}
            className="cursor-pointer hover:text-gray-300 transition-colors text-lg font-bold"
          >
            Projects
          </span>
          <span
            onClick={() => onSectionChange('contact')}
            className="cursor-pointer hover:text-gray-300 transition-colors text-lg font-bold"
          >
            Contact
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
