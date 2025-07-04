import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      status: "active",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      status: "completed",
      technologies: ["React", "Node.js", "OpenAI API", "Socket.io"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Full-stack task management application with user authentication",
      status: "paused",
      technologies: ["React", "Express", "MongoDB", "JWT"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  const featuredProjects = projects.slice(0, 3);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents 
            a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
