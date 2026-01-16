import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
// Supongamos que tienes una imagen llamada contact-img.jpg en assets
import contactImg from '../assets/foto-contacto.png'; 

function Contact() {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${nombre}!`);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Hablemos</h2>
      
      <div className="contact-wrapper">
        {/* LADO IZQUIERDO: IMAGEN */}
        <motion.div 
          className="contact-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={contactImg} alt="Contacto" />
        </motion.div>

        {/* LADO DERECHO: FORMULARIO */}
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              placeholder="Tu Nombre" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
            />
            <input type="email" placeholder="Tu Email" required />
            <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;