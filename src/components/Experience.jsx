import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "1/2023 - 6/2023",
      role: "Web Development",
      company: "ProgrammersTech",
      description: "Works With Different Teams. Worked on Web Different Projects. React, HTML, CSS, MongoDB, Tailwind, Bootstrap / MernStack"
    },
    {
      period: "6/2024 - 9/2024",
      role: "Frontend Developer",
      company: "CodeCraft Solutions",
      description: "Developed responsive user interfaces using React.js and Next.js. Collaborated with design team to implement UI/UX improvements. React, Next.js, TypeScript / Tailwind CSS"
    },
    {
      period: "9/2024 - 12/2024 (scholarship holder)",
      role: "Teaching Assistant for Data Structure",
      company: "Fast Nuces",
      description: "Evaluation of Quizzes, Assignments and Projects. Research to design Assignments and Projects. Data Structure, SFML, C++ / Excel"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <span className="period">{exp.period}</span>
                <div className="role-company">
                  <h3 className="role">{exp.role}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
              </div>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
