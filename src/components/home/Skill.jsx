import React from "react";
import CI from "../../assets/ci.jpeg";

function Skill() {
  return (
    <div className="skill">
      <h3>Tech Stack</h3>
      <div className="logo">
        <ul>
          <li>
            <img src="https://skillicons.dev/icons?i=html,css" alt="" />
          </li>
          <li>
            <img src="https://skillicons.dev/icons?i=js,react" alt="" />
          </li>
          <li>
            <img src="https://skillicons.dev/icons?i=figma,sass" alt="" />
          </li>
          <li>
            <img
              src="https://skillicons.dev/icons?i=bootstrap,tailwind"
              alt=""
            />
          </li>
          <li>
            <img src="https://skillicons.dev/icons?i=php,mysql" alt="" />
          </li>
          <li>
            <img src={CI} alt="CodeIgniter and Laravel" />
          </li>
          <li>
            <img src="https://skillicons.dev/icons?i=github,gitlab" alt="" />
          </li>
          <li>
            <img src="https://skillicons.dev/icons?i=postman,docker" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;
