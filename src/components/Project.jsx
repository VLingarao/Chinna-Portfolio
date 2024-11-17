import React from "react";
import "../styles/Project.css";
import Carousel from "react-bootstrap/Carousel";

import itsmeimg from "../assets/amanwithlapto.png";

import project1 from "../assets/chinna/certi/3D Printing-SkillDzire_page-0001.jpg";
import project2 from "../assets/chinna/certi/AutoCAD beginner ASR_page-0001.jpg";
import project3 from "../assets/chinna/certi/AutoCAD Advance ASR_page-0001.jpg";
import project4 from "../assets/chinna/certi/AWS cloud-AICTE_page-0001.jpg";
import project5 from "../assets/chinna/certi/Full SWD-Edureka_page-0001.jpg";
import project6 from "../assets/chinna/certi/Fusion 360 1st curtificate_page-0001.jpg";
import project7 from "../assets/chinna/certi/Fusion 360 2nd curtificate_page-0001.jpg";
import project8 from "../assets/chinna/certi/Revit-ISB_page-0001.jpg";
import project9 from "../assets/chinna/certi/STAAD.Pro-AICTE_page-0001.jpg";

function Project() {
  const projects = [
    {
      img: project1,
      name: "3D Printing and Design",
    },
    {
      img: project2,
      name: "AutoCAD beginner",
    },
    {
      img: project3,
      name: "AutoCAD Advance",
    },
    {
      img: project4,
      name: "AWS cloud",
    },
    {
      img: project5,
      name: "full Stack Web Develpment",
    },
    {
      img: project6,
      name: "Fusion 360 Part 1",
    },
    {
      img: project7,
      name: "Fusion 360 Part 2",
    },
    {
      img: project8,
      name: "Autodesk Revit",
    },
    {
      img: project9,
      name: "STAAD.Pro",
    },
  ];

  return (
    <div className="project-div-main" id="project-div-main" name="projects">
      <div className="project-scend-div-container">
        <div className="project-card-text-container">
          <h1>
            <span className="project-div-span">Certif</span>icate
          </h1>
          <div className="carousel-div">
            <Carousel>
              {projects.map((project, index) => (
                <Carousel.Item key={index} interval={1000}>
                  <div className="carousels-data-continer">
                    <div className="carousel-img-div">
                      <img src={project.img} alt={project.name} />
                    </div>
                    <h3>{project.name}</h3>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="project-pics-div">
          <img src={itsmeimg} alt="itsmeimg" />
        </div>
      </div>
    </div>
  );
}

export default Project;
