import { motion } from 'framer-motion'; // <--- Importamos motion
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const myProjects = [
    { title: "E-commerce App", description: "Tienda online con React.", tags: ["React", "Firebase"], link: "#" },
    { title: "Task Manager", description: "Gestión de tareas.", tags: ["JS", "CSS"], link: "#" },
    { title: "Portfolio", description: "Mi sitio actual.", tags: ["Vite", "Motion"], link: "#" }
  ];

  return (
    <section id="projects" className="projects-section">
      {/* 1. Animamos el título para que baje suavemente */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Mis Proyectos
      </motion.h2>

      <div className="projects-grid">
        {myProjects.map((project, index) => (
          /* 2. Envolvemos cada tarjeta en un componente de motion */
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }} // Empieza invisible y abajo
            whileInView={{ opacity: 1, y: 0 }} // Al hacer scroll, sube y aparece
            transition={{ duration: 0.5, delay: index * 0.2 }} // Efecto cascada
            viewport={{ once: true }} // Solo se anima la primera vez que lo ves
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;