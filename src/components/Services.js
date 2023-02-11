import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Services() {
  return (
    <div>
      <section id="services">
        <div className="overlay"></div>

        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Services</h5>
            <h1>What Can I Do For You?</h1>

            <p className="lead">
              I have a wide range of expertise in delivering services to
              clients.
            </p>
          </div>
        </div>

        <div className="row services-content">
          <OwlCarousel className = "owl-carousel services-list" loop nav>
          <div className="service">
              <span className="icon">
                <i className="fa fa-code fa-stack-1x fa-inverse"></i>
              </span>

              <div className="service-content">
                <h3>Web Application Development</h3>

                <p className="desc">
                  Fast, responsive and engaging apps that bring your ideas to
                  life.
                </p>
              </div>
            </div>

            <div className="service">
              <span className="icon">
                <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
              </span>

              <div className="service-content">
                <h3>API Integration & Development</h3>

                <p className="desc">
                  REST API integration. REST API development with Node.js and
                  Express.
                </p>
              </div>
            </div>

            <div className="service">
              <span className="icon">
                <i className="fa fa-database fa-stack-1x fa-inverse"></i>
              </span>

              <div className="service-content">
                <h3>Data Engineering</h3>

                <p className="desc">
                  Develop dashboards to display key aspects from the data
                  provided.
                </p>
              </div>
            </div>

            <div className="service">
              <span className="icon">
                <i className="fa fa-cloud fa-stack-1x fa-inverse"></i>
              </span>

              <div className="service-content">
                <h3>Cloud</h3>

                <p className="desc">
                  Deployment of web apps and databases to leading cloud
                  platforms such as Heroku and Azure Cloud Services.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>

        
      </section>
    </div>
  );
}

export default Services;
