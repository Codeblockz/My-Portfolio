import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills';
import BlogList from './components/Blog/BlogList';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPostPage from './components/Blog/BlogPostPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ProjectList />
                  <Skills />
                  <BlogList />
                  <Resume />
                  <Contact />
                </>
              } />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
