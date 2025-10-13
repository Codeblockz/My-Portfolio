#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const POSTS_DIR = path.join(__dirname, '../src/content/blog/posts');
const OUTPUT_FILE = path.join(__dirname, '../src/utils/generatedContent.js');

// Function to read all markdown files and generate JavaScript content
function generateBlogContent() {
  console.log('🔄 Generating blog content from markdown files...');
  
  try {
    // Read all markdown files
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    
    console.log(`📝 Found ${files.length} markdown files:`, files);
    
    // Generate the content object
    let contentExports = 'export const markdownContent = {\n';
    
    files.forEach(file => {
      const filePath = path.join(POSTS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Escape backticks and other special characters
      const escapedContent = content
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');
      
      contentExports += `  '${file}': \`${escapedContent}\`,\n`;
    });
    
    contentExports += '};\n\n';
    
    // Add helper function
    contentExports += `
export const getMarkdownContent = (filename) => {
  return markdownContent[filename] || null;
};

export const getAllMarkdownFiles = () => {
  return Object.keys(markdownContent);
};

// Log available content files for debugging
console.log('📚 Available markdown content files:', Object.keys(markdownContent));
`;
    
    // Write the generated file
    fs.writeFileSync(OUTPUT_FILE, contentExports);
    
    console.log('✅ Successfully generated blog content!');
    console.log(`📄 Output file: ${OUTPUT_FILE}`);
    console.log(`📊 Generated content for ${files.length} markdown files`);
    
    return true;
  } catch (error) {
    console.error('❌ Error generating blog content:', error);
    return false;
  }
}

// Run the script
if (require.main === module) {
  const success = generateBlogContent();
  process.exit(success ? 0 : 1);
}

module.exports = generateBlogContent;
