

import React from 'react';
import LinkBtn from "../Buttons/Link"
import gsap from 'gsap';

const About = () => {
  return (
    <section id='about' className='pb-[30vh]'>
        <div className='px-[2vw]'>
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
        <div className='text-primary font-display mx-[2vw] pt-[10vw]'>
            <div className='w-full h-full flex flex-col justify-end items-end '>

            <p className='text-[1.5vw] w-[67%]  pb-[8vw]'>Improve your animation skills</p>
            <p className='text-[4.5vw] w-[67%] leading-[1] '>
                Motion on websites is a must-
            </p>
            </div>
            <p className='text-[4.5vw] leading-[1]'>have these days. Developers are constantly crafting new animations that push the boundaries of creativity. If you're ready to explore the power of GSAP, we’ve got you covered with 50 unique effects designed to help you master it like a pro.</p>
            <div className='w-full h-fit pt-[15vh] flex items-center justify-center'>
                <LinkBtn />
            </div>
        </div>
    </section>
  )
}

export default About
