"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroller = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default SmoothScroller;
