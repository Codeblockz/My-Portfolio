import React from 'react';
import { 
  getProfessionalSummary, 
  getKeyAchievements, 
  getCoreCompetencies,
  getEducation,
  getExperience,
  getProjects,
  getSkills,
  getPersonalInfo
} from '../utils/resumeLoader';

const Resume = () => {
  const professionalSummary = getProfessionalSummary();
  const keyAchievements = getKeyAchievements();
  const coreCompetencies = getCoreCompetencies();
  const education = getEducation();
  const experience = getExperience();
  const projects = getProjects();
  const skills = getSkills();
  const personalInfo = getPersonalInfo();

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {personalInfo.title} with proven expertise in AI/ML solutions and data analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Professional Summary */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {professionalSummary}
            </p>
          </div>

          {/* Key Achievements and Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Achievements
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Competencies
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {coreCompetencies.map((competency, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {competency}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree} - {edu.major}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                      {edu.track && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Track: {edu.track}
                        </p>
                      )}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                      {edu.graduationDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Key Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {project.company} | {project.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-xs">•</span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="text-center">
            <a
              href="/Ellis_Ryan_Resume.pdf"
              download="Ellis_Ryan_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              <span>Download Full Resume</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
