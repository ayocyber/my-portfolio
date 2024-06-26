import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import header_img from "../asset/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Banner = () => {
    const [loopNum , setLoopNum] = React.useState(0)
    const [isDeleting, setIsdeleting] = React.useState(false)
    const toRotate = ["Web Developer", "Fornt-End Dev", "Web Designer"]
    const [text , setText] = React.useState("")
    const [delta , setdelta] = React.useState(300 - Math.random() * 100)
    const period = 2000

    React.useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delta )

        return ()=> {clearInterval(ticker)}
    },[text])


    function tick(){
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : 
        fullText.substring(0, text.length +1)

        setText(updateText)

        if(isDeleting){
            setdelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updateText === fullText ){
            setIsdeleting(true)
            setdelta(period)
        }else if (isDeleting && updateText === ""){
            setIsdeleting(false)
            setLoopNum(loopNum + 1)
            setdelta(500)
        }
    }
  return (
    <div>
      <section className='banner' id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <div className="">
                    <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Ayo `}<span className='wrap'>{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore nisi amet magnam laboriosam, architecto incidunt quas placeat odio adipisci nobis suscipit eligendi ullam porro illum cumque consectetur molestiae quae.</p>
                    <button onClick={()=>console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/> </button>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={header_img} alt='header Img'/>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Banner
