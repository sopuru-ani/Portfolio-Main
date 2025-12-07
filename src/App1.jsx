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
        <nav className="bg-[linear-gradient(90deg,#c4c4c4_10%,white)] py-0 px-[10em] w-full fixed top-0 left-0 flex align-items-center justify-end z-4 max-sm:justify-center">
          <a
            onClick={() => {
              scrollTo(welcomeRef);
            }}
            className="cursor-pointer text-black font-normal! text-[2.2rem] p-8 relative inline-block after:content[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-[#4a68d6] after:transition-all after:duration-300 hover:after:w-[70%] max-xl:flex-col-reverse"
          >
            About
          </a>
          <a
            onClick={() => {
              scrollTo(projectsRef);
            }}
            className="cursor-pointer text-black font-normal! text-[2.2rem] p-8 relative inline-block after:content[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-[#4a68d6] after:transition-all after:duration-300 hover:after:w-[70%]"
          >
            Work
          </a>
          <a
            onClick={() => {
              scrollTo(contactsRef);
            }}
            className="cursor-pointer text-black font-normal! text-[2.2rem] p-8 relative inline-block after:content[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-[#4a68d6] after:transition-all after:duration-300 hover:after:w-[70%]"
          >
            Contact
          </a>
          <section className="py-0 px-[10em] fixed top-0 left-0 flex align-items-center z-4">
            <a
              href=""
              className="text-black font-normal! text-[2.2rem] p-8 relative inline-block after:content[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-[#4a68d6] after:transition-all after:duration-300! hover:after:w-[70%]"
            >
              <i className="fas fa-file-lines"></i>
              <span className="max-md:hidden"> resume</span>
            </a>
          </section>
        </nav>
        <section
          ref={welcomeRef}
          className="bg-[linear-gradient(90deg,#c4c4c4_10%,white)] relative h-dvh flex flex-row align-items-center justify-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grayscale.png')] bg-cover bg-center blur-[8px] opacity-[0.6] z-1"></div>
          <img
            src="/silhouette.png"
            height="100%"
            className="-mb-5 z-2"
            alt="Sopuru"
          />

          <div className="flex flex-column align-items-center justify-content-center">
            <h1 className="size-[calc(70dvw/16)] text-[#1d1d1d]">
              Hey, I am Sopuru
            </h1>
            <i className="size-[calc(70dvw/32)] text-[#3f3f3f]">
              a web developer
            </i>
          </div>
        </section>

        <section
          ref={projectsRef}
          className="bg-[linear-gradient(90deg,#c4c4c4_10%,white)] py-[100px] px-5 text-center"
        >
          <h2 className="text-center w-max ml-auto mr-auto text-black p-2.5 border-b-2 border-black size-[3dvw]">
            These are some of my projects
          </h2>
          <div className="grid grid-cols-2 gap-7 text-[20px] mt-[35px]">
            <a
              href="https://qr-manager.net"
              target="_blank"
              className="bg-[#a1a1a1] rounded-[5px] overflow-hidden h-[400px] transition-shadow duration-300"
            >
              <img height="80%" width="100%" />
              <h4>QR manager</h4>
            </a>
            <a
              href="https://sopuru-ani.github.io/tech-doc/"
              target="_blank"
              className="bg-[#a1a1a1] rounded-[5px] overflow-hidden h-[400px] transition-shadow duration-300"
            >
              <img height="80%" width="100%" />
              <h4>Technical documentation page</h4>
            </a>
            <a
              href="https://sopuru-ani.github.io/tribute-page/"
              target="_blank"
              className="bg-[#a1a1a1] rounded-[5px] overflow-hidden h-[400px] transition-shadow duration-300"
            >
              <img height="80%" width="100%" />
              <h4>Tribute page</h4>
            </a>
            <a
              href="https://sopuru-ani.github.io/calculator/"
              target="_blank"
              className="bg-[#a1a1a1] rounded-[5px] overflow-hidden h-[400px] transition-shadow duration-300"
            >
              <img height="80%" width="100%" />
              <h4>Calculator</h4>
            </a>
          </div>
        </section>

        <section ref={contactsRef} className="h-dvh bg-[#303841]">
          <div className="h-[calc(100dvh-90px)] py-0 px-5 flex flex-col align-items-center justify-content-center gap-y-10">
            <div>
              <h2>Interested...?</h2>
              <i>contact me below</i>
            </div>
            <div>
              <a href="https://github.com/sopuru-ani" target="_blank">
                <i className="fab fa-github"></i>
                github
              </a>
              <a href="mailto:sopuruani41@gmail.com" target="_blank">
                <i className="fas fa-at"></i>
                Send a mail
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
          <footer className="h-[90px] p-5 border-t-[3px] border-[#c4c4c4] flex">
            <p>&copy 2023 Sopuru Ani</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
