import React from 'react';
import { Col, Container, Row, TabContainer, TabContent, TabPane, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

// Image Imports
import instagram from "../asset/img/Instagram.png";
import flight from "../asset/img/flight-booking.png";
import Chat_App from "../asset/img/Chat-App.png";
import Gallery from "../asset/img/Gallery-app.png";
import Note_App from "../asset/img/Note-App.png";
import YouTube from "../asset/img/YouTube_Clone.png";
import BugetPlanner from "../asset/img/Budget_Planner.png";
import Jobwebsite from "../asset/img/Job-website.png";
import Hang_man from "../asset/img/Hang_man.png";
import Motivation from "../asset/img/Motivational.png";

// Import custom CSS
// import './Project.css';

const Project = () => {
  const projects = [

    {
      title: "Job website",
      description: "Backend development",
      imgUrl: Jobwebsite,
      link: "https://pixel-position-t9ce.onrender.com/"
    },
  
    {
      title: "Flight Booking Website",
      description: "Design and development",
      imgUrl: flight,
      link: "https://flight-booking-website-eta.vercel.app/"
    },
    {
      title: "Chat App",
      description: "Messaging website",
      imgUrl: Chat_App,
      link: "https://chat-website-three.vercel.app/"
    },
    {
      title: "Photo Gallery",
      description: "Photo storage website",
      imgUrl: Gallery,
      link: "https://photo-gallery-sepia-seven.vercel.app/"
    },
   
    {
      title: "Vid Tube",
      description: "Youtube Clone",
      imgUrl: YouTube,
      link: "https://youtube-clone-virid-six.vercel.app/"
    },
  ];

  const project2 = [
    {
      title: "Budget Planner",
      description: "Budget Planning Website",
      imgUrl: BugetPlanner,
      link: "https://expense-tracker-pi-gules.vercel.app/"
    },

      {
      title: "Instagram Clone",
      description: "Design and development",
      imgUrl: instagram,
      link: "https://instagram-clone-gilt-eta.vercel.app/"
    },
   
  ];

  return (
    <section className="project-section py-5" id="projects">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="display-5 fw-bold mb-3">My Projects</h2>
            <p className="text-muted fs-5">
              Here is a selection of some of my recent projects. Each project showcases my skills in design and development, demonstrating my ability to create functional and visually appealing web applications.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <TabContainer id="projects-tab" defaultActiveKey="web-apps">
              <Nav 
                variant="pills" 
                className="custom-nav-pills justify-content-center mb-5" 
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="web-apps">Web Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="games-utils">Games & Utils</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
                </Nav.Item>
              </Nav>

              <TabContent className="project-tab-content">
                <TabPane eventKey="web-apps">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={`web-${index}`} {...project} />
                    ))}
                  </Row>
                </TabPane>
                
                <TabPane eventKey="games-utils">
                  <Row>
                    {project2.map((project, index) => (
                      <ProjectCard key={`game-${index}`} {...project} />
                    ))}
                  </Row>
                </TabPane>
                
                <TabPane eventKey="upcoming">
                  <div className="upcoming-state text-center py-5">
                    <h4 className="fw-semibold text-secondary mb-3">More to Come!</h4>
                    <p className="text-muted">
                      Additional projects and information will be available soon. Stay tuned for updates and new exciting releases.
                    </p>
                  </div>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;