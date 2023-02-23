import React from "react";

function NavBar() {

  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header>
        <div className="row">
          <div className="top-bar">
            <div id="logo" className="logo">
              <a
                onClick={() => scrollToSection()}
                style={{
                  fontFamily: "italic-font",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                VM
              </a>
            </div>

            <nav id="main-nav-wrap">
              <ul className="main-navigation">
                <li className="current">
                  <a className="smoothscroll" href="#intro" title="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about" title="">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume" title="">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio" title="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#services" title="">
                    Services
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact" title="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
