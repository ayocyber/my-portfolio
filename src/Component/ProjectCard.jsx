import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
// import './ProjectCard.css'; // Make sure to import the CSS file below!

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    // Added bottom margin (mb-4) and responsive breakpoints
    <Col sm={12} md={6} lg={4} className="mb-4">
      <Card className="project-card h-100 shadow-sm border-0">
        <div className="img-container overflow-hidden">
          <Card.Img 
            variant="top" 
            src={imgUrl} 
            alt={`${title} project preview`} 
            className="project-img"
          />
        </div>
        
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">
            {description}
          </Card.Text>
          
          <Button 
            variant="outline-primary" 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto rounded-pill fw-semibold"
          >
            View Project
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;