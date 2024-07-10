import React from "react";
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";


const App = () =>{
  return (
    <>
      <NavBar/>

      <div className="container">
        <Hero/>
        <Skills/>
        <Work/>
      </div>

    </>
  ); 
};

export default App;
