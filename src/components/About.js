import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Web',
      description:
        'Criação de aplicações web modernas e responsivas usando as melhores tecnologias.',
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description:
        'Otimização de aplicações para máxima velocidade e eficiência.',
    },
    {
      icon: <FaUsers />,
      title: 'Trabalho em Equipe',
      description:
        'Experiência em projetos colaborativos e metodologias ágeis.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Inovação',
      description:
        'Sempre buscando novas soluções e tecnologias para resolver problemas.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça um pouco mais sobre minha jornada e paixão pela tecnologia
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Quem sou eu?</h3>
            <p>
              Sou um desenvolvedor Full Stack apaixonado por criar soluções
              digitais inovadoras e experiências de usuário excepcionais. Com
              experiência em desenvolvimento web moderno, sempre busco aprender
              novas tecnologias e aprimorar minhas habilidades.
            </p>

            <p>
              Minha jornada na programação começou com a curiosidade de entender
              como as coisas funcionam na internet. Hoje, transformo essa paixão
              em código que resolve problemas reais e melhora a vida das
              pessoas.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Projetos Concluídos</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Vamos trabalhar juntos?</h3>
          <p>
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
            Se você tem um projeto em mente, vamos conversar!
          </p>
          <a href="#contact" className="btn">
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
