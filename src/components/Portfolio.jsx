import React from 'react';



export const projects = [
  {
    id: 1,
    title: "Payroll Tracker",
    description: "This is a project where I use Javascript to allow a yser to create a database of employees and their salaries.",
    image: "../images/payroll.jpg",
    link: "https://github.com/SetCra123/Payroll-Calculator",
  },
  {
    id: 2,
    title: "Dinner SOS",
    description: "This is a colloborative project, where we designed an app to help indecisive eaters find something or somewhere to eat.",
    image: "../images/dinner.jpg", 
    link: "https://github.com/SetCra123/Dinner_SOS",
  },
  {
    id: 3,
    title: "README Generator",
    description: "This is a Node Js project that allows a user to create a cutom README file using Command Line Interface.",
    image: "../images/Readme1.png", 
    link: "https://github.com/SetCra123/ReadmeGenerator",
  },
  {
    id: 4,
    title: "Senpai Social",
    description: "This is a collaborative project where we created a Social Network for Anime users with full CRUD capabilities.",
    image: "../images/SenpaiSocial.png", 
    link: "https://github.com/justmacn/Senpai-Social",
  },
  
];



const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((item) => (
          <div key={item.id} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.image && <img src={item.image} alt={item.title} width="40%" max-height="50px" />}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;