import React from 'react';

function SectionTitle({ title, subtitle }) {
  return (
    <div className="animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms] text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
      </h2>
      {subtitle && <p className="text-gray-600 mt-6 text-lg">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;