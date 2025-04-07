import React from 'react';
import '../App.css';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
    SiExpress, SiMongodb, SiPostgresql, SiPostman,
    SiVercel, SiNetlify, SiGithub, SiOpenai,
    SiGoogletranslate
} from 'react-icons/si';

import { FaTools, FaGlobe, FaRobot } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di'; 

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <SiPostgresql /> },
        { name: "ThunderClient", icon: <FaTools /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "ChatGPT", icon: <SiOpenai /> },
        { name: "Claude", icon: <FaRobot /> },
        { name: "DeepSeek", icon: <FaRobot /> },
        { name: "VS Code", icon: <DiVisualstudio /> }, 
        { name: "Responsive Design", icon: <FaGlobe /> },
        { name: "English Spoken Skills", icon: <SiGoogletranslate /> },
    ];

    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span className="icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
