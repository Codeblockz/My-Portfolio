// Blog post metadata and configuration
export const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    slug: "building-modern-web-apps",
    date: "2024-01-15",
    category: "Technical Tutorial",
    readTime: "8 min read",
    excerpt: "Learn the fundamentals of React and how to build scalable web applications with modern JavaScript frameworks.",
    contentFile: "building-modern-web-apps.md",
    tags: ["React", "JavaScript", "Web Development", "Frontend"],
    featured: true,
    author: "Ryan",
    published: true
  },
  {
    id: 2,
    title: "The Future of AI in Web Development",
    slug: "future-of-ai",
    date: "2024-01-10",
    category: "AI/ML Insights",
    readTime: "6 min read",
    excerpt: "Exploring how artificial intelligence is transforming the way we build and interact with web applications.",
    contentFile: "future-of-ai.md",
    tags: ["AI", "Machine Learning", "Web Development", "Technology"],
    featured: true,
    author: "Ryan",
    published: true
  },
  {
    id: 3,
    title: "Project Retrospective: Chat Application",
    slug: "chat-app-retrospective",
    date: "2024-01-05",
    category: "Project Retrospective",
    readTime: "10 min read",
    excerpt: "A detailed look at the challenges faced and lessons learned while building a real-time chat application.",
    contentFile: "chat-app-retrospective.md",
    tags: ["Project Management", "Real-time", "WebSocket", "Retrospective"],
    featured: false,
    author: "Ryan",
    published: true
  },
  {
    id: 4,
    title: "Getting Started with Node.js Development",
    slug: "getting-started-with-nodejs",
    date: "2024-01-25",
    category: "Technical Tutorial",
    readTime: "15 min read",
    excerpt: "A comprehensive guide to beginning your journey with server-side JavaScript development using Node.js.",
    contentFile: "getting-started-with-nodejs.md",
    tags: ["Node.js", "JavaScript", "Backend", "Express", "Tutorial"],
    featured: true,
    author: "Ryan",
    published: true
  },
    {
    id: 5,
    title: "In-Depth Chat Application Analysis: Lessons from Production",
    slug: "stuff",
    date: "2024-01-25",
    category: "Project Retrospective",
    readTime: "25 min read",
    excerpt: "A comprehensive technical deep-dive into building a real-time chat application, covering architecture decisions, performance optimization, testing strategies, and production lessons learned.",
    contentFile: "stuff.md",
    tags: ["Project Management", "Real-time", "WebSocket", "Node.js", "React", "Retrospective", "Performance", "Testing"],
    featured: true,
    author: "Ryan",
    published: true
  }
];

// Category configuration
export const blogCategories = {
  "Technical Tutorial": {
    color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    description: "Step-by-step guides and technical tutorials"
  },
  "AI/ML Insights": {
    color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    description: "Artificial Intelligence and Machine Learning insights"
  },
  "Project Retrospective": {
    color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    description: "Lessons learned from completed projects"
  },
  "Industry Thoughts": {
    color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
    description: "Thoughts on industry trends and developments"
  }
};

// Helper functions
export const getBlogPosts = () => blogPosts.filter(post => post.published);
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured && post.published);
export const getBlogPost = (id) => blogPosts.find(post => post.id === parseInt(id));
export const getBlogPostBySlug = (slug) => blogPosts.find(post => post.slug === slug);
export const getPostsByCategory = (category) => blogPosts.filter(post => post.category === category && post.published);
export const getAllCategories = () => [...new Set(blogPosts.map(post => post.category))];
export const getRelatedPosts = (currentPost, limit = 3) => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.published && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};
