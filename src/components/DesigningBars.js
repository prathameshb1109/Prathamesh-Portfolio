import React from 'react';
import CustomProgressBar from './CustomProgressBar';

const DesigningBars = () => {
    const skills = [
        { name: 'Adobe Photoshop', progress: 90 },
        { name: 'Adobe Illustrator', progress: 85 },
    ];

    return (
        <div>
            {skills.map((skill, index) => (
                <CustomProgressBar key={index} label={skill.name} progress={skill.progress} />
            ))}
        </div>
    );
};

export default DesigningBars;
