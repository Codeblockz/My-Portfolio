// Resume data loader utility
// Provides robust resume data loading with fallback mechanisms

import resumeData from '../content/resume/resume-data.json';

/**
 * Load resume data from JSON file
 * @returns {Object} Resume data object
 */
export const loadResumeData = () => {
  try {
    if (!resumeData) {
      throw new Error('Resume data not found');
    }
    
    return resumeData;
  } catch (error) {
    console.error('Error loading resume data:', error);
    
    // Fallback data in case of loading issues
    return {
      personalInfo: {
        name: "Ryan A. Ellis",
        email: "ryan.a.ellis.1@gmail.com",
        phone: "(831) - 241 - 1531",
        linkedin: "https://www.linkedin.com/in/ryan-a-ellis/",
        title: "Data Analyst & AI Engineer",
        summary: "Experienced Data Analyst with expertise in AI/ML solutions, statistical analysis, and automation."
      },
      education: [],
      experience: [],
      projects: [],
      skills: {
        programming: [],
        packages: [],
        machineLearning: [],
        frameworks: [],
        certifications: []
      },
      keyAchievements: [],
      coreCompetencies: []
    };
  }
};

/**
 * Get professional summary with formatted text
 * @returns {string} Professional summary
 */
export const getProfessionalSummary = () => {
  const data = loadResumeData();
  return data.personalInfo?.summary || "Professional summary not available.";
};

/**
 * Get key achievements list
 * @returns {Array} Array of achievement strings
 */
export const getKeyAchievements = () => {
  const data = loadResumeData();
  return data.keyAchievements || [];
};

/**
 * Get core competencies list
 * @returns {Array} Array of competency strings
 */
export const getCoreCompetencies = () => {
  const data = loadResumeData();
  return data.coreCompetencies || [];
};

/**
 * Get education information
 * @returns {Array} Array of education objects
 */
export const getEducation = () => {
  const data = loadResumeData();
  return data.education || [];
};

/**
 * Get professional experience
 * @returns {Array} Array of experience objects
 */
export const getExperience = () => {
  const data = loadResumeData();
  return data.experience || [];
};

/**
 * Get project information
 * @returns {Array} Array of project objects
 */
export const getProjects = () => {
  const data = loadResumeData();
  return data.projects || [];
};

/**
 * Get skills organized by category
 * @returns {Object} Skills object with categories
 */
export const getSkills = () => {
  const data = loadResumeData();
  return data.skills || {};
};

/**
 * Get personal/contact information
 * @returns {Object} Personal info object
 */
export const getPersonalInfo = () => {
  const data = loadResumeData();
  return data.personalInfo || {};
};

/**
 * Get formatted contact information for display
 * @returns {Object} Formatted contact info
 */
export const getContactInfo = () => {
  const personalInfo = getPersonalInfo();
  return {
    name: personalInfo.name || "Ryan A. Ellis",
    title: personalInfo.title || "Data Analyst & AI Engineer",
    email: personalInfo.email || "ryan.a.ellis.1@gmail.com",
    phone: personalInfo.phone || "(831) - 241 - 1531",
    linkedin: personalInfo.linkedin || "https://www.linkedin.com/in/ryan-a-ellis/"
  };
};

export default loadResumeData;
