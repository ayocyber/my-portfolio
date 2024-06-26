import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../asset/img/meter1.svg"
import meter2 from "../asset/img/meter2.svg"
import meter3 from "../asset/img/meter3.svg"

const Skill = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skill'>
      <Container>
        <Row>
            <Col>
            <div className='skill-bx '>
                <h2>
                    Skills 
                </h2>
                <p> My skill set includes front-end development and web design, enabling me to build engaging user interfaces and seamless user experiences.</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                        <img src={meter1} alt=''/>
                        <h5>Web Development</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt=''/>
                        <h5>Brand Identity</h5>
                    </div>
                    <div className='item'>
                        <img src={meter3} alt=''/>
                        <h5>Logo Design</h5>
                    </div>
                    <div className='item'>
                        <img src={meter1} alt=''/>
                        <h5>Web Development</h5>
                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
      </Container>
      <img className='background-image-left' src=''/>
    </section>
  )
}

export default Skill
