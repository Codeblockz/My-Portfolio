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

// Blog post content mapping from src folder files
const getHardcodedContent = (contentFile) => {
  const hardcodedContent = {
    'building-modern-web-apps.md': `# Building Modern Web Applications with React

Learn the fundamentals of React and how to build scalable web applications with modern JavaScript frameworks.

In this post, we'll explore the key concepts that make React a powerful tool for building user interfaces. We'll cover component-based architecture, state management, and best practices for creating maintainable code.

## Why React?

React has revolutionized how we build user interfaces by introducing a component-based architecture that makes code more reusable, maintainable, and easier to reason about. Let's dive into the core concepts that make React so powerful.

### Component-Based Architecture

React applications are built using components - self-contained pieces of code that manage their own state and render a part of the user interface. This approach offers several advantages:

- **Reusability**: Components can be reused across different parts of your application
- **Maintainability**: Each component has a single responsibility, making it easier to debug and modify
- **Testability**: Components can be tested in isolation
- **Scalability**: Large applications can be broken down into smaller, manageable pieces

\`\`\`javascript
// Example of a simple React component
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
\`\`\`

### State Management

State is what makes React applications interactive. It represents data that can change over time and affects what the user sees on the screen.

React continues to evolve with new features like Concurrent Mode and Suspense, making it an excellent choice for modern web development.`,

    'future-of-ai.md': `# The Future of AI in Web Development

Exploring how artificial intelligence is transforming the way we build and interact with web applications.

Artificial Intelligence is no longer a futuristic concept—it's here, and it's revolutionizing web development in ways we couldn't have imagined just a few years ago. From intelligent code completion to automated testing, AI is becoming an integral part of the modern developer's toolkit.

## AI-Powered Development Tools

### Code Generation and Completion

AI-powered code assistants like GitHub Copilot, Tabnine, and CodeWhisperer are changing how we write code. These tools can:

- **Auto-complete entire functions** based on comments or function signatures
- **Generate boilerplate code** for common patterns
- **Suggest optimizations** for existing code
- **Translate code** between different programming languages

The AI revolution in web development is just beginning. Those who adapt and integrate these technologies thoughtfully will be well-positioned to build the next generation of web applications that are not just functional, but truly intelligent and responsive to user needs.`,

    'chat-app-retrospective.md': `# Project Retrospective: Chat Application

A detailed look at the challenges faced and lessons learned while building a real-time chat application.

Building a real-time chat application seemed straightforward at first—just send messages back and forth, right? However, as I dove deeper into the project, I discovered the complexity that lies beneath the surface of what appears to be a simple feature. This retrospective covers the journey, challenges, solutions, and valuable lessons learned during the development process.

## Project Overview

### The Vision

The goal was to build a modern, real-time chat application with the following features:
- **Real-time messaging** with instant delivery
- **User authentication** and profile management
- **Multiple chat rooms** with different topics
- **File sharing** capabilities
- **Message history** and search functionality
- **Responsive design** for mobile and desktop
- **Typing indicators** and read receipts

### Technology Stack

After evaluating various options, I settled on:
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Real-time Communication**: Socket.io
- **Authentication**: JWT with refresh tokens
- **File Storage**: AWS S3
- **Deployment**: Docker containers on AWS ECS

Building real-time applications is challenging but incredibly rewarding. The instant feedback and interaction create engaging user experiences that static applications simply can't match.`,

    'getting-started-with-nodejs.md': `# Getting Started with Node.js Development

A comprehensive guide to beginning your journey with server-side JavaScript development using Node.js.

Node.js has revolutionized how we think about JavaScript, taking it beyond the browser and into the realm of server-side development. Whether you're building APIs, web applications, or command-line tools, Node.js provides a powerful and flexible platform.

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server, enabling full-stack development with a single programming language.

### Key Features

- **Asynchronous and Event-Driven**: Non-blocking I/O operations
- **Fast Execution**: Built on Google's V8 engine
- **NPM Ecosystem**: Massive package repository
- **Cross-Platform**: Runs on Windows, Mac, and Linux

## Getting Started

\`\`\`bash
# Check if Node.js is installed
node --version

# Create a new project
mkdir my-node-app
cd my-node-app
npm init -y
\`\`\`

## Building Your First Server

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Node.js!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

Node.js opens up a world of possibilities for JavaScript developers. With its vast ecosystem and active community, you'll find tools and libraries for almost any use case.`,

    'stuff.md': `# Project Retrospective: Chat Application

A detailed look at the challenges faced and lessons learned while building a real-time chat application.

Building a real-time chat application seemed straightforward at first—just send messages back and forth, right? However, as I dove deeper into the project, I discovered the complexity that lies beneath the surface of what appears to be a simple feature. This retrospective covers the journey, challenges, solutions, and valuable lessons learned during the development process.

## Project Overview

### The Vision

The goal was to build a modern, real-time chat application with the following features:
- **Real-time messaging** with instant delivery
- **User authentication** and profile management
- **Multiple chat rooms** with different topics
- **File sharing** capabilities
- **Message history** and search functionality
- **Responsive design** for mobile and desktop
- **Typing indicators** and read receipts

### Technology Stack

After evaluating various options, I settled on:
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Real-time Communication**: Socket.io
- **Authentication**: JWT with refresh tokens
- **File Storage**: AWS S3
- **Deployment**: Docker containers on AWS ECS

## Phase 1: Foundation and Basic Messaging

### Initial Implementation

The first phase focused on establishing the core messaging functionality:

\`\`\`javascript
// Basic Socket.io server setup
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', {
      userId: socket.userId,
      username: socket.username
    });
  });
  
  socket.on('send-message', (data) => {
    const message = {
      id: generateMessageId(),
      content: data.content,
      userId: socket.userId,
      username: socket.username,
      timestamp: new Date(),
      roomId: data.roomId
    };
    
    // Save to database
    saveMessage(message);
    
    // Broadcast to room
    io.to(data.roomId).emit('new-message', message);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
\`\`\`

### Early Challenges

**Challenge 1: Message Ordering**
Messages sometimes arrived out of order, especially during high-traffic periods.

**Solution**: Implemented a message sequencing system to ensure proper ordering.

**Challenge 2: Connection Management**
Users would disconnect and reconnect frequently, causing duplicate connections.

**Solution**: Implemented proper connection lifecycle management with user session tracking.

## Key Lessons Learned

1. **Real-time architecture** is fundamentally different from traditional request-response
2. **State synchronization** becomes critical in distributed systems
3. **Error handling** must account for network interruptions
4. **Testing strategies** for real-time applications require special consideration

## What I Would Do Differently

- **Microservices approach** for better scalability
- **Event-driven architecture** for loose coupling
- **Comprehensive testing** strategy from the beginning
- **Better monitoring** and observability tools

The experience was invaluable in understanding how to build scalable, performant, and reliable real-time applications.

The key takeaway: **Start simple, iterate quickly, and always prioritize user experience over technical complexity**. The most elegant technical solution means nothing if users can't reliably send and receive messages.

---

*Building real-time applications is challenging but incredibly rewarding. The instant feedback and interaction create engaging user experiences that static applications simply can't match.*`
  };

  return hardcodedContent[contentFile] || `# Content Not Found\n\nThe requested blog post content could not be loaded.`;
};

// Dynamic markdown content loading
export const loadMarkdownContent = async (contentFile) => {
  console.log(`Loading content for: ${contentFile}`);
  
  const content = getHardcodedContent(contentFile);
  console.log(`Successfully loaded content for: ${contentFile}`);
  return content;
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
