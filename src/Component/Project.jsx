import React from 'react'
import { Col, Container, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard';
import instagram from  "../asset/img/Instagram.png"
import flight from "../asset/img/flight-booking.png"
import Chat_App from "../asset/img/Chat-App.png"
import Gallery from "../asset/img/Gallery-app.png"
import Note_App from "../asset/img/Note-App.png"
import YouTube from "../asset/img/YouTube_Clone.png"
import BugetPlanner from "../asset/img/Budget_Planner.png"
import Hang_man from "../asset/img/Hang_man.png"
import Motivation from "../asset/img/Motivational.png"

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
            title : "Note_App",
            description : "Note App",
            imgUrl : Note_App
        },
        {
            title : "Vid Tube",
            description : "Youtube Clone",
            imgUrl : YouTube
        },
    ]

    const project2 = [
        {
            title : "Budget Planner",
            description : "Budget Planning Website",
            imgUrl : BugetPlanner
        },
        {
            title : "HangMan",
            description : "HangMan Game",
            imgUrl : Hang_man
        },
        {
            title : "Motivational Website",
            description : "Motivational",
            imgUrl : Motivation
            
        }
    ]
  return (
   <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>
                    Here is a selection of some of my recent projects. Each project showcases my skills in design and development, and demonstrates my ability to create functional and visually appealing web applications. Click on each tab to explore the different projects.
                </p>
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
                        <TabPane eventKey="second">
                            <Row>
                                {
                                    project2.map((project, index) =>{
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
                        <TabPane eventKey="third">
                             Additional projects and information will be available soon. Stay tuned for more updates and new exciting projects!
                        </TabPane>
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
