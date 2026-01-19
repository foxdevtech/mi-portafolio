import { useState } from 'react';
import './Projects.css';

const myProjects = [
  { 
    id: 1, 
    title: "E-commerce App", 
    image: "https://via.placeholder.com/400x250",
    description: "Tienda en linea .",
    tech: ["React", "Firebase"]
  },
  { 
    id: 2, 
    title: "Portfolio", 
    image: "https://via.placeholder.com/400x250", 
    description: "Mi portafolio personal hecho con Vite.",
    tech: ["React", "Framer Motion"]
  },
  { 
    id: 3, 
    title: "CitaMe", 
    image: "https://via.placeholder.com/400x250", 
    description: "App para gestionar citas medicas.",
    tech: ["React", "Laravel", "MySQL", "Node.js"]
  },
  { 
    id: 4, 
    title: "DeliveryApp", 
    image: "https://via.placeholder.com/400x250", 
    description: "App para gestionar pedidos a domicilio.",
    tech: ["Flutter", "Strapi", "MySQL", "Node.js"]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      
      <div className="projects-grid">
        {myProjects && myProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card" 
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <button className="view-details-btn">Ver Detalles</button>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedProject(null)}>&times;</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-hero-img" />
            <div className="modal-details">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-tech-stack">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}