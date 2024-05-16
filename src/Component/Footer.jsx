import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../asset/logo.svg"
import navIcon1 from "../asset/img/nav-icon1.svg"
import navIcon2 from "../asset/img/nav-icon2.svg"
import navIcon3 from "../asset/img/nav-icon3.svg"

const Footer = () => {
  return (
   <footer className='footer'>
    <Container>
        <Row className='align-item-center'>
            <Col sm={6}>
                <img src={logo} alt='Logo'/>
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
                <div className='social-icon'>
                    <a href=''><img src={navIcon1}/></a>
                    <a href=''><img src={navIcon2}/></a>
                    <a href=''><img src={navIcon3}/></a>
                </div>
                <p>CopyRight 2024. All Right Reserved</p>
            </Col>
        </Row>
    </Container>
   </footer>
  )
}

export default Footer
