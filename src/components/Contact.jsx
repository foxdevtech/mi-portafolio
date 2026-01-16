import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          alert("¡Mensaje enviado con éxito!");
          e.target.reset(); // Limpia el formulario
      }, (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje, intenta de nuevo.");
      });
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
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* Los 'name' deben coincidir con las {{variables}} de tu plantilla */}
            <input type="text" name="from_name" placeholder="Tu Nombre" required />
            <input type="email" name="reply_to" placeholder="Tu Email" required />
            <textarea name="message" placeholder="Tu Mensaje" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;