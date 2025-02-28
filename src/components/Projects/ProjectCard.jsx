import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white p-8 rounded-lg border border-gray-200
      hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
        rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      
      <div className="relative">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 
          transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-base font-semibold text-gray-600 mb-2">
          {project.period}
        </p>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full
                border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 