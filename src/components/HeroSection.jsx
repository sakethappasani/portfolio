import React from "react";
import image from "./IMG_0990.jpeg";
import TechLogos from "./TechLogos";

const HeroSection = () => {
  return (
    <div className="wrapper">
      <div className="hero-flex">
        <div className="hero-text">
          <h1>Hello, I'm Saketh Appasani 👋</h1>
          <p>
            I'm a backend-focused full-stack developer who builds secure,
            efficient, and scalable applications — with a strong command of
            frontend development too.
          </p>
          <p>
            Welcome to my portfolio — scroll down to explore my skills, tech
            stack, project and certifications.
          </p>
        </div>

        <img src={image} alt="Saketh" className="profile-img" />
      </div>

      <div className="skills-section">
        <h3>Skills & Tech Stack</h3>
        <div className="badge-container">
          {[
            "Java", "SQL", "MySQL", "MongoDB", "PostgreSQL",
            "JPA", "Hibernate", "Spring", "Docker", "Spring Boot", "JSP",
            "Servlets", "Redis", "HTML", "CSS", "JavaScript",
            "React.js", "Git", "GitHub", "Postman", "Maven", "Agile"
          ].map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
        <TechLogos/>
      </div>
    </div>
  );
};

export default HeroSection;
