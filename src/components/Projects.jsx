import ProjectCard from './ProjectCard';
import todoPreview from '../assets/todos-preview.png';
import letsgoPreview from '../assets/letsgo-preview.png';


const projectData = [
  {
    title: "Awesome Todo's App",
    counter: "PROJECT 01",
    description: "A full-stack task management application with a decoupled client-server architecture. Features a clean user interface and persistent data storage.",
    stack: ["React", "Vite", "Node.js", "Express", "JavaScript", "HTML/CSS"],
    github: "https://github.com/JeffGentapanan/awesometodosapp.git",
    live: "https://awesometodosapp-otag.onrender.com",
    image: todoPreview
  },
  {
    title: "LetsGo",
    counter: "PROJECT 03",
    description: "A travel planning application that helps users discover and organize their dream destinations. Features a visually appealing interface and seamless integration with travel APIs.",
    stack: ["UI/UX Design", "Figma", "Interaction Design", "Travel Tech", "Mobile Design", "User Experience", "Visual Design", "App Design", "Travel Planning"],
    github: "#",
    live: "https://www.figma.com/design/BZBrT1mz1qnNmV2bs9eoQO/Let-s-GO?node-id=243-640&t=evY3oR7YkhxSBHMz-1",
    image: letsgoPreview
  },
];
  

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
      </div>
      <div className="project-list" style={{ display: 'grid', gap: '4rem' }}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}