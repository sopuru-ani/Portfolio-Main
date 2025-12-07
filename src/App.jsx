import React, { useRef } from "react";

function App() {
  const welcomeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  function scrollTo(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <title>Portfolio</title>
      <div>
        <nav id="navbar">
          <a
            className="nav-link"
            onClick={() => {
              scrollTo(welcomeRef);
            }}
          >
            About
          </a>
          <a
            className="nav-link"
            onClick={() => {
              scrollTo(projectsRef);
            }}
          >
            Work
          </a>
          <a
            className="nav-link"
            onClick={() => {
              scrollTo(contactsRef);
            }}
          >
            Contact
          </a>
          <section id="resume">
            <a href="/resume.pdf" className="resume" target="_blank">
              <i className="fas fa-file-lines"></i>
              <span className="resume-span"> resume</span>
            </a>
          </section>
        </nav>
        <section ref={welcomeRef} id="welcome-section">
          <div className="bg-overlay"></div>
          <img
            src="/silhouette.png"
            height="100%"
            id="image"
            className="imganimate margin"
            alt="Sopuru"
          />

          <div>
            <h1>Hey, I am Sopuru</h1>
            <i>a web developer</i>
          </div>
        </section>

        <section ref={projectsRef} id="projects">
          <h2>These are some of my projects</h2>
          <div id="projects-grid">
            <a
              href="https://qr-manager.net"
              target="_blank"
              className="project-tile"
            >
              <img
                src="/qr-manager.png"
                className="project-images"
                height="80%"
                width="100%"
                style={{ objectPosition: "center top" }}
              />
              <h4>QR manager</h4>
            </a>
            <a
              href="https://sopuru-ani.github.io/tech-doc/"
              target="_blank"
              className="project-tile"
            >
              <img
                src="/tech-doc.png"
                className="project-images"
                height="80%"
                width="100%"
                style={{ objectPosition: "center top" }}
              />
              <h4>Technical documentation page</h4>
            </a>
            <a
              href="https://sopuru-ani.github.io/tribute-page/"
              target="_blank"
              className="project-tile"
            >
              <img
                src="/tribute-page.png"
                className="project-images"
                height="80%"
                width="100%"
                style={{ objectPosition: "center top" }}
              />
              <h4>Tribute page</h4>
            </a>
            <a
              href="https://sopuru-ani.github.io/calculator/"
              target="_blank"
              className="project-tile"
            >
              <img
                src="/calculator.png"
                className="project-images"
                height="80%"
                width="100%"
                style={{ objectPosition: "center top" }}
              />
              <h4>Calculator</h4>
            </a>
          </div>
        </section>

        <section ref={contactsRef} id="contacts">
          <div id="contact-info">
            <div>
              <h2>Interested...?</h2>
              <i>contact me below</i>
            </div>
            <div>
              <a href="https://github.com/sopuru-ani" target="_blank">
                <i className="fab fa-github profile-link"></i> github
              </a>
              <a
                href="mailto:sopuruani41@gmail.com"
                target="_blank"
                id="profile-link"
              >
                <i className="fas fa-at"></i> Send a mail
              </a>
              <a
                href="https://www.linkedin.com/in/sopuru-ani-b286a925a/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </div>
          </div>
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="d00a00f2-2da0-4093-b103-a2361edf98df"
            data-share-badge-host="https://www.credly.com"
          ></div>
          <footer>
            <p>&copy; 2023 Sopuru Ani</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
