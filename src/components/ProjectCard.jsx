function ProjectCard({ title, description, stack, github, live, image, counter }) {
  const isDesignOnly = github === "#";
  const stackLabel = isDesignOnly ? "Tools" : "Tech Stack";

  return (
    <div className="project-card-wrapper">
      <div className="project-card-static">
        <a href={live} target="_blank" rel="noopener noreferrer" className="project-image-link">
          <div className="project-browser-frame">
            <div className="browser-header">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="browser-content">
              <img src={image} alt={title} />
            </div>
            <div className="image-overlay">
              <span>View Live Project</span>
            </div>
          </div>
        </a>

        <div className="project-content">
          <div className="project-header-row">
            <h3>{title}</h3>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {isDesignOnly && (
                <span
                  className="badge"
                  style={{ fontSize: "0.6rem", background: "#333", padding: "2px 8px", borderRadius: "4px" }}
                >
                  DESIGN
                </span>
              )}
              <span className="project-counter">{counter}</span>
            </div>
          </div>

          <p>{description}</p>

          <div className="stack-container">
            <span className="stack-label">{stackLabel}</span>
            <ul className="tags">
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {isDesignOnly ? (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-figma" /> Figma Design
              </a>
            ) : (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" /> GitHub
              </a>
            )}

            <a href={live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;