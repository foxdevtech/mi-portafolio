import './Hero.css'
import fotoPerfil from '../assets/mi-foto.jpeg'
import { motion } from 'framer-motion';

function Hero() {
  return (
    
    <section className="hero">
      <div className="hero-content">
        <h1 className="title">Hola, soy <span className="highlight">Julio Cesar Hernández Duran</span></h1>
        <p className="subtitle">Desarrollador Full Stack especializado en experiencias digitales modernas.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">Ver mis proyectos</a>
          
          <a 
            href="/CV_Julio_Hernandez.pdf" 
            download="CV_Julio_Cesar_Hernandez.pdf" 
            className="btn-download"
          >
            Descargar CV
          </a>
        </div>
      </div>
      
      <div className="hero-image">
        <motion.img 
          src={fotoPerfil} 
          alt="Mi Foto" 
          className="profile-pic"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
      </div>
    </section>
  )
}

export default Hero