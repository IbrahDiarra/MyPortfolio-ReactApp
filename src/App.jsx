import React from "react";
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";


const App = () =>{
  return (
    <>
      <NavBar/>

      <div className="container">
        <Hero/>
        <Work/>
        <Skills/> 
        <Project/>
        <Contact/>
      </div>

      <Footer/> 

    </>
  ); 
};

export default App;
