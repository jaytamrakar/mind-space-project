import React from "react";
import "./Main.css";
//import icons
import camera from "./icons/camera.png";
import mic from "./icons/mic.png";
import phone from "./icons/phone.png";

const Main = () => {
  return (
    <>
      <div className="max-h-fit">
        <div id="videos" className="">
          <video
            className="video-player"
            id="user-1"
            autoPlay=""
            playsInline=""
          />
          <video
            className="video-player"
            id="user-2"
            autoPlay=""
            playsInline=""
          />
        </div>
        <div id="controls">
          <div className="control-container" id="camera-btn">
            <img src={camera} />
          </div>
          <div className="control-container" id="mic-btn">
            <img src={mic} />
          </div>
          <a href="#">
            <div className="control-container" id="leave-btn">
              <img src={phone} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
