export default function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="logo-section">
          <a href="#home" className="logo">
            <span>JEFF</span>.DEV
          </a>
          <a href="https://github.com/JeffGentapanan/MY-PORTFOLIO-JEFFGENTAPANAN-BSIT2-SECTION1.git" target="_blank" rel="noopener noreferrer" className="github-link" title="View Source on GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}