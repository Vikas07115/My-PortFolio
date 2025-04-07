import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../App.css";

const EducationProjects = () => {
  return (
    <div className="edu-proj-container">
      <div className="box education-box">
        <h1>Education & Journey</h1>
        <div className="timeline">
          <div className="timeline-item">
            <h2>10th Standard</h2>
            <p>Haryana Board</p>
          </div>

          <div className="timeline-item">
            <h2>12th (PCM)</h2>
            <p>CBSE Board</p>
          </div>

          <div className="timeline-item">
            <h2>B.Sc Computer Science</h2>
            <p>1st Year - SD PG College, Panipat</p>
            <p>Affiliated to Kurukshetra University</p>
          </div>

          <div className="timeline-item">
            <h2>Full Stack Web Development</h2>
            <p>Udemy - MERN Stack</p>
          </div>

          <div className="timeline-item">
            <h2>My Coding Journey</h2>
            <p>
              Started with basic HTML & CSS, now developing full-fledged MERN
              stack applications.
            </p>
          </div>
        </div>
      </div>

      <div className="box projects-box">
        <h1>Projects</h1>

        {[
          {
            title: "Mehta's Restaurant",
            github: "https://github.com/yourgithub/mehtas-restaurant",
            demo: "https://mehtas-restaurant-live-demo.com",
          },
          {
            title: "My Portfolio",
            github: "https://github.com/yourgithub/my-portfolio",
            demo: "https://my-portfolio-live-demo.com",
          },
          {
            title: "Uttarakhand's Jewels",
            github: "https://github.com/yourgithub/uttarakhand-jewels",
            demo: "https://uttarakhand-jewels-live-demo.com",
          },
          {
            title: "Mehta's Events",
            github: "https://github.com/yourgithub/mehtas-events",
            demo: "https://mehtas-events-live-demo.com",
          },
          {
            title: "UK Gym",
            github: "https://github.com/yourgithub/uk-gym",
            demo: "https://uk-gym-live-demo.com",
          },
          {
            title: "UK Villa",
            github: "https://github.com/yourgithub/uk-villa",
            demo: "https://uk-villa-live-demo.com",
          },
        ].map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}

        <div className="project-item">
          <h2>And Many More...</h2>
          <p>Check out my GitHub for more projects!</p>
          <div className="github-link">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationProjects;
