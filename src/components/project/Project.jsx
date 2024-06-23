import React from "react";
import "./project.css";
import Netflix from "../../assets/Netflix-Api.png";
import VetForHealth_Company from "../../assets/VetForHealth_Company.png";
import SiAkad from "../../assets/Si-Akad.png";
import StokBarang from "../../assets/StokBarang.png";
import CoffeKasir from "../../assets/CoffeKasir.png";
import VetForHealth from "../../assets/VetForHealth.png";

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
            <img src={VetForHealth_Company} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>VetForHealth Company</h4>
                <p>
                  building a company profile website i implementation from the
                  UI/UX design team.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">Bootstrap</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={VetForHealth} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>VetForHealth Sisfo</h4>
                <p>
                  project to build an information system for animal data
                  collection, milk analysis and health analysis recap at Dinas
                  Peternakan Batu Kab.Malang.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">CodeIgniter</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={Netflix} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Netflix-Api</h4>
                <p>
                  Netflix-APi project exercises using react based on themoviedb
                  API.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
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
            <img src={CoffeKasir} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>CoffeKasir</h4>
                <p>
                  Project-based learning assignment 2 cafe cashier PHP
                  programming language semester 2 Brawijaya University.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">PHP</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={StokBarang} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Si-StokBarang</h4>
                <p>
                  Freelance project to build a stock information system at
                  Punden Tani.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">PHP</p>
                  <p className="platform__subtitle">Tech stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__section">
            <img src={SiAkad} alt="" className="project__img" />
            <div className="project__transition">
              <div className="project__deskription">
                <h4>Si-Akad</h4>
                <p>
                  project exercise to build an academic information system,
                  lecture case study.
                </p>
              </div>
              <div className="project__tech">
                <div className="platform">
                  <p className="platform__title">Web</p>
                  <p className="platform__subtitle">Platform based</p>
                </div>
                <div className="stack">
                  <p className="platform__title">CodeIgniter</p>
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
