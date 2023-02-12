import React from "react";
import profilePic from "./img/profile-pic.jpeg";
import { resumeURL } from "../var";

function About(props) {
  return (
    <div>
      <section ref={props.about} id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>

            <div className="intro-info">
              <img
                src={profilePic}
                alt="Profile Picture"
                style={{
                  objectFit: 'contain',
                }}
              />

              <p className="lead">
                Hi there! I am a Fullstack developer worked in Node.js, React
                JS, Spring Boot, Azure Cloud Services. I have 2+ years of
                development experience building fullstack products, performing
                ETL and developing Power BI dashboards, working with a variety
                of databases and more recently developing web applications with
                React JS.
              </p>
            </div>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>

            <ul className="info-list">
              <li>
                <strong>Name:</strong>
                <span>Mandapati Varma</span>
              </li>
              <li>
                <strong>Job:</strong>
                <span>
                  IT Trainee <small>@ FIS</small>
                </span>
              </li>
              <li>
                <strong>Website:</strong>
                <span>www.devvarma.in</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>varma.dev.01@gmail.com</span>
              </li>
              <li>
                <strong>Work Experience:</strong>
                <span>2 Years</span>
              </li>
            </ul>
          </div>

          <div className="col-six tab-full">
            <h3>Skills</h3>

            <ul className="skill-bars">
              <li>
                <div className="progress percent70">
                  <span>70%</span>
                </div>
                <strong>React JS</strong>
              </li>
              <li>
                <div className="progress percent75">
                  <span>75%</span>
                </div>
                <strong>Node.js</strong>
              </li>
              <li>
                <div className="progress percent80">
                  <span>80%</span>
                </div>
                <strong>Java</strong>
              </li>
              <li>
                <div className="progress percent70">
                  <span>70%</span>
                </div>
                <strong>Laravel</strong>
              </li>
              <li>
                <div className="progress percent75">
                  <span>75%</span>
                </div>
                <strong>Data Structures & Algo</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="row button-section">
          <div className="col-twelve">
            <a
              href="mailto:varma.dev.01@gmail.com"
              title="Hire Me"
              className="button stroke smoothscroll"
            >
              Contact Me
            </a>
            <a href={resumeURL} title="Download CV" className="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
