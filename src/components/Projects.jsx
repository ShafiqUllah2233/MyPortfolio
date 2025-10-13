import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Weather App",
      technologies: ["HTML", "CSS", "Tailwind", "Bootstrap", "Javascript"],
      description: "The Weather apps provide real-time weather updates, including temperature, humidity, and forecasts. They feature location-based updates, unit toggles, and clean user-friendly interfaces."
    },
    {
      name: "Backend Development for Movie Recommendation System",
      technologies: ["HTML", "CSS", "Tailwind", "Bootstrap", "Javascript", "MongoDB APIs", "Express.JS"],
      description: "Develop a backend for a Movie Recommendation System using Express.JS and MongoDB, featuring user authentication, movie database management, ratings, reviews, recommendations, and advanced search/filter options. Include admin controls, personalized recommendations, community features, and API documentation with best practices."
    },
    {
      name: "Ludo Simulator Game",
      technologies: ["C language", "SFML"],
      description: "A Ludo simulator game generates moves randomly, allowing players to roll virtual dice and progress tokens based on the dice outcome. It replicates the classic board game mechanics with automated turns and random gameplay."
    },
    {
      name: "Book Store",
      technologies: ["React", "MongoDB", "Express.JS", "Node.JS", "HTML", "CSS"],
      description: "Develop a full-stack Bookstore application using React for the frontend with reusable components and Node.js with Express for the backend. The project includes features for browsing, searching, and purchasing books, along with user authentication and a secure database."
    },
    {
      name: "SportsHub Platform",
      technologies: ["Java", "MongoDB", "JavaFx", "CSS"],
      description: "Sports Hub is an online platform that helps users organize and join local sports matches and tournaments. It offers features like match scheduling, venue booking, team rankings, and tournament management, making sports coordination easy and accessible for players, organizers, and clubs."
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3 className="project-name">{project.name}</h3>
              <div className="project-technologies">
                <strong>Technologies:</strong>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
