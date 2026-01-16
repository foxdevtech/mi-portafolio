import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos de hamburguesa y cerrar
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú cuando haces clic en un link
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Julio Hedu</div>
      
      {/* Icono de hamburguesa solo visible en mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Clase dinámica: si isOpen es true, añade la clase 'active' */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Proyectos</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;