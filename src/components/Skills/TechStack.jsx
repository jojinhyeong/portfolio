import React from 'react';
import SkillCard from './SkillCard';

function TechStack({ data }) {
  return (
    <div className="space-y-16">
      {Object.entries(data).map(([category, technologies], categoryIndex) => (
        <div 
          key={category}
          className="animate-fadeIn opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: `${200 + (categoryIndex * 200)}ms` }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <SkillCard 
                key={tech.name}
                tech={tech}
                index={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;