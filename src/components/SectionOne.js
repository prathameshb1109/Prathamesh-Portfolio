import React, { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';

const SectionOne = ({ activeTab, animationClass = '' }) => {
  const [animationEnded, setAnimationEnded] = useState(false);

  // Handle animation end event
  const handleAnimationEnd = () => {
    setAnimationEnded(true);  // Mark animation as ended
  };

  useEffect(() => {
    if (animationEnded) {
      // Logic to handle removal of class after animation
      setAnimationEnded(false);  // Reset animation state if needed
    }
  }, [animationEnded]);

  return (
    <section
      className={`section-banner ${animationClass} ${activeTab === 'Home' ? 'page-active' : ''}`}
      onAnimationEnd={handleAnimationEnd}  // Trigger when animation ends
    >
      <div className='section-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='banner-content-wrapper'>
              <h1 className='section-title ff-playfair fw-bold f-size-62 text-uppercase text-center text-white'>
                Prathamesh <span className='text-blue'>Bhosale</span>
              </h1>
              <TypingAnimation text={`I am a Full Stack Developer`} speed={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
