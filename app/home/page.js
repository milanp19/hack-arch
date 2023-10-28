"use client"
import React, { useEffect } from 'react'

import { useLottie } from 'lottie-react'

import animoldman from '@/public/animoldman.json'
import animationuser from '@/public/animationuser.json'
import animationpremium from '@/public/animpremium.json'

import {motion, useMotionValue, useTransform, animate} from 'framer-motion'
import { light } from '@mui/material/styles/createPalette'



const page = () => {
    const options1 = {
        animationData: animoldman,
        loop: true

    }

    const {View: view1} = useLottie(options1)

    const options2 = {
        animationData: animationuser,
        loop: true
    }

    const {View:view2} = useLottie(options2) 

    const options3 = {
        animationData:  animationpremium ,
        loop: true

    }

    const cursorVariants = {
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
          }
        }
      };

    const {View: view3} = useLottie(options3)

  return (
    <div class="container">
            <img src="/expertialogo.png"></img>
            <h1 className='heading'>Expertia</h1>
            <h3 className='heading'> -Where Expertise Meets Experience</h3>
            
        <div className='anim_container'>
            <div className='anim_text'>
                <div class="animation_1">
                {view1}
                </div>
                <div className="hometext1">
                    <h2>Retired? Your wisdom is a treasure, timeless and invaluable. </h2>
                    <p>At Expertia, we invite you to join us,<br></br>guide the curious minds,<br></br>and let your knowledge shine.<br></br>We believe that every experience you’ve gathered,<br></br>every lesson you’ve learned,<br></br>and every insight you’ve gained has the power to enlighten and inspire.<br></br>So come aboard, let’s embark on this journey of knowledge sharing together.<br></br>Your expertise can light the way for those eager to learn.<br></br>Join Expertia - where your wisdom shapes the future.</p>
                </div>
            </div>
            <div className='anim_text'>
                <div class="animation_2">
                {view2}
                </div>
                <div className="hometext1">
                    <h2>Need expert guidance to navigate the world of work? </h2>
                    <p>Embark on your professional journey with Expertise your trusted partner for success. As a young professional, you’re on the threshold of a world full of possibilities. We’re here to ensure you navigate it with the wisdom of experienced experts from various fields.<br/>“Experience the power of Expert Guidance, enjoy the confidence of a Trustworthy platform, and benefit from our Flexible Pricing at Expertise , your partner for professional growth.”<br/> Join us today and accelerate your professional growth with Expertise!</p>
                </div>
            </div>
            <div className='anim_text'>
                <div class="animation_3">
                {view3}
                </div>
                <div className="hometext1">
                    <h2>Unlock Your Potential with Expertise: Premium Features for a Premium Experience </h2>
                    <p>Our premium features are designed to enhance this belief. For young professionals, we offer priority access, exclusive webinars, personalized learning paths, and premium support. </p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default page