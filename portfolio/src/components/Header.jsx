import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Skills
            </a>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Blog
            </a>
            <a href="#resume" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Resume
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open menu</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isMobileMenuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#home" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
              <a 
                href="#blog" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Blog
              </a>
              <a 
                href="#resume" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
