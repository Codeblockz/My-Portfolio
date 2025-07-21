import React from 'react';
import { handleSmoothScroll } from '../utils/smoothScroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
              <img 
                src="./ryan-headshot.jpeg" 
                alt="Ryan Ellis - AI Engineer & Data Scientist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Hello</span>, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ryan Ellis
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            AI Engineer & Data Scientist
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Aspiring AI Engineer with 3+ years of data science and ML expertise, delivering measurable business impact through innovative solutions. Currently pursuing MS in Artificial Intelligence at Johns Hopkins University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
