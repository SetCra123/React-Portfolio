export default function Resume() {
    return (
      <div className="resume-page">
        <div className="resume-toolbar">
          <a
            href="../public/DevResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Open Fullscreen
          </a>
  
          <a
            href="../public/DevResume.pdf"
            download
            className="resume-button outline"
          >
            Download PDF
          </a>
        </div>
  
        <div className="resume-wrapper">
          <iframe
            src="/DevResume.pdf"
            title="Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    );
  }
  


// import React from 'react'

// const Resume = () => {
//   return (
//     <div>
//       <h1 align="center">Resume</h1>
//       <iframe src="https://docs.google.com/document/d/19ZSdQmexJUCOJY_rKUTJCz08b4FhZGC5M-AV5V2e-bw/view" title="Google Search" style={{ width: '100%', height: '1000px' }}/>
//     </div>
//   )
// }

// export default Resume