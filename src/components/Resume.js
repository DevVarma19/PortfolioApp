import React from "react";

function Resume() {
  return (
    <div>
      <section id="resume" className="grey-section">
        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Full Stack Developer</h3>
                  <p>March 2023 - Present</p>
                </div>

                <div className="timeline-content">
                  <h4>Tikaj</h4>
                  <p>
                    Developed an EASM portal for organizing cyber threat
                    intelligence data, integrating various tools. Additionally,
                    contributed to internal reusable component library using
                    Vue.js to enhance web application development efficiency and
                    development of phishgrid.com's v2, a prominent phishing
                    simulation platform. I worked with technologies such as
                    Node.js, React.js, Vue.js, Python, MongoDB, SQL, Redis, and
                    Git CI/CD, demonstrating a comprehensive skill set.
                  </p>
                </div>
              </div>
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>IT Trainee</h3>
                  <p>June 2022 - Jan 2023</p>
                </div>

                <div className="timeline-content">
                  <h4>FIS Global</h4>
                  <p>
                    Technical Exposure to Spring Boot, Angular, SQL. Worked in
                    agile model to develop and fix issues in the code base of
                    World Pay product. Participated in multiple technical
                    learning events.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Associate Software Engineer</h3>
                  <p>March 2021 - March 2022</p>
                </div>

                <div className="timeline-content">
                  <h4>MAQ Software</h4>
                  <p>
                    Perfomed ETL on huge datasets and created PowerBI reports
                    from scratch. Day to day activities include pulling the raw
                    data from upstream source, applying the required logic and
                    transform the data. Displaying the transformed data in
                    visual format using Power BI. Optimized page load time of
                    Power BI reports. Worked on Azure cloud services, Power BI,
                    DAX, Visual Studio, SSMS, SQL. Awarded{" "}
                    <strong>Spot Award</strong> for my excellent work during my
                    tenure.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>Web Development Intern</h3>
                  <p>April 2020 - Sept 2020</p>
                </div>

                <div className="timeline-content">
                  <h4>Kleen Infosec PVT LTD.</h4>
                  <p>
                    Developed CMS website for the company using HTML, CSS, PHP.
                    Day to day activities included collecting requirements from
                    the lead and developing the features required and getting
                    them reviewed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>B.Tech - Computer Science</h3>
                  <p>August 2018 - May 2022</p>
                </div>

                <div className="timeline-content">
                  <h4>Lovely Professional University</h4>
                  <p>CGPA : 8.14</p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Class XII</h3>
                  <p>April 2018</p>
                </div>

                <div className="timeline-content">
                  <h4>Narayana Junior College</h4>
                  <p>Score : 93%</p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap"></i>
                </div>

                <div className="timeline-header">
                  <h3>Class X</h3>
                  <p>April 2016</p>
                </div>

                <div className="timeline-content">
                  <h4>St. Joseph's High School</h4>
                  <p>CGPA : 9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
