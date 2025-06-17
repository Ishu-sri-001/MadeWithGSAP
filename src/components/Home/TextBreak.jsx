'use client';

import React, {useEffect, useState} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Textreak = () => {

  useEffect(() => {
    const ctx= gsap.context(() => {
      const splitText = new SplitText(".test-text", {
              type: "chars",
              linesClass: "lines",
              mask: "lines",
          });
          const chars = splitText.chars;
          const shuffled = gsap.utils.shuffle([...chars]);
          gsap.fromTo(
        shuffled,
        {
          y: -200,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          stagger: {
            each: 0.03,
            from: 'random',
          },
          scrollTrigger: {
            trigger: '.textbreak-container',
            scrub: true,
            start: 'top 80%',
            end: 'bottom 50%',
            markers: true, 
          },
        },
      );
    })
    return () => ctx.revert();
  }, []);

  return (
    <div className='dark-bg text-white h-screen w-full flex items-center justify-center py-[3vw] textbreak-container'>
        <h2 className=''>
          <p className='w-full h-[15vw]  test-text text-[18vw] font-medium text-center font-display leading-[0.8] overflow-hidden'>

            <span className='block  py-[1vw] '>Learn it</span>
            <span className='block -translate-y-[5%]'>Learn it</span>
          </p>
          <p className='w-full h-[15vw]  test-text text-[18vw] font-medium text-center font-display leading-[0.8] overflow-hidden'>

            <span className='block  py-[1vw] '>Tweak it</span>
            <span className='block  -translate-y-[5%]'>Tweak it</span>
          </p>
          <p className='w-full h-[15vw]  test-text text-[18vw] font-medium text-center font-display leading-[0.8] overflow-hidden'>

            <span className='block  py-[1vw] '>Use it</span>
            <span className='block  -translate-y-[5%]'>Use it</span>
          </p>
            
        </h2>
    </div>
  )
}

export default Textreak