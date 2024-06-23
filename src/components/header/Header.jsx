import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          AnasKhalif
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={closeMenu}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#project" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
