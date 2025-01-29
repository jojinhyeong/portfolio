import React, { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // 커서 스타일 체크
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 메인 커서 */}
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference
          ${isPointer ? 'w-8 h-8' : 'w-4 h-4'}
          transition-all duration-200 ease-out
          rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      {/* 트레일 효과 */}
      <div
        className="fixed pointer-events-none z-40 w-2 h-2
          rounded-full bg-white/50 mix-blend-difference
          transition-all duration-300 ease-out delay-75
          transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
}

export default CustomCursor; 