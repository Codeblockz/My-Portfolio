# System Patterns: Architecture and Design Decisions

## Overall Architecture

### Component-Based Design
- **React Components**: Modular, reusable UI components
- **Single Page Application**: Client-side routing and state management
- **Component Hierarchy**: Clear parent-child relationships
- **Props Flow**: Unidirectional data flow pattern

### Application Structure
```
App
├── Header (Navigation)
├── Hero (Landing Section)
├── Projects (Portfolio Showcase)
├── Skills (Technical Capabilities)
├── Blog (Content & Thought Leadership)
├── Resume (Professional Summary)
├── Contact (Communication Hub)
└── Footer (Additional Links)
```

## Core Section Architecture

### 1. Header/Navigation Pattern
- **Fixed Position**: Stays visible during scroll
- **Responsive Menu**: Hamburger menu for mobile
- **Theme Toggle**: Dark/light mode switching
- **Active State**: Current section highlighting
- **Smooth Scrolling**: Anchor navigation to sections

### 2. Hero Section Pattern
- **Above-the-fold**: Critical first impression content
- **Call-to-Action**: Primary and secondary action buttons
- **Visual Hierarchy**: Name, title, value proposition
- **Professional Photo**: Placeholder with proper sizing
- **Subtle Animations**: Engaging but professional motion

### 3. Projects Section Pattern
- **Featured Projects**: Top 3 prominently displayed
- **Progressive Disclosure**: "Show All" toggle functionality
- **Category Organization**: 
  - Currently Working On (Active)
  - Completed Projects (Finished)
  - Paused/On-Hold Projects (Inactive)
- **Project Card Structure**:
  - Title and description
  - Technology tags/badges
  - Status indicators
  - GitHub and demo links
  - Thumbnail/screenshot
  - Project log access

### 4. Skills Section Pattern
- **Categorical Organization**:
  - Programming Languages
  - Frameworks & Libraries
  - AI/ML Tools & Technologies
  - Databases
  - DevOps & Tools
  - Cloud Platforms
- **Visual Representation**: Icons with labels
- **Skill Grouping**: Related technologies clustered
- **Responsive Grid**: Adapts to screen size

### 5. Blog Section Pattern
- **Content Categories**:
  - Technical Tutorials
  - AI/ML Insights
  - Project Retrospectives
  - Industry Thoughts
- **Blog Features**:
  - Search functionality
  - Category filtering
  - Chronological ordering
  - Read time estimates
- **Individual Post Structure**:
  - Title, date, category tags
  - Excerpt for listing
  - Full MDX content with code highlighting

### 6. Resume Section Pattern
- **Professional Summary**: Concise overview
- **Key Achievements**: Bullet-point highlights
- **PDF Download**: Action button for full resume
- **Contact Integration**: Links to contact section
- **Professional Formatting**: Clean, scannable layout

### 7. Contact Section Pattern
- **Working Form**: Functional email integration
- **Form Fields**: Name, Email, Subject, Message
- **Validation**: Client-side validation with feedback
- **Alternative Contacts**: Social and professional links
- **Response Handling**: Success/error state management

## Design Patterns

### Responsive Design Pattern
- **Mobile-First**: Start with mobile constraints
- **Breakpoint Strategy**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **Flexible Layouts**: CSS Grid and Flexbox
- **Touch Optimization**: Proper touch targets

### Theme System Pattern
- **CSS Variables**: Dynamic theme switching
- **Color Schemes**: Professional light/dark themes
- **Consistent Tokens**: Standardized spacing, typography
- **Accessibility**: Proper contrast ratios maintained

### Content Management Pattern
- **MDX Integration**: Markdown with React components
- **Static Generation**: Pre-built content for performance
- **File-based**: Content stored in organized file structure
- **Frontmatter**: Metadata for posts and projects

## Component Relationships

### State Management
- **React State**: Local component state
- **Context API**: Theme and global state
- **Props Drilling**: Minimal, use context where needed
- **Event Handling**: User interactions and form submissions

### Data Flow
- **Content Loading**: Static imports and dynamic loading
- **Form Handling**: Controlled components with validation
- **Navigation**: Scroll-to-section and smooth transitions
- **Theme Switching**: Global state with persistence

## Critical Implementation Paths

### Performance Critical Paths
- **Initial Load**: Hero section and navigation
- **Content Rendering**: Projects and skills sections
- **Form Submission**: Contact form processing
- **Theme Switching**: Instant visual feedback

### User Experience Paths
- **First Visit**: Hero → Projects → Contact
- **Recruiter Flow**: Skills → Projects → Resume → Contact
- **Technical Review**: Projects → Blog → GitHub links
- **Mobile Experience**: Optimized touch interactions

## Technical Patterns

### Component Composition
- **Higher-Order Components**: Reusable functionality
- **Render Props**: Flexible component patterns
- **Custom Hooks**: Shared logic extraction
- **Component Libraries**: Consistent UI patterns

### Code Organization
- **Feature-Based Structure**: Components grouped by functionality
- **Shared Components**: Reusable UI elements
- **Utility Functions**: Helper functions and constants
- **Style Organization**: Component-specific and global styles

### Error Handling
- **Graceful Degradation**: Fallback content
- **Error Boundaries**: React error catching
- **Form Validation**: User-friendly error messages
- **Loading States**: Progress indicators

## Security Patterns

### Input Validation
- **Client-Side**: Immediate user feedback
- **Server-Side**: Backend validation (via form service)
- **Sanitization**: Clean user input
- **CSRF Protection**: Cross-site request forgery prevention

### Content Security
- **Sanitized Markdown**: Safe HTML rendering
- **Link Validation**: External link security
- **Asset Security**: Secure resource loading
- **Environment Variables**: Secure API key management

## Accessibility Patterns

### Navigation Accessibility
- **Keyboard Navigation**: Full keyboard access
- **Skip Links**: Content accessibility shortcuts
- **ARIA Labels**: Screen reader support
- **Focus Management**: Clear focus indicators

### Content Accessibility
- **Semantic HTML**: Proper element usage
- **Alt Text**: Image descriptions
- **Color Independence**: Not relying solely on color
- **Responsive Text**: Scalable font sizes

## Performance Patterns

### Loading Optimization
- **Code Splitting**: Route-based splitting
- **Lazy Loading**: Below-the-fold content
- **Image Optimization**: Responsive images
- **Caching Strategy**: Browser and CDN caching

### Bundle Optimization
- **Tree Shaking**: Unused code removal
- **Minification**: Compressed assets
- **Gzip Compression**: Server-side compression
- **CDN Usage**: Static asset delivery
