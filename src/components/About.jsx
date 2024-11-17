import React from "react";
import "../styles/About.css";
import aboutimg from '../assets/manwithlaptop.png';
function About() {
  return (
    <div className="main-container" id="card-main-container" name="about">
      <div className="card-container">
        <div className="img-container">
          <img src={aboutimg} />
        </div>
        <div className="div-description">
          <h1>
            <span className="spam-tag">About</span> Me!!
          </h1>
          <p>
          I am a passionate and skilled professional in Architecture and 3D Design, 
          with expertise in both design and structural analysis. Proficient in tools 
          like Revit, AutoCAD, and SketchUp, I bring creative ideas to life with precision 
          and functionality. Additionally, my knowledge of STAAD.Pro and ETABS enables me to 
          ensure structural integrity and efficiency in my projects. I am dedicated to delivering 
          innovative and sustainable design solutions that combine aesthetics with technical excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
