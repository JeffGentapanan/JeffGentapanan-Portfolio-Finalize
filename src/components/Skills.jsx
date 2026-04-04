const skillData = [
  { 
    category: "Languages", 
    icon: "fa-code", 
    list: ["JS", "CSS", "HTML5", "MERN Stack", "JSX"] 
  },
  { 
    category: "Libraries", 
    icon: "fa-book", 
    list: ["React", "Font Awesome 6", "Google Fonts", "FormSubmit API"] 
  },
  { 
    category: "Tools", 
    icon: "fa-tools", 
    list: ["Vite", "Git & GitHub", "Figma"] 
  }
];

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
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}