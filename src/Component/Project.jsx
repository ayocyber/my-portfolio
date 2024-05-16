import React from 'react'
import { Col, Container, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard';
import instagram from  "../asset/img/Instagram.png"
import flight from "../asset/img/flight-booking.png"
import Chat_App from "../asset/img/Chat-App.png"
import Gallery from "../asset/img/Gallery-app.png"


const Project = () => {

    const projects = [
        {
            title : "Instagram Clone",
            description : "Design and development",
            imgUrl : instagram
        },
        {
            title : "Flight Booking website",
            description : "Design and development",
            imgUrl : flight
        },
        {
            title : "Chat APP",
            description : "Messaging website",
            imgUrl : Chat_App
        },
        {
            title : "photo-gallery",
            description : "Photo storage website",
            imgUrl : Gallery
        },
        {
            title : "photo-gallery",
            description : "Design and development",
            imgUrl : instagram
        },
        {
            title : "photo-gallery",
            description : "Design and development",
            imgUrl : instagram
        },
    ]
  return (
   <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia assumenda eius fugiat unde sequi impedit rem aliquam vitae atque ut, officiis excepturi nisi quasi deleniti dolores explicabo consequuntur, nesciunt vero!</p>
                <TabContainer id="projects-tab" defaultActiveKey="first">
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center'id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent>
                        <TabPane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey="second">Lorem Ipsum</TabPane>
                        <TabPane eventKey="third">Lorem Ipsum</TabPane>
                    </TabContent>
                    </TabContainer>
                 
                </Col>
            </Row>
        </Container>
        <img src='' alt='' className='background-image-right'/>
   </section>
  )
}

export default Project
