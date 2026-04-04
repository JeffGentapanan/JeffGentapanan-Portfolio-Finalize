export default function Resume() {
  return (
    <section id="resume">
      <div className="resume-container">
        <h2>Resume & Info</h2>
        <div className="quick-info">
          <div className="info-item">
            <span>Name:</span>
            <p>Jeff A. Gentapanan</p>
          </div>
          <div className="info-item">
            <span>Address:</span>
            <p>Igcocolo, Guimbal, Iloilo</p>
          </div>
          <div className="info-item">
            <span>Education:</span>
            <p>BSIT in Western Institute of Technology</p>
          </div>
          <div className="info-item">
            <span>Birthday:</span>
            <p>May 25, 2004</p>
          </div>
        </div>
        <p className="resume-intro">
          You can view and download my resume via the link below.
        </p>
        <div className="resume-actions">
          <a href="https://drive.google.com/file/d/1zBMBMWVx96HQH1sKYThS32GJTFgdBkIW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
            View My Resume
          </a>
          <a href="/Jeff-Gentapanan-Resume.pdf" download className="btn outline">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}