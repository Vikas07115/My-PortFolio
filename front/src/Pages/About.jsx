import React, { useEffect } from 'react';
import '../App.css';

const About = () => {

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 5) {
                window.scrollTo(0, 5); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-image">
                <img src="/pic.jpg" alt="Vikas" />
            </div>
            <h2>Full Stack Developer</h2>
            <p>
                I'm a dedicated web developer with a strong passion for building modern, responsive,
                and user-friendly web applications. With expertise in front-end and back-end technologies,
                I turn creative ideas into powerful digital solutions.
            </p>
            <button className="about-btn">Explore More</button>
        </div>
    );
};

export default About;
