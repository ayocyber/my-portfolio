import React from "react";
import NavBar from "./Component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from "./Component/Banner";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skill/> 
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
