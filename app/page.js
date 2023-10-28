"use client";
import React from "react";

import { useLottie } from "lottie-react";
import { motion } from "framer-motion";

import animoldman from "@/public/animoldman.json";
import animationuser from "@/public/animationuser.json";
import animationpremium from "@/public/animpremium.json";
import Navbar from "./components/Navbar";

const page = () => {
  const options1 = {
    animationData: animoldman,
    loop: true,
  };

  const { View: view1 } = useLottie(options1);

  const options2 = {
    animationData: animationuser,
    loop: true,
  };

  const { View: view2 } = useLottie(options2);

  const options3 = {
    animationData: animationpremium,
    loop: true,
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };

  const { View: view3 } = useLottie(options3);

  return (
    <>
    <Navbar />
    <div class="container">
      <img src="/expertialogo.png"></img>
      <h1 className="heading heading_1">Expertia</h1>
      <h3 className="heading"> -Where Expertise Meets Experience</h3>

      <div className="anim_container">
        <motion.div
          className="anim_text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div class="animation_1">{view1}</div>
          <div className="hometext1">
            <h2>
              Retired? Your wisdom is a treasure, timeless and invaluable.{" "}
            </h2>
            <p>
              At Expertia, we invite you to join us, guide the curious minds,
              and let your knowledge shine. We believe that every experience
              you’ve gathered, every lesson you’ve learned, and every insight
              you’ve gained has the power to enlighten and inspire.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="anim_text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div class="animation_2">{view2}</div>
          <div className="hometext2">
            <h2>Need expert guidance to navigate the world of work? </h2>
            <p>
              Embark on your professional journey with Expertise your trusted
              partner for success. As a young professional, you’re on the
              threshold of a world full of possibilities. <br /> We’re here to
              ensure you navigate it with the wisdom of experienced experts from
              various fields.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="anim_text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div class="animation_3">{view3}</div>
          <div className="hometext3">
            <h2>
              Unlock Your Potential with Expertise: Premium Features for a
              Premium Experience{" "}
            </h2>
            <p>
              Our premium features are designed to enhance this belief. For
              young professionals, we offer priority access, exclusive webinars,
              personalized learning paths, and premium support.{" "}
            </p>
          </div>
        </motion.div>
      </div>
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>About Us</h2>
        <div>
          <p>
            Have you ever wished you could get guidance from someone who has
            been there and done that? Someone who has retired from their field
            of expertise and has a wealth of knowledge and experience to share?
            If yes, then you will love our platform: <b>Expertia</b>, brings
            together retired experts from various fields, such as teachers,
            architects, doctors, financial experts, etc., to offer their wisdom,
            guidance, and services to individuals seeking assistance.{" "}
            <b>Expertia</b> connects you with experienced professionals who are
            eager to share their knowledge and expertise with upcoming young
            professionals in the corresponding fields. <b>Expertia</b> is more
            than just a platform; it’s a community of wisdom seekers and wisdom
            givers.
          </p>
        </div>
      </motion.section>
    </div>
    </>
  );
};

export default page;
