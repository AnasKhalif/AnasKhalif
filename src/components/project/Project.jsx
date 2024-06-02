import React from "react";
import "./project.css";
import Project1 from "../../assets/coba1.png";
import Project2 from "../../assets/coba2.png";
import Project3 from "../../assets/coba3.png";

const Project = () => {
  return (
    <section className="project" id="project">
      <div className="container-default">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">
          Here are a few projects I've worked on recently. 🧩
        </span>

        <div className="project__content grid">
          <div className="project__section">
            <img src={Project1} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Bizlook</h4>
                <p>
                  Team project while joining the 1000 start-up digital event, in
                  building a service product marketplace platform.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">React.js</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={Project2} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Kreasijabar</h4>
                <p>
                  A freelancer project that improves the KREASI West Java
                  Creative Economy Actor web features.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">Laravel</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={Project3} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Smandak Learning</h4>
                <p>
                  A thesis project that builds a mobile-based online learning
                  information system at SMAN 1 Cibadak.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Mobile</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">React</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={Project3} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Smandak Learning</h4>
                <p>
                  A thesis project that builds a mobile-based online learning
                  information system at SMAN 1 Cibadak.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Mobile</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">React</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={Project3} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Smandak Learning</h4>
                <p>
                  A thesis project that builds a mobile-based online learning
                  information system at SMAN 1 Cibadak.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Mobile</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">React</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={Project3} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Smandak Learning</h4>
                <p>
                  A thesis project that builds a mobile-based online learning
                  information system at SMAN 1 Cibadak.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Mobile</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">React</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
