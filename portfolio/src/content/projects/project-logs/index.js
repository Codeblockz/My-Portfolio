// Project Log Index - Import all markdown files for reliable loading
// Note: Create React App doesn't support direct markdown imports as text by default
// We'll use a different approach - fetch the files from the public directory

export const projectLogs = {
  'portfolio-website-log.md': async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL || ''}/project-logs/portfolio-website-log.md`);
      if (response.ok) {
        return await response.text();
      }
      throw new Error('File not found');
    } catch (error) {
      throw error;
    }
  },
  'ai-chat-application-log.md': async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL || ''}/project-logs/ai-chat-application-log.md`);
      if (response.ok) {
        return await response.text();
      }
      throw new Error('File not found');
    } catch (error) {
      throw error;
    }
  },
  'task-management-system-log.md': async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL || ''}/project-logs/task-management-system-log.md`);
      if (response.ok) {
        return await response.text();
      }
      throw new Error('File not found');
    } catch (error) {
      throw error;
    }
  }
};
