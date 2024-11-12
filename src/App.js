import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import ToggleSwitch from './components/ToggleSwitch';
import CustomCursor from './components/CustomCursor';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const animationClasses = {
    Home: ['animate-in-rotateX', 'animate-in-rotateY', 'animate-in-flip', 'animate-in-slide'],
    About: ['animate-in-rotateY', 'animate-in-flip', 'animate-in-fade'],
    Resume: ['animate-in-rotateX', 'animate-in-rotateY', 'animate-in-scale'],
    Portfolio: ['animate-in-flip', 'animate-in-rotateX', 'animate-in-cubic'],
    Contact: ['animate-in-rotateY', 'animate-in-flip', 'animate-in-scale'],
  };

  const handlePageChange = (tab) => {
    setActiveTab(tab);
    setAnimationClass(getRandomAnimation(tab));
  };

  const getRandomAnimation = (section) => {
    const animations = animationClasses[section];
    return animations ? animations[Math.floor(Math.random() * animations.length)] : '';
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (typeof window.pageTransition !== 'undefined') {
      window.pageTransition();
    }
  }, [activeTab]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <CustomCursor />
      <div
        className={`btn-menu-toggle ${sidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
        style={{ display: window.innerWidth <= 576 ? 'block' : 'none' }}
      >
        <div className="icon-circle"></div>
        <div className="icon"></div>
      </div>
      <Sidebar setActiveTab={handlePageChange} activeTab={activeTab} sidebarOpen={sidebarOpen} />
      <div className="main-site-wrapper">
        {activeTab === 'Home' && (
          <div className={`section-wrapper pt-page ${animationClass} active`}>
            <SectionOne activeTab={activeTab} animationClass={animationClass} />
          </div>
        )}
        {activeTab === 'About' && (
          <div className={`section-wrapper pt-page ${animationClass} active`}>
            <SectionTwo activeTab={activeTab} animationClass={animationClass} />
          </div>
        )}
        {activeTab === 'Resume' && (
          <div className={`section-wrapper pt-page ${animationClass} active`}>
            <SectionThree activeTab={activeTab} animationClass={animationClass} />
          </div>
        )}
        {activeTab === 'Portfolio' && (
          <div className={`section-wrapper pt-page ${animationClass} active`}>
            <SectionFour activeTab={activeTab} animationClass={animationClass} />
          </div>
        )}
        {activeTab === 'Contact' && (
          <div className={`section-wrapper pt-page ${animationClass} active`}>
            <SectionFive activeTab={activeTab} animationClass={animationClass} />
          </div>
        )}
      </div>
      <ToggleSwitch onToggle={handleToggle} />
    </>
  );
};

export default App;
