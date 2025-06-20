'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const LineBreak = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText('.linebreak-txt', {
        type: 'chars',
        opacity:1
      });

      gsap.to("linebreak-container", {
        scrollTrigger: {
          trigger: '.linebreak-container',
          start: 'top top',
        end: '+=1200',
          pin:true,
           markers: false,
        },
      })

      gsap.from("linebreak-container", {
        yPercent:50,
      })

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.linebreak-container',
          start: 'top 60%',
          end: '+2000 top',
          scrub:true,
          // markers: true,
        },
      })

      const chars = split.chars;

      t1.set(chars, {
        xPercent: 300,
        yPercent: (i) => (i % 2 === 0 ? -100 : 100),
      });
       t1.to('.line-animation',{
        xPercent: -130,
        duration:2,
      })
      

      t1.to(chars, {
        
        xPercent: 0,
        yPercent: 0,
        duration:1,
        delay:-2,
        stagger: 0.1,
        ease: 'elastic(1,0.8)',
      });
     
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='bg-white text-neutral-900 h-screen w-full flex items-center justify-center py-[3vw] linebreak-container overflow-hidden'>
      <div className=' h-fit w-fit line-animation translate-x-[100%] '>

      <h2 className='text-[18vw]   font-medium text-center font-display leading-[0.8] text-nowrap px-[2vw] linebreak-txt '>
        So, ready to animate ?
      </h2>
      </div>
    </div>
  );
};

export default LineBreak;