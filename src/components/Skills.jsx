const skillData = [
  { 
    category: "Languages", 
    icon: "fa-code", 
    list: ["JS", "CSS", "HTML5", "MERN Stack", "JSX"] 
  },
  { 
    category: "Libraries", 
    icon: "fa-book", 
    list: ["React", "Font Awesome 6", "Google Fonts", "FormSubmit API", "Reactbits"] 
  },
  { 
    category: "Tools", 
    icon: "fa-tools", 
    list: ["Vite", "Git & GitHub", "Figma"] 
  }
];

const iconMap = {
  "JS": "fab fa-js-square",
  "CSS": "fab fa-css3-alt",
  "HTML5": "fab fa-html5",
  "MERN Stack": "fas fa-layer-group",
  "JSX": "fab fa-react",

  "React": "fab fa-react",
  "Font Awesome 6": "fab fa-font-awesome",
  "Google Fonts": "fas fa-font",
  "FormSubmit API": "fas fa-paper-plane",
  "Reactbits": "fas fa-cubes",

  "Vite": "fas fa-bolt",
  "Git & GitHub": "fab fa-github",
  "Figma": "fab fa-figma"
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-header">
        <h2>SKILLS & TECHSTACK</h2>
      </div>
      <div className="grid">
        {skillData.map((item, index) => (
          <div key={index} className="skill-category-wrapper">
            <div className="skill-category">
              <div className="category-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3>{item.category}</h3>
              <ul>
                {item.list.map((skill) => (
                  <li key={skill} className="skill-list-item">
                  {/* This finds the icon class based on the skill name */}
                  <i className={iconMap[skill] || "fas fa-check-circle"}></i>
                  <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}