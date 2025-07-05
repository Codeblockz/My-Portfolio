import { 
  blogPosts, 
  blogCategories, 
  getBlogPosts, 
  getBlogPost, 
  getBlogPostBySlug, 
  getPostsByCategory,
  getAllCategories,
  getRelatedPosts,
  getFeaturedPosts
} from '../content/blog/blogData';

// Dynamic markdown content loading
export const loadMarkdownContent = async (contentFile) => {
  // For now, use hardcoded content to ensure reliability
  // In a production environment, this could be replaced with dynamic loading
  return getHardcodedContent(contentFile);
};

// Fallback content function
const getHardcodedContent = (contentFile) => {
  const hardcodedContent = {
    'building-modern-web-apps.md': `# Building Modern Web Applications with React

Learn the fundamentals of React and how to build scalable web applications with modern JavaScript frameworks.

In this comprehensive guide, we'll explore the key concepts that make React a powerful tool for building user interfaces. We'll cover component-based architecture, state management, and best practices for creating maintainable code.

## Why React?

React has revolutionized how we build user interfaces by introducing a component-based architecture that makes code more reusable, maintainable, and easier to reason about.

### Key Benefits

- **Component Reusability**: Build once, use everywhere
- **Virtual DOM**: Optimized performance through efficient updates
- **Large Ecosystem**: Extensive library and tool support
- **Strong Community**: Active development and support

## Getting Started

\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to modern web development</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

## Best Practices

1. **Keep components small and focused**
2. **Use functional components with hooks**
3. **Implement proper error boundaries**
4. **Optimize performance with React.memo**
5. **Follow consistent naming conventions**

React continues to evolve with new features like Concurrent Mode and Suspense, making it an excellent choice for modern web development.`,

    'future-of-ai.md': `# The Future of AI in Web Development

Exploring how artificial intelligence is transforming the way we build and interact with web applications.

Artificial Intelligence is no longer a futuristic concept—it's here, and it's revolutionizing web development in ways we couldn't have imagined just a few years ago.

## AI-Powered Development Tools

### Code Generation and Completion

AI-powered code assistants like GitHub Copilot are changing how we write code:

- **Auto-complete entire functions** based on comments
- **Generate boilerplate code** for common patterns
- **Suggest optimizations** for existing code
- **Translate code** between different programming languages

\`\`\`javascript
// AI can generate complex React components from simple comments
// Create a responsive navigation with mobile menu
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-blue-600 text-white">
      {/* AI-generated navigation code */}
    </nav>
  );
}
\`\`\`

## AI-Enhanced User Experiences

### Personalization

AI enables websites to adapt to individual users through:

- **Content recommendations** based on user behavior
- **Personalized interfaces** that adapt to user preferences
- **Smart form completion** and validation
- **Intelligent search** with natural language processing

## The Future Landscape

The integration of AI in web development is accelerating, with emerging technologies like:

1. **Automated testing** with AI-generated test cases
2. **Performance optimization** through machine learning
3. **Accessibility improvements** powered by AI
4. **Natural language interfaces** for better user interaction

As developers, we have the opportunity to harness these technologies to create more efficient, personalized, and intelligent web applications.`,

    'chat-app-retrospective.md': `# Project Retrospective: Chat Application

A detailed look at the challenges faced and lessons learned while building a real-time chat application.

Building a real-time chat application seemed straightforward at first—just send messages back and forth, right? However, as I dove deeper into the project, I discovered the complexity that lies beneath the surface.

## Project Overview

The goal was to build a modern, real-time chat application with:

- **Real-time messaging** with instant delivery
- **User authentication** and profile management
- **Multiple chat rooms** with different topics
- **File sharing** capabilities
- **Message history** and search functionality
- **Responsive design** for mobile and desktop

## Technology Stack

After evaluating various options, I settled on:

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Real-time Communication**: Socket.io
- **Authentication**: JWT with refresh tokens

## Key Challenges

### Message Ordering

Messages sometimes arrived out of order, especially during high-traffic periods.

**Solution**: Implemented a message sequencing system to ensure proper ordering.

\`\`\`javascript
class MessageSequencer {
  constructor() {
    this.sequences = new Map();
  }
  
  addMessage(roomId, message) {
    const expectedSequence = this.sequences.get(roomId) + 1;
    message.sequence = expectedSequence;
    // Process messages in order
  }
}
\`\`\`

### Connection Management

Users would disconnect and reconnect frequently, causing duplicate connections.

**Solution**: Implemented proper connection lifecycle management with user session tracking.

## Lessons Learned

1. **Real-time architecture** is fundamentally different from traditional request-response
2. **State synchronization** becomes critical in distributed systems
3. **Error handling** must account for network interruptions
4. **Testing strategies** for real-time applications require special consideration

## What I Would Do Differently

- **Microservices approach** for better scalability
- **Event-driven architecture** for loose coupling
- **Comprehensive testing** strategy from the beginning
- **Better monitoring** and observability tools

The experience was invaluable in understanding how to build scalable, performant, and reliable real-time applications.`
  };

  return hardcodedContent[contentFile] || `# Content Not Found\n\nThe requested blog post content could not be loaded.`;
};

// Blog post utilities
export const getBlogPostWithContent = async (id) => {
  const post = getBlogPost(id);
  if (!post) {
    throw new Error(`Blog post with ID ${id} not found`);
  }
  
  try {
    const content = await loadMarkdownContent(post.contentFile);
    return {
      ...post,
      content
    };
  } catch (error) {
    console.error(`Error loading content for post ${id}:`, error);
    return {
      ...post,
      content: 'Error loading post content',
      error: true
    };
  }
};

export const getBlogPostBySlugWithContent = async (slug) => {
  const post = getBlogPostBySlug(slug);
  if (!post) {
    throw new Error(`Blog post with slug ${slug} not found`);
  }
  
  try {
    const content = await loadMarkdownContent(post.contentFile);
    return {
      ...post,
      content
    };
  } catch (error) {
    console.error(`Error loading content for post ${slug}:`, error);
    return {
      ...post,
      content: 'Error loading post content',
      error: true
    };
  }
};

// Search functionality
export const searchBlogPosts = (query, category = '') => {
  const posts = getBlogPosts();
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm && !category) {
    return posts;
  }
  
  return posts.filter(post => {
    const matchesSearch = !searchTerm || (
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      post.category.toLowerCase().includes(searchTerm)
    );
    
    const matchesCategory = !category || post.category === category;
    
    return matchesSearch && matchesCategory;
  });
};

// Category utilities
export const getCategoryInfo = (categoryName) => {
  return blogCategories[categoryName] || {
    color: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200",
    description: "Blog posts"
  };
};

export const getPostsByTag = (tag) => {
  return getBlogPosts().filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};

// Export all blog data functions for convenience
export {
  blogPosts,
  blogCategories,
  getBlogPosts,
  getBlogPost,
  getBlogPostBySlug,
  getPostsByCategory,
  getAllCategories,
  getRelatedPosts,
  getFeaturedPosts
};
