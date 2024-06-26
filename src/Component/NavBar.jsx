import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../asset/logo.svg"
import navIcon1 from "../asset/img/nav-icon1.svg"
import navIcon2 from "../asset/img/nav-icon2.svg"
import navIcon3 from "../asset/img/nav-icon3.svg"


const NavBar = () => {
  const [activeLink , setAtiveLink] = React.useState("home")
  const [scrolled , setScrolled] = React.useState(false)


  React.useEffect(()=>{
    const onScroll =() =>{
      if(window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
      window.addEventListener("scroll", onScroll)
      return ()=> window.removeEventListener("scroll", onScroll)
  },[])

  function onUpdateActiveLink(value){
    setAtiveLink(value)
  }
  
  return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
             onClick={()=>onUpdateActiveLink=("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#home" className={activeLink === "Skill" ? "active navbar-link" : "navbar-link"}
            onClick={()=>onUpdateActiveLink=("home")}>
              Skill
            </Nav.Link>
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
            onClick={()=>onUpdateActiveLink=("home")}>
              Project
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href=''> <img src={navIcon1} alt='icon'/></a> 
                <a href=''> <img src={navIcon2} alt='icon'/></a>
                <a href=''> <img src={navIcon3} alt='icon'/></a>
            </div>
            <button className='vvd' onClick={()=>console.log("connect")}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
