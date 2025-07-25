import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
      image:
        'https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=E-commerce',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Aplicação de gerenciamento de tarefas com drag & drop, notificações e colaboração em tempo real.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=Task+App',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'API REST Service',
      description:
        'API RESTful completa com autenticação JWT, documentação Swagger e testes automatizados.',
      image:
        'https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=API+Service',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Jest'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'Site portfólio responsivo com animações modernas e design minimalista.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=Portfolio',
      category: 'frontend',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Responsive'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Real-time Chat App',
      description:
        'Aplicação de chat em tempo real com salas, mensagens privadas e upload de arquivos.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=Chat+App',
      category: 'fullstack',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description:
        'Dashboard meteorológico com previsões em tempo real e gráficos interativos.',
      image:
        'https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=Weather+App',
      category: 'frontend',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getTechnologyIcon = (tech) => {
    const icons = {
      React: <FaReact />,
      'Node.js': <FaNodeJs />,
      MongoDB: <FaDatabase />,
      PostgreSQL: <FaDatabase />,
    };
    return icons[tech] || null;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">
            Alguns dos projetos que desenvolvi para demonstrar minhas
            habilidades
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Destaque</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {getTechnologyIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Interessado em colaborar?</h3>
          <p>
            Estou sempre aberto a novos projetos e oportunidades. Vamos criar
            algo incrível juntos!
          </p>
          <a href="#contact" className="btn">
            Vamos Conversar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
