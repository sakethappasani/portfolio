import React from 'react';
import redhat from '../assets/certifications/redhat.png';
import oracle from '../assets/certifications/oracle.png';

const certifications = [
  {
    title: 'Oracle Certified Professional: Java SE 11 Developer',
    issuer: 'Oracle',
    date: '2025',
    image: oracle,
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7CCF5DD91D8E0D748421651830C458A5E539C81375D6CA1E0038574F65F1ADB8',
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer – EX183',
    issuer: 'Red Hat',
    date: '2024',
    image: redhat,
    link: 'https://rhtapps.redhat.com/verify?certId=240-190-462',
  }
];

const Certifications = () => {
  return (
    <div className="wrapper">
      <h2 className="timeline-title">Certifications</h2>
      <div className="cert-card-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-card-header">
              <img src={cert.image} alt={cert.title} className="cert-badge" />
              <div>
                <h3>{cert.title}</h3>
                <p className="cert-meta">
                  {cert.issuer} — <span className="cert-date">{cert.date}</span>
                </p>
              </div>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Credential →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
