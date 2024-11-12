import React, { useEffect, useState } from 'react';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isActive]);

  return (
    <div className={`toggle-wrapp ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <span className="toggle"></span>
    </div>
  );
};

export default ToggleSwitch;
