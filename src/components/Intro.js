import React from "react";
import { leetcodeURL, twitterURL, linkedinURL, githubURL } from "../var";

function Intro(props) {

  const scrollToSection = (eRef) => {
    window.scrollTo({
      top: eRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>I'm Varma M.</h1>

              <p className="intro-position">
                <span>full stack web developer.</span>
                <br />
                <span> Welcome to my portfolio !</span>
              </p>

              <button className="button stroke smoothscroll" title="" onClick={() => scrollToSection(props.about)}>
                More About Me
              </button>
            </div>
          </div>
        </div>

        <ul className="intro-social">
          <li>
            <a href={twitterURL}  target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={linkedinURL}  target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href={githubURL}  target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href={leetcodeURL} target="_blank" rel="noreferrer">
              <i className="fa fa-code"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Intro;
