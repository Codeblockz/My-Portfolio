import React from 'react';

const ProjectCard = ({ project, isActive = false }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    paused: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400 text-4xl">📱</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project?.title || 'Project Title'}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project?.status || 'active']}`}>
            {project?.status || 'Active'}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project?.description || 'Project description goes here. This is a brief overview of what the project does and its key features.'}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {(project?.technologies || ['React', 'Node.js', 'MongoDB']).map((tech, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={project?.githubUrl || '#'}
            className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white text-center py-2 px-4 rounded transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={project?.demoUrl || '#'}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition-colors duration-200"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
