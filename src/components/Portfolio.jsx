import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import { Container, Row, Col, } from 'react-bootstrap';  // Import React Bootstrap components


export const projects = [
  {
    id: 1,
    title: "Gym-Buddy",
    description: "This is an app where I use the MERN stack\nto create custom workouts\nfor a user. A user can also track progress\nand view past workouts.",
    image: "../images/gym.jpg",
    link: "https://github.com/SetCra123/Gym-Buddy",
  },
  {
    id: 2,
    title: "Dinner SOS",
    description: "This is a colloborative project,\nwhere we designed an app to help\nindecisive eaters find something or\ncsomewhere to eat.",
    image: "../images/dinner.jpg", 
    link: "https://github.com/SetCra123/Dinner_SOS",
  },
  {
    id: 3,
    title: "JoonSTREAMS",
    description: "This is an app, where I use the MERN stack\nto create a video streaming site.\nCurrently in development.",
    image: "../images/Streaming.jpg", 
    link: "https://github.com/SetCra123/JoonStreams",
  },
  {
    id: 4,
    title: "Senpai Social",
    description: "This is a collaborative project\nwhere we created a Social Network for Anime users\nwith full CRUD capabilities.",
    image: "../images/SenpaiSocial.png", 
    link: "https://github.com/justmacn/Senpai-Social",
  },
  
];


export default function Portfolio() {

  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false); 
  
  
  return (
   <Container>
   <div className="portfolio-container"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <Row><h2 className="portfolio-title">My Portfolio</h2>
        <div className="portfolio-grid">
        
        {projects.map((item) => (
           
          <div key={item.id} className="portfolio-item">
           <div className="project-content">
            <h3 className="project-title">{item.title}</h3> 
            {item.image && <img src={item.image} alt={item.title} width="40%" max-height="50px" />}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            </div>
            <div className="hidden-description">
            <p className="project-description">{item.description.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
                ))}</p>
            </div>
            
            
          </div>
            
             
        ))}
      
      </div>
    </Row>
      </div>
    
    </Container>
  );
};


