import React from "react";
import GitHubCalendar from "react-github-calendar";

function Contact() {
  return (
    <div>
      <section id="contact">
      <div className="section-intro">
      <h5>Days I Code</h5>
      <GitHubCalendar username="devvarma19" color={"#fed136"} blockSize={20} blockRadius={4} blockMargin={6}/>
      </div>
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
          </div>
        </div>

        <div className="row contact-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-pin"></i>
            </div>

            <h5>Where to find me</h5>

            <p>India</p>
          </div>

          <div className="col-four tab-full collapse">
            <div className="icon">
              <a href="mailto:varma.dev.01@gmail.com">
                <i className="icon-mail"></i>
              </a>
            </div>

            <h5>Email Me At</h5>

            <p>varma.dev.01@gmail.com</p>
          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <a href="tel:+919666855044">
                <i className="icon-phone"></i>
              </a>
            </div>

            <h5>Call Me At</h5>

            <p>Phone: (+91) 9666855044</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
