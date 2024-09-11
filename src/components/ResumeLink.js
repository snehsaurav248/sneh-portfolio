import React from 'react';

const ResumeLink = () => {
  return (
    <div className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      <a
        href="/resumes/sneh-saurav-specialised-cv-12113521.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View or Download My Resume
      </a>
    </div>
  );
};

export default ResumeLink;
