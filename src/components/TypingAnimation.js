import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => {
  return (
    <div className="headline"> {/* Changed <p> to <div> to avoid nesting issue */}
      <span>I am a </span>
      <span className="role">
        <Typewriter
          options={{
            strings: ["Web Developer", "Freelancer", "UI/UX Designer"],
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 30,
            pauseFor: 2000,
            cursor: "|",
          }}
        />
      </span>
    </div>
  );
};

export default TypingAnimation;
