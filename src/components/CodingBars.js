import React from 'react';
import CustomProgressBar from './CustomProgressBar';

const CodingBars = () => {
    const skills = [
        { name: 'HTML', progress: 90 },
        { name: 'CSS', progress: 85 },
        { name: 'JavaScript', progress: 65 },
        { name: 'Bootstrap', progress: 80 },
        { name: 'Jquery', progress: 70 },
        { name: 'React Js', progress: 75 },
        { name: 'Node Js', progress: 50 },
        { name: 'Express', progress: 45 },
        { name: 'Postman', progress: 60 },
        { name: 'Mongodb', progress: 70 },
        { name: 'MySQL', progress: 50 },
        { name: 'Shopify', progress: 80 },
        { name: 'Wordpress', progress: 75 },
        { name: 'SEO', progress: 70 },
        { name: 'SMTP (forms validation)', progress: 65 },
    ];

    return (
        <div>
            {skills.map((skill, index) => (
                <CustomProgressBar key={index} label={skill.name} progress={skill.progress} />
            ))}
        </div>
    );
};

export default CodingBars;
