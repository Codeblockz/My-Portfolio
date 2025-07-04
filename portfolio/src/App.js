import React from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills';
import BlogList from './components/Blog/BlogList';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <ProjectList />
          <Skills />
          <BlogList />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
