import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import { handleSmoothScroll, getActiveSection, debounce } from '../utils/smoothScroll';

const sectionIds = ['home', 'projects', 'skills', 'blog', 'resume', 'contact'];

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    closeMobileMenu();
    
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, use smooth scrolling
      handleSmoothScroll(event, sectionId);
    } else {
      // We're on a different page, navigate to home first
      navigate('/');
      
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentSection = getActiveSection(sectionIds);
      setActiveSection(currentSection);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    
    // Set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClassName = (sectionId) => {
    const baseClasses = "transition-colors duration-200 font-medium";
    const activeClasses = "text-blue-600 dark:text-blue-400";
    const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400";
    
    return `${baseClasses} ${activeSection === sectionId ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={getLinkClassName('home')}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className={getLinkClassName('projects')}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={getLinkClassName('skills')}
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
            <a 
              href="#blog" 
              className={getLinkClassName('blog')}
              onClick={(e) => handleNavClick(e, 'blog')}
            >
              Blog
            </a>
            <a 
              href="#resume" 
              className={getLinkClassName('resume')}
              onClick={(e) => handleNavClick(e, 'resume')}
            >
              Resume
            </a>
            <a 
              href="#contact" 
              className={getLinkClassName('contact')}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
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
                className={getLinkClassName('home')}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className={getLinkClassName('projects')}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className={getLinkClassName('skills')}
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </a>
              <a 
                href="#blog" 
                className={getLinkClassName('blog')}
                onClick={(e) => handleNavClick(e, 'blog')}
              >
                Blog
              </a>
              <a 
                href="#resume" 
                className={getLinkClassName('resume')}
                onClick={(e) => handleNavClick(e, 'resume')}
              >
                Resume
              </a>
              <a 
                href="#contact" 
                className={getLinkClassName('contact')}
                onClick={(e) => handleNavClick(e, 'contact')}
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
