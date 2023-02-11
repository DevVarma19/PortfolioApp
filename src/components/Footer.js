import React from "react";
import { leetcodeURL, twitterURL, linkedinURL, githubURL } from "../var";

function Footer() {
  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-six tab-full pull-right social">
            <ul className="footer-social">
              <li>
                <a href={twitterURL} target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={linkedinURL} target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={githubURL} target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href={leetcodeURL} target="_blank" rel="noreferrer">
                  <i className="fa fa-code"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-eight tab-full">
            <div className="copyright">
              <span></span>
              <span>© Copyright 2023 </span>
              <span></span>
            </div>
          </div>

          <div id="go-top">
            <a
              className="smoothscroll"
              title="Back to Top"
              onClick={() => scrollToSection()}
            >
              <i className="fa fa-long-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
