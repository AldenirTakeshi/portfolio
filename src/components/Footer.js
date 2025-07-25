import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Takeshi</h3>
            <p>
              Desenvolvedor Full Stack apaixonado por criar soluções digitais
              inovadoras e experiências excepcionais.
            </p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contato</h4>
            <ul>
              <li>aldenirtakeshi@gmail.com</li>
              <li>+55 (69) 99243-8399</li>
              <li>Cacoal - RO, Brasil</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* <h4>Redes Sociais</h4> */}
            <div className="social-links">
              {/* {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))} */}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>© {currentYear} Takeshi. Todos os direitos reservados.</p>
            <p className="made-with">
              Feito com <FaHeart className="heart-icon" /> usando React
            </p>
          </div>

          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Voltar ao topo"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
