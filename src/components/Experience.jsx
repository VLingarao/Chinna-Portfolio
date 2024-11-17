import React from "react";
import "../styles/Experience.css";
import eduskills from '../assets/chinna/eduskills.png';
import skilldzire from "../assets/chinna/skilldzire.png";
function Experience() {
  return (
    <div className="exp-div-container" name="experience">
      <div className="exp-secnd-div">
        <div className="exp-head-text-div">
          <h1>
            <span>Exper</span>ience
          </h1>
        </div>
        <div className="exp-description-div">
          <div className="exp-banner-div">
            <div className="exp-content-div">
              <h1>Skilldzire</h1>
              <h3>3D Printing and design Internshi</h3>
              <ul>
                <li>
                3D Design & Modeling: Learned to design 3D models using various design software, focusing on new and
                innovative design techniques.
                </li>
                <li>
                3D Printing Concepts: Gained an understanding of 3D printing principles, including different printing
                technologies, materials, and the steps involved in the 3D printing process.
                </li>
              </ul>
            </div>
            <div className="exp-company-pic">
              <img src={skilldzire} />
            </div>
          </div>

          <div className="exp-banner-div">
            <div className="exp-content-div">
              <h1>AICTE</h1>
              <h3>STAAD.Pro Internship</h3>
              <ul>
                <li>
                Structural Analysis & Design: Gained hands-on experience in performing structural analysis and designing
                structural elements using STAAD.Pro, focusing on both new and existing designs.
                </li>
                <li>
                Report Generation: Developed proficiency in generating detailed reports that summarize analysis results,
                calculations, and design checks in a clear and professional format.
                </li>
              </ul>
            </div>
            <div className="exp-company-pic">
              <img src={eduskills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
