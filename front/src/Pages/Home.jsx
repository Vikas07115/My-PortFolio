import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import '../App.css';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/contact');
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Hi, I am Vikas</h1>
                <h2>Full Stack Developer</h2>
                <p>
                    I specialize in creating dynamic, user-friendly web applications.
                    With expertise in modern frameworks and a passion for design,
                    I bring ideas to life with precision and creativity.
                </p>
                <div className="btn-group">
                    <button onClick={handleNavigateToContact} className="btn hire-btn">Hire Me</button>
                    <button onClick={handleNavigateToContact} className="btn talk-btn">Let's Talk</button>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/Vikas07115" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_v_mehta?igsh=c3I2cW9wNGhmMjhr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/vikas-mehta07" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="home-image">
                <img src="/pic.jpg" alt="Vikas" />
            </div>
        </div>
    );
};

export default Home;
