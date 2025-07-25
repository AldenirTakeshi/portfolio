import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset status após 3 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'aldenirtakeshi@gmail.com',
      link: 'mailto:aldenirtakeshi@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Telefone',
      value: '+55 (69) 99243-8399',
      link: 'tel:+556992438399',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Cacoal - RO, Brasil',
      link: null,
    },
  ];

  // const socialLinks = [
  //   {
  //     icon: <FaGithub />,
  //     url: 'https://github.com',
  //     label: 'GitHub',
  //   },
  //   {
  //     icon: <FaLinkedin />,
  //     url: 'https://linkedin.com',
  //     label: 'LinkedIn',
  //   },
  //   {
  //     icon: <FaTwitter />,
  //     url: 'https://twitter.com',
  //     label: 'Twitter',
  //   },
  // ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">
            Vamos conversar sobre seu próximo projeto ou oportunidade de
            colaboração
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Vamos conversar!</h3>
            <p>
              Estou sempre aberto a novos desafios e oportunidades. Se você tem
              um projeto em mente ou gostaria de discutir possibilidades de
              colaboração, não hesite em entrar em contato.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              {/* <h4>Redes Sociais</h4> */}
              <div className="social-icons">
                {/* {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))} */}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
