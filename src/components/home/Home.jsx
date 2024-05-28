import React from "react";
import "./home.css";
import Data from "./Data";
import Skill from "./Skill";

const Home = () => {
  return (
    <section className="home__section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__img"></div>

          <Data />
        </div>
        <Skill />
      </div>
    </section>
  );
};

export default Home;
