import React from "react";
import iNotebook from "./img/iNotebook.jpeg";
import instagramClone from "./img/instagramClone.jpeg";
import newsMonkey from "./img/newsMonkey.jpeg";
import taskManager from "./img/TaskManager.png";

function Portfolio() {
  return (
    <div>
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
          </div>
        </div>

        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img
                    src={iNotebook}
                    alt="iNotebook platform"
                  />
                  <a href="https://github.com/DevVarma19/iNotebook-React" target="_blank" rel="noreferrer" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">iNotebook </h3>
                        <span className="folio-types">
                          Frontend + Backend developemnt - MERN
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img
                    src={instagramClone}
                    alt="Instagram-Clone"
                  />
                  <a href="https://instagram-bbcc4.web.app/" target="_blank" rel="noreferrer" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Instagram-Clone</h3>
                        <span className="folio-types">
                          Frontend (React.js) + Backend (Firebase)
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img
                    src={newsMonkey}
                    alt="news platform"
                  />
                  <a href="https://github.com/DevVarma19/NewsMonkey-ReactApp" target="_blank" rel="noreferrer"  className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">NewsMonkey </h3>
                        <span className="folio-types">
                          Frontend (React)
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img
                    src={taskManager}
                    alt="taskManager platform"
                  />
                  <a href="https://github.com/DevVarma19/Task-Manager" target="_blank" rel="noreferrer"  className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Task Manager API</h3>
                        <span className="folio-types">
                          Backend (Node.js)
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
