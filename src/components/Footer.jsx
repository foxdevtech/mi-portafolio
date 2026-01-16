import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Tu Nombre. Casi todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;