import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import HeroSection from "./Pages/HeroSection";
import AboutMe from "./Pages/AboutMe";
import MySkills from "./Pages/MySkills";
import ContactMe from "./Pages/ContactMe";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="App">
      
        <div>
          <Navbar />
        <HeroSection />
      <AboutMe />
      <MySkills />
      <ContactMe/>
      <Footer/>
          
        </div>
    
    </div>
  );
}

export default App;
