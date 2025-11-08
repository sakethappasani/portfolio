import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Task Management System",
    date: "2025",
    tech: "Java, Spring Boot, React, MySQL",
    description:
      "A full-stack enterprise application with role-based access control, user and project management, and dynamic dashboards for admins, managers, and developers.",
    repo: "https://github.com/sakethappasani/taskmanagementsystem",
  },
  {
    title: "Journal Application",
    date: "2024-2025",
    tech: "Spring Boot, JWT, Spring Security",
    description:
      "A secure journal management platform with user authentication, token-based authorization, and detailed entry tracking using Spring Security.",
    repo: "https://github.com/sakethappasani/journalApplication-backend",
  },
  {
    title: "Student Extracurricular Activity Management System",
    date: "2024",
    tech: "Spring Boot, Spring MVC, JSP",
    description:
      "A web-based application to manage student extracurricular activities, including event registrations, role-based access, and activity tracking using Spring MVC and JSP.",
    repo: "https://github.com/sakethappasani/student-extracurricular-activity_management-system",
  },
  {
  title: "ERP for Educational Institution",
  date: "2024",
  tech: "Java, JSP, EJB, Servlets, JPA, JDBC, MySQL",
  description:
    "An ERP system for managing students, faculty, courses, and academic activities using Java EE technologies with database support.",
  repo: "https://github.com/sakethappasani/erp_ep_project",
}
];

const ProjectsTimeline = () => {
  return (
    <div className="wrapper">
      <h2 className="timeline-title">Projects</h2>
      <div className="classic-timeline">
        {projects.map((project, index) => (
          <div className="classic-timeline-item" key={index}>
            <div className="classic-timeline-marker" />
            <div className="classic-timeline-content">
              <span className="classic-timeline-year">{project.date}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
              {project.repo && (
                <div style={{ marginTop: "0.6rem" }}>
                  <a
                    href={project.repo}
                    className="cert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="contact-icon" />
                    View Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTimeline;
