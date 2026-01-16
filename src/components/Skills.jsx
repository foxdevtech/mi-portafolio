import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div 
            className="skill-card" 
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;