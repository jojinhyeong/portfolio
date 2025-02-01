import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50 animate-fadeOut">
      <div className="text-3xl font-bold text-primary animate-logo">
        방문해 주셔서 감사합니다.
      </div>
    </div>
  );
}

export default LoadingScreen; 