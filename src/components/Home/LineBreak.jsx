'use client';
import React, {useEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerEase(ScrollTrigger,SplitText)

const LineBreak = () => {

  useEffect( () => {
    const ctx=gsap.context(()  => {
        
        gsap.fromTo(".linebreak-txt", {
              xPercent: 100,
        }, {
            xPercent: -50,
            scrollTrigger: {
              trigger: ".linebreak-container",
              scrub: true,
              start: "20% bottom",
              end: "bottom 70%",
              markers: false
            }
        })
    });
    return () => ctx.revert()
  }, []);

  return (
    <div className='bg-white text-black h-screen w-full flex items-center justify-center py-[3vw] overflow-hidden linebreak-container'>
        <h2 className='text-[18vw] font-medium text-center font-display leading-[0.8] text-nowrap translate-x-[22%] px-[2vw] linebreak-txt'>
            So, ready to animate ?
        </h2>
    </div>
  )
}

export default LineBreak