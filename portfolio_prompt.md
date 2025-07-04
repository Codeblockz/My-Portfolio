# Portfolio Website Development Prompt

## Project Overview
Create a professional portfolio website for a software developer and AI engineer. The primary goal is to showcase work and attract potential employers. The site should be built with React, deployed on GitHub Pages, and optimized for professional presentation.

## Target Audience
- Potential employers in software development and AI engineering
- Hiring managers and technical recruiters
- Industry professionals and collaborators

## Technical Requirements

### Core Technologies
- **Frontend**: React with HTML/CSS
- **Styling**: Tailwind CSS (recommended) or CSS modules
- **Content Management**: MDX (Markdown + JSX) or JSON/Markdown files for content
- **Deployment**: GitHub Pages
- **Email Service**: Formspree or EmailJS for contact form functionality
- **Responsive Design**: Mobile-first approach, fully responsive across all devices

### Site Structure & Sections

#### 1. Header/Navigation
- Clean, professional navigation bar
- Logo/name on the left
- Navigation links: Home, Projects, Skills, Blog, Contact
- Dark/light mode toggle
- Mobile hamburger menu for responsive design

#### 2. Hero Section (Landing)
- Professional name and title
- Brief value proposition (2-3 sentences)
- Call-to-action buttons (View Projects, Contact Me)
- Professional photo (placeholder initially)
- Clean, modern design with subtle animations

#### 3. Projects Section
**Structure:**
- Top 3 featured projects prominently displayed
- "Show All Projects" toggle/button to reveal complete portfolio
- Project categories:
  - Currently Working On
  - Completed Projects
  - Paused/On-Hold Projects

**Each Project Should Include:**
- Project title and brief description
- Technologies used (as tags/badges)
- Project status indicator
- Links to GitHub repo and live demo (if applicable)
- Thumbnail/screenshot
- **Project Log**: Chronological development journal with:
  - Date-stamped entries
  - Progress updates
  - Challenges faced and solutions implemented
  - Key milestones achieved
  - Lessons learned

#### 4. Skills Section
**Categories:**
- Programming Languages
- Frameworks & Libraries
- AI/ML Tools & Technologies
- Databases
- DevOps & Tools
- Cloud Platforms

**Display Format:**
- Organized in cards or sections by category
- Skill level indicators (optional)
- Icons for visual appeal
- Clean, scannable layout

#### 5. Blog Section
**Organization:**
- **Categories**: Technical Tutorials, AI/ML Insights, Project Retrospectives, Industry Thoughts
- **Features**: Search functionality, category filtering, chronological ordering
- **Blog Post Structure**: Title, date, category tags, excerpt, read time estimate
- **Individual Posts**: Full MDX support for code highlighting and technical content

#### 6. Resume Section
- Brief professional summary
- Key achievements highlighted
- **Downloadable PDF**: Button to download full resume
- Contact information clearly displayed

#### 7. Contact Section
- **Working Contact Form** with fields:
  - Name
  - Email
  - Subject
  - Message
  - Submit button
- Form should send emails using Formspree or EmailJS
- Alternative contact methods (LinkedIn, GitHub, email)
- Professional contact information

### Design Requirements

#### Visual Design
- **Theme**: Professional, clean, modern
- **Color Scheme**: Professional palette with dark/light mode support
- **Typography**: Clean, readable fonts suitable for technical content
- **Layout**: Grid-based, well-structured, plenty of white space
- **Icons**: Consistent icon set for technologies, social links, etc.

#### User Experience
- Fast loading times
- Intuitive navigation
- Accessible design (WCAG compliant)
- SEO optimized
- Clean URLs and proper meta tags

### Content Requirements

#### Placeholder Content Needed
- **Personal Information**: Name, professional title, brief bio
- **Project Entries**: At least 6 sample projects with realistic details
- **Blog Posts**: 3-4 sample blog posts with technical content
- **Skills Lists**: Comprehensive but realistic skill sets
- **Resume Content**: Professional summary, experience, education
- **Contact Information**: Placeholder email and social links

#### Project Log Examples
Create sample project logs showing:
- Initial project setup and planning
- Development milestones
- Problem-solving entries
- Testing and deployment updates
- Post-launch reflections

### Technical Implementation Details

#### File Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects/
│   ├── Skills.jsx
│   ├── Blog/
│   ├── Contact.jsx
│   └── Footer.jsx
├── content/
│   ├── projects/
│   ├── blog/
│   └── resume/
├── styles/
└── utils/
```

#### Key Features to Implement
- Responsive design with mobile-first approach
- Fast loading and optimized images
- Code syntax highlighting for technical blog posts
- Project filtering and search functionality
- Contact form with validation and email integration
- Resume PDF generation or upload functionality
- SEO optimization with proper meta tags
- Analytics integration (Google Analytics recommended)

### Performance & Optimization
- Lazy loading for images
- Code splitting for optimal bundle sizes
- Optimized for Core Web Vitals
- Proper caching strategies
- Compressed assets

### Deployment Considerations
- GitHub Pages compatible build process
- Custom domain setup instructions
- CI/CD pipeline for automated deployments
- Environment variable management for API keys

## Success Criteria
The completed portfolio should:
1. Load quickly and work seamlessly on all devices
2. Effectively showcase technical skills and project experience
3. Provide easy navigation and excellent user experience
4. Successfully send emails through the contact form
5. Present a professional image that attracts potential employers
6. Be easily maintainable and updatable with new content

## Additional Notes
- Use semantic HTML for accessibility
- Implement proper error handling
- Include loading states for dynamic content
- Add hover effects and subtle animations for polish
- Ensure all links work and external links open in new tabs
- Include a 404 page for better user experience

Create a complete, production-ready portfolio website that effectively showcases software development and AI engineering expertise while maintaining professional standards and optimal user experience.