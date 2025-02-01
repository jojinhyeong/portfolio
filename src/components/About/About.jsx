import React from 'react';
import profile1 from '../../images/profile1.jpg';
import profile2 from '../../images/profile2.jpg';
import SectionTitle from '../common/SectionTitle';
import GithubCard from './GithubCard';
import ProfileCard from './ProfileCard';
import ContactItem from './ContactItem';
import AboutContent from './AboutContent';

function About() {
  const contactInfo = {
    email: 'jhg0315@gmail.com',
    phone: '010-5194-2631',
    location: '인천시 부평구 삼산동',
    github: 'https://github.com/jojinhyeong'
  };

  const aboutParagraphs = [
    '3년차 웹 개발자로서 jQuery와 Spring Boot를 활용한 풀스택 개발 경험이 있으며, AWS를 이용한 인프라 구축 경험이 있습니다.',
    '최근에는 더 나은 사용자 경험을 제공하기 위해 React와 같은 모던 프론트엔드 기술을 학습하며 역량을 확장하고 있습니다.',
    '새로운 기술과 트렌드를 학습하는 것을 즐기며, 지속적인 성장을 위해 노력하고 있습니다.',
    '팀 프로젝트에서는 원활한 의사소통과 협업을 통해 프로젝트의 성공적인 완수를 이끌어낸 경험이 있습니다.'
  ];

  const experience = {
    company: '서부사료(주)',
    period: '2021/04 ~ 2024/10',
    description: '웹 개발자 & ERP 시스템 관리자',
    details1: '1. 웹 프로그램 기획 및 개발.',
    details2: '2. 사내 ERP 업무 시스템 유지보수 및 새로운 메뉴 개발.'
  };
  const profileImages = {
    front: profile1,
    back: profile2
  };

  return (
    <section id="about" className="relative py-20 bg-white font-['Neue_Montreal']">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-16">
          {/* 왼쪽: 자기소개 & GitHub & Experience */}
          <div className="space-y-8 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            <AboutContent paragraphs={aboutParagraphs} />
            <GithubCard url={contactInfo.github} />
            
            {/* Experience Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">{experience.company}</p>
                <p className="text-gray-600">{experience.period}</p>
                <p className="text-blue-600 font-medium">{experience.description}</p>
                <p className="text-gray-600 leading-relaxed">{experience.details1}</p>
                <p className="text-gray-600 leading-relaxed">{experience.details2}</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 프로필 사진 & 연락처 */}
          <div className="flex flex-col h-full animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
            <ProfileCard images={profileImages} />
            
            <div className="bg-gray-50 rounded-lg p-6 mt-8 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Info</h3>
              
              <div className="space-y-3">
                <ContactItem 
                  icon="📧"
                  href={`mailto:${contactInfo.email}`}
                  text={contactInfo.email}
                />
                
                <ContactItem 
                  icon="📱"
                  href={`tel:${contactInfo.phone}`}
                  text={contactInfo.phone}
                />
                
                <ContactItem 
                  icon="📍"
                  text={contactInfo.location}
                  isLink={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 