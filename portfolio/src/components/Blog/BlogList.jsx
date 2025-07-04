import React from 'react';

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt: "Learn the fundamentals of React and how to build scalable web applications with modern JavaScript frameworks.",
      date: "2024-01-15",
      category: "Technical Tutorial",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build and interact with web applications.",
      date: "2024-01-10",
      category: "AI/ML Insights",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Project Retrospective: Chat Application",
      excerpt: "A detailed look at the challenges faced and lessons learned while building a real-time chat application.",
      date: "2024-01-05",
      category: "Project Retrospective",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development, AI, and technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <a href={`#blog/${post.id}`}>
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <a
                    href={`#blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
