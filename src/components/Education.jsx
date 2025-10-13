import React from 'react';

const Education = () => {
  const education = [
    {
      period: "9/2022 - Present",
      degree: "BS Software Engineering",
      institution: "FAST NUCES ISB. (Doing BSSE from FAST NUCES ISB.)",
      affiliation: "Fast Nuces"
    },
    {
      period: "2019 - 2021",
      degree: "FSC Pre-Eng",
      institution: "Khpal Kor Model School and College Swat (Studied From Khpal Kor Model School and College Swat)",
      affiliation: "Khpal Kor Model School and College Swat"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <span className="period">{edu.period}</span>
                <div className="degree-institution">
                  <h3 className="degree">{edu.degree}</h3>
                  <h4 className="institution">{edu.institution}</h4>
                  <p className="affiliation">{edu.affiliation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
