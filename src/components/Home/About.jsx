
'use client'

import React from 'react';
import { useEffect } from 'react';
import LinkBtn from "../Buttons/Link"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);


const About = () => {

    useEffect(() => {

        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        const ctx= gsap.context(() => {
            const splitText = new SplitText(".about-text", {
                    type: "chars,lines",
                    linesClass: "lines",
                    mask: "lines",
                });
            if(!isMobile) {
            gsap.to(".scaled-video", {
                scale: 0.3,
                duration: 3,
                yPercent: 82,
                scrollTrigger : {
                    trigger: ".scaled-video",
                    scrub: true,
                    start: "bottom bottom",
                    end: "bottom 20%",
                    markers: false,    
                }
            })
        }
            gsap.from(splitText.lines,{      
                yPercent: 100,
                duration: 0.5,
                stagger:0.2,
                scrollTrigger:{
                    trigger:".about-hit-point",
                    start:"top 80%",
                    end: "bottom 30%",
                    scrub: 5,
                    markers:false
                }
            })
        });
        return () => ctx.revert();
    }, []);


  return (
    <section id='about' className='pb-[30vh] max-md:pb-[10vh] px-[2vw] max-sm:px-0 max-md:pt-[2vw]'>
        <div className='scaled-video origin-left '>
            <video
            autoPlay
            loop
            muted
            playsInline
            className=" w-full h-full object-cover z-0 "
        >
            <source src="https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4" />
      </video>

        </div>
        <div className='text-primary font-display pt-[10vw] max-sm:pt-[6vw] max-sm:mx-[2vw]'>
            <div className='w-full h-full flex flex-col justify-end items-end max-sm:justify-start max-sm:items-start '>

            <p className='text-[1.5vw] max-md:text-[2vw] w-[67%] max-sm:text-[4vw] pb-[8vw] max-md:pb-[7vw]'>Improve your animation skills</p>
            <p className='text-[4.5vw] max-sm:text-[7vw] max-md:text-[4.9vw] w-[67%] max-sm:w-full leading-[1] about-text about-hit-point max-md:inline-block'>
                Motion on websites is a must-
            </p>
            </div>
            <p className='text-[4.5vw] max-sm:text-[7vw] max-md:text-[4.9vw]  leading-[1] about-text'>have these days. Developers are constantly crafting new animations that push the boundaries of creativity. If you're ready to explore the power of GSAP, we’ve got you covered with 50 unique effects designed to help you master it like a pro.</p>
            <div className='w-full h-fit pt-[18vh] max-md:pt-[20vw] flex items-center justify-center'>
                <LinkBtn />
            </div>
        </div>
    </section>
  )
}

export default About
