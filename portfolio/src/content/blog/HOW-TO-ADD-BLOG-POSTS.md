# How to Add New Blog Posts

This guide shows you how to easily add new blog posts to your portfolio using the file-based content system.

## Quick Start (2-Step Process)

### Step 1: Create Your Markdown File
Create a new `.md` file in `portfolio/src/content/blog/posts/` with your content:

```bash
touch portfolio/src/content/blog/posts/my-awesome-post.md
```

Write your blog post in standard markdown:

```markdown
# My Awesome Blog Post Title

A compelling introduction to hook your readers...

## Section 1

Your content here with **bold text**, *italic text*, and code blocks:

```javascript
function hello() {
  console.log("Hello, world!");
}
```

## Section 2

More content...
```

### Step 2: Add Metadata Entry
Edit `portfolio/src/content/blog/blogData.js` and add a new entry to the `blogPosts` array:

```javascript
{
  id: 6, // Next available ID (current highest is 5)
  title: "My Awesome Blog Post Title",
  slug: "my-awesome-post", // URL-friendly version
  date: "2024-02-01", // Publication date (YYYY-MM-DD)
  category: "Technical Tutorial", // Choose from existing categories
  readTime: "7 min read",
  excerpt: "Brief description of what this post covers...",
  contentFile: "my-awesome-post.md", // Your markdown filename
  tags: ["JavaScript", "Tutorial", "Web Development"], // Relevant tags
  featured: false, // Set to true to feature on homepage
  author: "Ryan",
  published: true // Set to false for drafts
}
```

### Step 3: Add Content to Content Loader
Edit `portfolio/src/utils/contentLoader.js` and add your content to the `hardcodedContent` object:

```javascript
const hardcodedContent = {
  // ... existing content
  'my-awesome-post.md': `# My Awesome Blog Post Title

Your complete blog post content here...

## Section 1

Content with **formatting** and code:

\`\`\`javascript
function example() {
  return "Hello World";
}
\`\`\`

More content here...`,
  // ... other content
};
```

**That's it!** Your blog post will automatically appear on your website.

## Available Categories

Choose from these existing categories (or add new ones):

- **"Technical Tutorial"** - Blue badge
- **"AI/ML Insights"** - Green badge  
- **"Project Retrospective"** - Purple badge
- **"Industry Thoughts"** - Orange badge

## Adding New Categories

To add a new category, update the `blogCategories` object in `blogData.js`:

```javascript
export const blogCategories = {
  // ... existing categories
  "Your New Category": {
    color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    description: "Description of your new category"
  }
};
```

## Markdown Features Supported

Your blog posts support:

### Code Blocks with Syntax Highlighting
```javascript
function example() {
  return "Syntax highlighting works!";
}
```

### Lists
- Bullet points
- **Bold text**
- *Italic text*

### Tables
| Feature | Supported |
|---------|-----------|
| Headers | ✅ |
| Code blocks | ✅ |
| Images | ✅ |

### Links
[External links](https://example.com) work great!

## Tips for Great Blog Posts

1. **Write engaging titles** - They appear in search results
2. **Use descriptive excerpts** - Help readers decide if they want to read more
3. **Choose relevant tags** - Improve discoverability
4. **Estimate read time accurately** - Use ~200 words per minute
5. **Use code blocks** - Technical content shines with proper formatting

## File Organization

```
portfolio/src/content/blog/
├── blogData.js                    # Post metadata
├── HOW-TO-ADD-BLOG-POSTS.md      # This guide
└── posts/                         # All markdown files go here
    ├── existing-post.md
    └── your-new-post.md           # Your new blog post
```

## Example: Complete Blog Post

Here's a complete example:

**File: `portfolio/src/content/blog/posts/docker-basics.md`**
```markdown
# Docker Basics for Web Developers

Learn containerization fundamentals and how Docker can streamline your development workflow.

## What is Docker?

Docker is a containerization platform that allows you to package applications...

## Getting Started

```bash
# Install Docker
# Run your first container
docker run hello-world
```

## Benefits

- Consistent environments
- Easy deployment
- Isolation and security

Perfect for modern web development!
```

**Entry in `blogData.js`:**
```javascript
{
  id: 5,
  title: "Docker Basics for Web Developers",
  slug: "docker-basics",
  date: "2024-02-15",
  category: "Technical Tutorial",
  readTime: "5 min read",
  excerpt: "Learn containerization fundamentals and how Docker can streamline your development workflow.",
  contentFile: "docker-basics.md",
  tags: ["Docker", "DevOps", "Containers", "Web Development"],
  featured: true,
  author: "Ryan",
  published: true
}
```

## Publishing Workflow

1. **Draft**: Set `published: false` while writing
2. **Review**: Check your post locally
3. **Publish**: Set `published: true` to make it live
4. **Feature**: Set `featured: true` for homepage display

## Need Help?

- Check existing blog posts for examples
- Use the same markdown syntax as GitHub
- Test locally before publishing
- Keep file names URL-friendly (lowercase, dashes)

Happy blogging! 🚀
