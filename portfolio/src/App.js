import React, { Suspense } from 'react';
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
import ScrollToTop from './components/ScrollToTop';

// Lazy load components that aren't needed immediately
const BlogPostPage = React.lazy(() => import('./components/Blog/BlogPostPage'));

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
              <Route path="/blog/:slug" element={
                <Suspense fallback={
                  <div className="py-20 bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto px-4">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-300">Loading blog post...</p>
                      </div>
                    </div>
                  </div>
                }>
                  <BlogPostPage />
                </Suspense>
              } />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
