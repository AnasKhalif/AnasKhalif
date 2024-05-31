import React, { useState } from "react";
// import { useState } from "react";
import "./about.css";

const Journey = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="journey">
      <div className="journey__container container">
        <div className="journey__tabs">
          <div
            className={
              toggleState === 1
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap journey__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt journey__icon"></i> Experience
          </div>
        </div>

        <div className="journey__sections">
          <div
            className={
              toggleState === 1
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            <div className="journey__data">
              <div>
                <h3 className="journey__title">Teknologi Informasi</h3>
                <span className="journey__subtitle">Brawijaya University</span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Now
                </div>
              </div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>

            <div className="journey__data">
              <div></div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>

              <div>
                <h3 className="journey__title">MIPA</h3>
                <span className="journey__subtitle">SMAN 1 PAPAR</span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            <div className="journey__data">
              <div></div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>

              <div>
                <h3 className="journey__title">Full - Stack Web Developer</h3>
                <span className="journey__subtitle">
                  Dinas Peternakan Kab.Batu Malang
                </span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"></i> Maret 2024 - Now
                </div>
              </div>
            </div>

            <div className="journey__data">
              <div>
                <h3 className="journey__title">Full - Stack Web Developer</h3>
                <span className="journey__subtitle">CV. Punden Tani</span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"></i> 4 Months
                </div>
              </div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>

            <div className="journey__data">
              <div></div>

              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>

              <div>
                <h3 className="journey__title">Data Entry</h3>
                <span className="journey__subtitle">CV. Punden Tani</span>
                <div className="journey__calender">
                  <i className="uil uil-calendar-alt"></i> 2 months
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
