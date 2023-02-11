import React, { useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Services from "./Services";

function Home() {

  const about = useRef(null);

  return (
    <>
    <NavBar/>
    <Intro about = {about}/>
    <About about = {about}/>
    <Resume/>
    <Services/>
    {/* TODO: Portfolio */}
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Home;
