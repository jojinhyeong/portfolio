import React from 'react';
import GradientButton from '../common/GradientButton';

function Header() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        {/* 메인 그라데이션 원 */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full 
          bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full 
          bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[60px] animate-pulse" />
        
        {/* 작은 그라데이션 원들 */}
        <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full 
          bg-gradient-to-r from-pink-500/20 to-rose-500/20 blur-[40px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full 
          bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-[50px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fadeIn opacity-0 [animation-fill-mode:forwards]">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm">
              <p className="text-blue-400 text-sm font-medium">Portfolio - 2024</p>
            </div>
          </div>

          <h1 className="animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms] text-5xl md:text-7xl font-bold text-white mt-8">
            <span className="block">Backend Developer</span>
            <span className="block mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              조진형
            </span>
          </h1>

          <p className="animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms] text-gray-300 text-xl max-w-2xl mt-8">
            Spring Boot와 AWS를 활용한 서버 개발에 전문성을 가지고 있으며,
            안정적이고 확장 가능한 백엔드 시스템을 구축합니다.
          </p>

          <div className="animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms] flex flex-col sm:flex-row gap-6 mt-12">
            <GradientButton href="#projects" variant="primary">
              프로젝트 보기
            </GradientButton>
          </div>

          <div className="animate-bounce absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-blue-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 