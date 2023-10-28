"use client";
import React, { useEffect, useRef, useState } from "react";
import SimplePeer from "simple-peer";
import { io } from "socket.io-client";

const ScreenReader = () => {
  let videoElem;
  const screen = useRef();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    //     peerRef.current = new SimplePeer({
    //       initiator: true,
    //       trickle: false,
    //       stream,
    //     });
    //     peerRef.current.on("signal", (data) => {
    //       socket.current.emit("signal", data);
    //     });
    //     peerRef.current.on("stream", (remoteStream) => {
    //       const remoteVideo = document.getElementById("remote-video");
    //       console.log(remoteVideo);
    //       remoteVideo.src = remoteStream;
    //     });
    //   })
    //   .catch((err) => console.log(err));

    // socket.current = io.connect("http://localhost:5000");
    // socket.current.on("signal", (data) => {
    //   peerRef.current.signal(data);
    // });

    // return () => {
    //   if (peerRef.current) {
    //     peerRef.current.destroy();
    //   }
    //   if (socket.current) {
    //     // socket.current?.disconnnect();
    //

    return () => setMounted(false);
  }, []);

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
      {mounted && (
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
      )}
    </div>
  );
};

export default ScreenReader;
