import React from 'react';

function SkillCard({ tech, index }) {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${400 + (index * 100)}ms` }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 
        rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative flex items-center space-x-4 bg-white p-6 rounded-lg 
        border border-amber-100 hover:border-transparent transition duration-500">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="flex-grow">
          <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-900 
            transition duration-500">
            {tech.name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SkillCard; 