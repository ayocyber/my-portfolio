import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contact_img from "../asset/img/contact_img.svg"

const Contact = () => {
    const formInitialDetails = {
        firsName : "",
        lastName : "",
        email : "",
        phone : "",
        message : ""
    }

const [formDetails , setFormDetails] = React.useState(formInitialDetails)
const [buttonText , setButtonText] = React.useState("Send")
const [status, setStatus] = React.useState({})


function onformUpdate(category, value){
    setFormDetails({
        ...formDetails,
        [category] : value
    })
}

async function handleSubmit(e){
    e.preventDefault()
    setButtonText("Sending....")
    let response = await fetch("http://localhost:500/contact",{
        method : "POST",
        headers :{
            "Content-Type" : "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
    })
    setButtonText("Send ")
    let result = response.json()
    setFormDetails(formInitialDetails)
    if(result.code === 200){
        setStatus({success : true, message : "Message sent successfully"})
    }else{
        setStatus({success : false, message : "someting went wrong please try again later."})
    }
}
  return (
   <section className='contact' id='contact'>
         <Container>
            <Row className='align-item-center'>
                <Col md={6}>
                    <img src={contact_img} alt='Contact us'/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input 
                                type='text' 
                                value={formDetails.firsName}
                                placeholder='First Name'
                                onChange={(e)=>onformUpdate("firstName", e.target.value)}
                                />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input 
                                type='text' 
                                value={formDetails.lastName}
                                placeholder='Last Name'
                                onChange={(e)=>onformUpdate("lastName", e.target.value)}
                                />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input 
                                type='email' 
                                value={formDetails.email}
                                placeholder='Email'
                                onChange={(e)=>onformUpdate("email", e.target.value)}
                                />
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input 
                                type='tel' 
                                value={formDetails.phone}
                                placeholder='Phone no'
                                onChange={(e)=>onformUpdate("phone", e.target.value)}
                                />
                            </Col>
                            <Col>
                                <textarea 
                                rows={6} 
                                value={formDetails.message}
                                placeholder='Message'
                                onChange={(e)=>onformUpdate("message", e.target.value)}
                                ></textarea>
                                <button type='submit'>{buttonText}</button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger" : "success" }>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
         </Container>
   </section>
  )
}

export default Contact
