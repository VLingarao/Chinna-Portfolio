import React from "react";
import Revit from "../assets/chinna/logos/revit.png";
import Autocad from "../assets/chinna/logos/autocad.png";
import Skecth from "../assets/chinna/logos/sketchup.png";
import Etabs from '../assets/chinna/logos/ETABS.png';
import Staad from '../assets/chinna/logos/staad-pro.jpg';
import Fusion from '../assets/chinna/logos/fusion-360.png';

import "../styles/Skills.css";

function Skills() {
  const skills = [Revit, Autocad, Skecth, Etabs, Staad, Fusion];
  return (
    <div className="div-skills animate__animated animate__bounce" name="skills">
      <div className="div-main-container">
        <div className="tag-heading">
          <h1><span>Skil</span>ls</h1>
        </div>
        <div className="imgs-main">
          {skills.map((value, index) => (
            <div key={index} className="pic-container">
              <img src={value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

// className="skills-main-container"

