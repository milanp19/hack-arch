"use client  ";
import React, { useEffect, useRef } from "react";
import SimplePeer from "simple-peer";
import { io } from "socket.io-client";

const ScreenReader = () => {
  const peerRef = useRef();
  const socket = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((stream) => {
        peerRef.current = new SimplePeer({
          initiator: true,
          trickle: false,
          stream,
        });
        peerRef.current.on("signal", (data) => {
          socket.current.emit("signal", data);
        });
        peerRef.current.on("stream", (remoteStream) => {
          console.log(remoteStream);
          /*video*/
        });
      })
      .catch((err) => console.log(err));

    socket.current = io.connect("http://localhost:3000");
    socket.current.on("signal", (data) => {
      peerRef.current.signal(data);
    });

    return () => {
      peerRef.current.destroy();
      socket.current.disconnnect();
    };
  });
  return <div>ScreenReader</div>;
};

export default ScreenReader;
