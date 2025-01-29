import React from 'react';

function GradientButton({ href, children, variant = 'primary' }) {
  const styles = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600",
    secondary: "border border-gray-700 hover:border-blue-500 text-white backdrop-blur-sm bg-white/5"
  };

  return (
    <a
      href={href}
      className={`${styles[variant]} px-8 py-4 rounded-xl text-center 
        transition-all duration-300 hover:-translate-y-1`}
    >
      {children}
    </a>
  );
}

export default GradientButton; 