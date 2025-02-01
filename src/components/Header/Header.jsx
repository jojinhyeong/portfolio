import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-white px-4 md:px-8 font-['Neue_Montreal']">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          {/* 인사말 */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            안녕하세요.
          </h1>
          
          {/* 이름 */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-blue-600">조진형</span> 입니다
          </h1>

          {/* 직무 */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-[2px] bg-black"></div>
            <p className="text-xl md:text-2xl font-light">Backend Developer</p>
          </div>

          {/* 소개 */}
          <p className="text-lg md:text-xl font-light max-w-3xl pt-8 leading-relaxed">
            Spring Boot와 Java를 기반으로 다양한 프로그램을 개발해왔습니다.
            <br className="hidden md:block" />
            항상 새로운 기술에 대한 관심과 깊이 있는 학습을 즐깁니다.
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export default Header; 