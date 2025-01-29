import React from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from '../common/SectionTitle';
import { projectsData } from './projectsData';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Projects" 
          subtitle="주요 프로젝트 이력" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 