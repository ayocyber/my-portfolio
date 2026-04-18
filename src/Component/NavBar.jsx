import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from "../asset/img/nav-icon1.svg"
import navIcon2 from "../asset/img/nav-icon2.svg"
import navIcon3 from "../asset/img/nav-icon3.svg"


const NavBar = () => {
  const [activeLink, setAtiveLink] = React.useState("home")
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function onUpdateActiveLink(value) {
    setAtiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#skill" className={activeLink === "Skill" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("Skill")}>
              Skill
            </Nav.Link>
            <Nav.Link href="#project" className={activeLink === "Project" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("Project")}>
              Project
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/ayomide-lawal-645237298/' target='_blank' rel='noopener noreferrer'> <img src={navIcon1} alt='icon' /></a>
              <a href='https://github.com/ayocyber' target='_blank' rel='noopener noreferrer'> <img src={navIcon2} alt='icon' /></a>
              <a href='https://twitter.com/LawalAyomide' target='_blank' rel='noopener noreferrer'> <img src={navIcon3} alt='icon' /></a>
            </div>
            <button className='vvd' onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar