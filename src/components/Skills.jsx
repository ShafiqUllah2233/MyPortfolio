import React from 'react';

const Skills = () => {
  const languages = [
    'React', 'Python', 'JavaScript', 'Java', 'HTML', 'C++', 'C', 'CSS', 
    'Node.js', 'MongoDB', 'SQL', 'Bootstrap', 'Tailwind CSS', 'TypeScript'
  ];

  const technologies = [
    'CI/CD', 'Docker', 'GitHub', 'DevOps', 'Mern Stack', 'Flask APP', 
    'Gradio', 'Streamlit', 'MLFlow'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3>Languages:</h3>
            <div className="skills-list">
              {languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Technologies:</h3>
            <div className="skills-list">
              {technologies.map((tech, index) => (
                <span key={index} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
