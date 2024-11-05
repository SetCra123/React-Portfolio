import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import { Container, Row, Col, } from 'react-bootstrap';  // Import React Bootstrap components
import Logo from '../components/Logo'

export default function Home() {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    
    return (
        <Container>
         <Row>
            <Col md={6}>
            <div className="about-container">
            <h1 className="content-wrapper">Setrige W. Crawford Jr.</h1>
            <p className="about-text">I am a developer from Brooklyn, NY, who used to be a teacher and a Journalist. I taught
                middle-school Math and Coding. enjoy building apps, shooting video and 
                playing sports. Through my Content Creation agency, Culture Media, I've shot 
                everything from sports to events to commercials. I also played semi-pro football in New York City for a decade.
                I also love flying my drone and getting epic aerial footage. I spend alot 
                of time with my kids, Amara and Setrige III. I love reading, excercising, watching anime
                and doing fun, silly activities with my kids.</p>
                <div className="hidden-nav">
                  <div md={3} className="box1">Portfolio</div>
                  <div md={3} className="box2">Resume</div>
                  <div md={3} className="box3">Contact</div>
                  <div md={3} className="box4">Technologies</div>
                </div>
              </div>
            </Col> 
            <Col md={6}>
             <div className="logo-container">
              <Logo />
            </div>
            </Col>
         </Row>
        </Container>
        
        
        
        
    
        
    );
}

