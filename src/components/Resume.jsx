import React, { useState } from 'react';
import resume from '../assets/SakethResume.pdf';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="wrapper">
      <h2 className="timeline-title">Resume</h2>
      <p>
        Here's a detailed overview of my education, technical skills, certifications,
        and academic projects. Click below to view the full resume.
      </p>

      <button onClick={() => setShowModal(true)} className="resume-button">
        📄 View Resume
      </button>

      {showModal && (
        <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowModal(false)}>×</button>

            <iframe
              src={`${resume}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              className="resume-frame"
            ></iframe>

            <p className="resume-fallback">
              Your device may not support embedded PDFs.
              <br />
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                Tap here to open the resume in a new tab →
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
