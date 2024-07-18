import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title , description ,  imgUrl ,  links}) => {
  return (
  <Col sm={6} md={4}>
    <div className='proj-imgbx'>
        <img src={ imgUrl}/>
        <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
            <a href={links}>{links}</a>
        </div>
    </div>
  </Col>
  )
}

export default ProjectCard
