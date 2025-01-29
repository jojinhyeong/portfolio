import React from 'react';
import profile1 from '../../images/profile1.jpg';
import profile2 from '../../images/profile2.jpg';
import SectionTitle from '../common/SectionTitle';
import GithubCard from '../common/GithubCard';

function About() {
  const contactInfo = {
    email: 'jhg0315@gmail.com',
    phone: '010-5194-2631',
    location: '인천시 부평구 삼산동',
    github: 'https://github.com/jojinhyeong'
  };

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-16">
          <div className="space-y-8 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                3년차 백엔드 개발자로서 Spring Boot와 Java를 활용한 서버 개발, 
                AWS를 이용한 인프라 구축 경험이 있습니다.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                최근에는 프론트엔드 기술에도 관심을 가지고 React를 학습하며, 
                풀스택 개발자로 성장하기 위해 노력하고 있습니다.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                새로운 기술을 배우는 것을 좋아하며, 문제 해결 능력을 향상시키기 위해
                지속적으로 학습하고 있습니다.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                팀 프로젝트에서는 원활한 의사소통과 협업을 통해 
                프로젝트의 성공적인 완수를 이끌어낸 경험이 있습니다.
              </p>
            </div>
            
            <GithubCard url={contactInfo.github} />
          </div>

          <div className="flex flex-col h-full animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
            <div className="relative group h-[300px] md:h-[400px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* 앞면 (정장 사진) */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                    rounded-lg blur-lg"></div>
                  <img
                    src={profile1}
                    alt="Profile"
                    className="absolute inset-0 rounded-lg shadow-xl w-full h-full object-contain
                      [backface-visibility:hidden]"
                  />
                </div>

                {/* 뒷면 (캐주얼 사진) */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                    rounded-lg blur-lg"></div>
                  <img
                    src={profile2}
                    alt="Profile 2"
                    className="absolute inset-0 rounded-lg shadow-xl w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Info</h3>
              
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-3">📧</span>
                  <a href={`mailto:${contactInfo.email}`} 
                    className="hover:text-blue-500 transition-colors">
                    {contactInfo.email}
                  </a>
                </p>
                
                <p className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-3">📱</span>
                  <a href={`tel:${contactInfo.phone}`} 
                    className="hover:text-blue-500 transition-colors">
                    {contactInfo.phone}
                  </a>
                </p>
                
                <p className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-3">📍</span>
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 