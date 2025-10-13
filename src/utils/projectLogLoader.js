// Project Log Content Loader
// Loads project development logs from markdown files in the public directory

import { projectLogs } from '../content/projects/project-logs/index';

export const loadProjectLog = async (logFileName) => {
  try {
    console.log(`Attempting to load project log: ${logFileName}`);
    
    // Check if the log file exists in our index
    if (!projectLogs[logFileName]) {
      throw new Error(`Project log '${logFileName}' not found in index. Available logs: ${Object.keys(projectLogs).join(', ')}`);
    }
    
    console.log(`Found fetcher function for ${logFileName}, attempting to load...`);
    
    // Load content from public directory
    const content = await projectLogs[logFileName]();
    console.log(`Successfully loaded ${logFileName} from public directory`);
    return content;
    
  } catch (error) {
    console.error(`Error loading project log '${logFileName}':`, error);
    
    // Provide helpful error message
    const availableLogs = Object.keys(projectLogs);
    throw new Error(
      `Failed to load project log '${logFileName}'. ` +
      `Available logs: ${availableLogs.join(', ')}. ` +
      `Error: ${error.message}`
    );
  }
};

const projectLogLoader = {
  loadProjectLog
};

export default projectLogLoader;
