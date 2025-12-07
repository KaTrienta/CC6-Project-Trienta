import React from 'react';

const ProjectCard = ({ title, description, imgSrc }: { title: string, description: string, imgSrc: string }) => (
  <div className="project-card">
    <img src={imgSrc} alt={title} className="project-image" />
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Shoply',
      description: 'eCommerce Admin Panel - A dashboard for managing product inventory, orders, and analytics with a responsive, mobile-first design.',
      imgSrc: '/proj1.jpg', // Add the correct image path here
    },
    {
      title: 'DevDash',
      description: 'Developer Productivity Dashboard - A personalized dashboard for developers that integrates GitHub, Jira, and Google using OAuth2 and REST APIs.',
      imgSrc: '/proj2.jpg', // Add the correct image path here
    },
    {
      title: 'Portfol.io',
      description: 'Interactive Developer Portfolio - A dynamic, animated portfolio built with 3D scroll and parallax effects using GSAP and Three.js.',
      imgSrc: '/proj3.jpg', // Add the correct image path here
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
