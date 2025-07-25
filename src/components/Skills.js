import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, level: 85, color: '#61DAFB' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
        { name: 'Python', icon: <FaPython />, level: 75, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, level: 70, color: '#ED8B00' },
        { name: 'Database', icon: <FaDatabase />, level: 82, color: '#336791' },
      ],
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ED' },
        { name: 'AWS', icon: <FaAws />, level: 65, color: '#FF9900' },
        { name: 'Figma', icon: <FaFigma />, level: 75, color: '#F24E1E' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Tecnologias e ferramentas que utilizo para criar soluções incríveis
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="skill-header">
                      <div
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Sempre aprendendo</h3>
          <p>
            A tecnologia evolui constantemente e eu me mantenho atualizado com
            as últimas tendências e melhores práticas do mercado.
          </p>
          <div className="learning-badges">
            <span className="badge">TypeScript</span>
            <span className="badge">Next.js</span>
            <span className="badge">GraphQL</span>
            <span className="badge">Machine Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
