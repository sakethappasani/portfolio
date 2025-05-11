import React from 'react';
import java from '../assets/tech/java.png';
import spring from '../assets/tech/spring.svg';
import react from '../assets/tech/react.png';
import mysql from '../assets/tech/mysql.png';
import mongodb from '../assets/tech/mongodb.png';
import postman from '../assets/tech/postman.png';
import git from '../assets/tech/git.png';

const logos = [java, spring, react, mysql, mongodb, postman, git];

const TechLogos = () => {
  return (
    <div className="tech-logo-grid">
      {logos.map((logo, idx) => (
        <img key={idx} src={logo} alt="tech logo" className="tech-logo" />
      ))}
    </div>
  );
};

export default TechLogos;
