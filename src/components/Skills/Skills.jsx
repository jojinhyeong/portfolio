import React from 'react';
import TechStack from './TechStack';
import { techStackData } from './techStackData';
import SectionTitle from '../common/SectionTitle';

function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Skills" 
          subtitle="주요 기술 스택" 
        />
        <TechStack data={techStackData} />
      </div>
    </section>
  );
}

export default Skills;