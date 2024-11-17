import React from "react";
import "../styles/Banner.css";
import Typing from 'react-typing-effect';
// import BannerOne from "../assets/bannerpixletwo.jpg"
// import BannerTwo from "../assets/bannerpixleone.jpg"
import resume from '../assets/chinna/somarajuandugulapatiresume.pdf';

function Banner() {
  return (
    <div className="frist-div-container">
      <div className="secnd-div-container">
        <div className="third-heading-div">
          <div className="fourth-div-heading">
            <div className="content-div-heading">
              <h1>Hello!! I'm</h1>
            </div>
            <div className="content-div-heading-2">
              <h1>
                <h1>
                  <span className="name-heading-span">Somaraju</span>
                 <h1 style={{fontSize:'25px',fontWeight:'bolder'}}>
                  <Typing
                      text={['Architecture !', 'Welcome to my site!','3D Designer']}
                      speed={100}
                      eraseSpeed={50}
                      eraseDelay={1000}
                      typingDelay={500}
                    />
                 </h1>
                </h1>
              </h1>
            </div>
            <div className="content-div-heading-3">
              <p>
              Creative and detail-oriented 3D Designer with expertise in Revit, AutoCAD, 
              and SketchUp. Passionate about transforming ideas into visually stunning and 
              functional designs, blending artistic vision with technical precision.
              </p>
            </div>
          </div>

          <div className="screen-button-div-main">
            <button className="screen-button-div-1">
              <a href={resume} download={true} target="_black">Resume</a>
              </button>
            <button className="screen-button-div-2">
              <a href="mailto:somarajuarchitecture3d@gmail.com" target="_black">Hire Me!!</a>
            </button>
          </div>
        </div>
      </div>

      <div className="screen-pic-div-main">
        <div className="screen-pic-div-1">
          <div className="screen-scend-pic-div-1">
            <img src={"https://i.pinimg.com/originals/c9/69/9d/c9699d1817617ab88690ab84019854cd.jpg"} />
          </div>
        </div>
        <div className="screen-scend-pic-div-2">
          <img src={"https://img.freepik.com/premium-photo/architectural-technical-drawing-computer-screen-new-house-design_1066593-4211.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default Banner;


