import './ProjectCard.css'

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver Proyecto →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard