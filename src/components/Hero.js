import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaInstagram,
} from 'react-icons/fa';
import './Hero.css';
import profileImage from '../assets/icon/me-Icon.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Olá, eu sou <span className="highlight">Aldenir</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Desenvolvedor Full Stack
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              Transformando ideias em experiências digitais incríveis.
              Especializado em React, Node.js e tecnologias modernas.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#projects" className="btn">
                Ver Projetos
              </a>
              <a href="#contact" className="btn btn-outline">
                Entre em Contato
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="profile-card">
              <div className="profile-avatar">
                <div
                  className="avatar-placeholder"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Aldenir dos Santos"
                    style={{ borderRadius: '50%' }}
                    marginLeft="20px"
                  />
                </div>
              </div>
              <div className="profile-info">
                <h3>Aldenir dos Santos</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://github.com/AldenirTakeshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aldenir-dos-santos-060a51300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/takeshitos_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* <motion.button
          className="scroll-down"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: 5 }}
        >
          <FaArrowDown />
        </motion.button> */}
      </div>
    </section>
  );
};

export default Hero;
