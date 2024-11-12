import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

const CustomProgressBar = ({ label, progress }) => {
    const progressRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 } // Trigger when 30% is visible
        );
        if (progressRef.current) observer.observe(progressRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="progress-charts" ref={progressRef}>
            <h6 className="heading heading-h6">{label}</h6>
            <div className="progress-bar">
            <div
                className={`progress ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
                style={{ transition: 'width 0.5s ease-in-out', width: isVisible ? `${progress}%` : '0%' }}
            >
                <span className="percent-label">{progress}%</span>
            </div>
            </div>
        </div>
    );
};

export default CustomProgressBar;
