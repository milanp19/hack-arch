"use client";
import React, { useRef } from "react";

const ScreenReader = () => {
  let videoElem;
  const screen = useRef();

  async function startCapture() {
    try {
      const displayMediaOptions = {
        video: {
          displaySurface: "window",
        },
        audio: false,
      };
      screen.current.srcObject = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );
    } catch (err) {
      console.error(err);
    }
  }

  function stopCapture(evt) {
    let tracks = screen.current.srcObject.getTracks();

    tracks.forEach((track) => track.stop());
    videoElem.srcObject = null;
  }

  return (
    <div>
      <div className="screen_container">
        <video id="remote-video" autoPlay controls ref={screen}></video>
        <br />
        <div className="button_container">
          <button id="start" onClick={startCapture}>
            start
          </button>
          <br />
          <button id="stop" onClick={stopCapture}>
            stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenReader;
