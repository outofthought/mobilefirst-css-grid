import React from "react";

function App() {
  return (
    <div>
      <nav className="site-nav grid">
        <h1>Cosmo Junkie</h1>
        <ul>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="welcome" className="grid">
        <div className="welcome-text">
          <h2>
            Space Enthusiast
            <br />& JavaScript Developer
          </h2>
          <p className="leading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
            consequat.
          </p>
          <a href="#portfolio" className="button">
            View my work
          </a>
        </div>
        <div className="welcome-img">
          <img src="assets/banner_image.png" alt="pic of planet" />
        </div>
      </section>
      <section id="portfolio">
        <h3>Some of my Projects</h3>
        <div className="projects grid">
          <a href="#">
            <img src="assets/project_1.png" alt="space race image" />
            <h4>Space Race Game</h4>
          </a>
          <a href="#">
            <img src="assets/project_2.png" alt="planet boy image" />
            <h4>Planet Boy API</h4>
          </a>
          <a href="#">
            <img src="assets/project_3.png" alt="captain cosmo image" />
            <h4>Captain Cosmo Blog</h4>
          </a>
        </div>
      </section>
      <section id="skills">
        <h3>Things I Can Do</h3>
        <ul className="grid">
          <li>
            <img src="assets/comet_1.svg" alt="comet" />
            <h4>JavaScript</h4>
          </li>
          <li>
            <img src="assets/comet_2.svg" alt="comet" />
            <h4>React</h4>
          </li>
          <li>
            <img src="assets/comet_3.svg" alt="comet" />
            <h4>Firebase</h4>
          </li>
          <li>
            <img src="assets/comet_4.svg" alt="comet" />
            <h4>Flutter</h4>
          </li>
        </ul>
        <p className="leading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          fringilla lacus diam. Mauris fringilla consectetur nibh, sit amet
          tempus augue.
        </p>
      </section>
      <section id="contact">
        <h3>Get In Touch</h3>
        <p className="leading">Lorem ipsum dolor sit amet, consectetur.</p>
        <form>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <textarea placeholder="YOUR MESSAGE"></textarea>
          <button className="button">Send Flare</button>
        </form>
      </section>
      <footer>
        <div className="grid">
          <p className="copyright">Copyright 2020 Cosmo Junkie</p>
          <ul className="social">
            <li>
              <a href="#">
                <img src="assets/icon_fb.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/icon_tw.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
