import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import LoadingScreen from './components/common/LoadingScreen';
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="pt-[70px]"> {/* Navbar 높이만큼 패딩 추가 */}
        <Header />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
