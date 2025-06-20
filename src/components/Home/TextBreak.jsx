'use client';

import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Textreak = () => {
  // "Learn it"
  const row1Letters = [
    ["L", "L"], ["e", "e"], ["a", "a"], ["r", "r"], ["n", "n"], [" ", " "], 
    ["i", "i"], ["t", "t"]
  ];

  // "Tweak it"
  const row2Letters = [
    ["T", "T"], ["w", "w"], ["e", "e"], ["a", "a"], ["k", "k"], [" ", " "],
    ["i", "i"], ["t", "t"]
  ];

  // "Use it"
  const row3Letters = [
    ["U", "U"], ["s", "s"], ["e", "e"], [" ", " "], ["i", "i"], ["t", "t"]
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline 1 - Characters with indices divisible by 3
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.textbreak-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub:true,
          // markers: true
          
        }
      });
      tl1
      .set(".timer-0, .timer-3, .timer-6, .timer-9, .timer-12, .timer-15, .timer-18, .timer-21", {
    yPercent: -50
  })
      .to(".timer-0, .timer-3, .timer-6, .timer-9, .timer-12, .timer-15, .timer-18, .timer-21", {
       
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1,
        
      });

      // Timeline 2 - Characters with indices (3n+1)
      const tl2 = gsap.timeline({ 
         delay: 0.4,
        scrollTrigger: {
          trigger: '.textbreak-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          markers:false
        }
      });
      tl2
      .set(".timer-1, .timer-4, .timer-7, .timer-10, .timer-13, .timer-16, .timer-19", {
          yPercent:-50
      })
      .to(".timer-1, .timer-4, .timer-7, .timer-10, .timer-13, .timer-16, .timer-19", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      // Timeline 3 - Characters with indices (3n+2)
      const tl3 = gsap.timeline({ 
         delay: 0.6,
        scrollTrigger: {
          trigger: '.textbreak-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub:true,
          markers: false,
        }
      });
      tl3
      .set(".timer-2, .timer-5, .timer-8, .timer-11, .timer-14, .timer-17, .timer-20", {
        yPercent: -50
      })
      .to(".timer-2, .timer-5, .timer-8, .timer-11, .timer-14, .timer-17, .timer-20", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });
    });

    ScrollTrigger.create({
      trigger: "#text-break",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        document.querySelectorAll('.nav-links').forEach(el => el.classList.add('text-white'));
      },
      onLeave: () => {
        document.querySelectorAll('.nav-links').forEach(el => el.classList.remove('text-white'));
      },
      onEnterBack: () => {
        document.querySelectorAll('.nav-links').forEach(el => el.classList.add('text-white'));
      },
      onLeaveBack: () => {
        document.querySelectorAll('.nav-links').forEach(el => el.classList.remove('text-white'));
      },
    });

    
    return () => ctx.revert();
  }, []);

  
  const LetterColumn = ({ letterArray, extraClasses = "", globalIndex }) => (
    <div className={`w-fit flex flex-col items-center justify-center  timer tracking-[-0.4vw] timer-${globalIndex} ${extraClasses}`}>
      {letterArray.map((digit, idx) => (
        <p key={idx} className="font-display leading-[0.8] text-[18vw] font-medium" style={{ minWidth: digit === " " ? "0.5em" : "auto" }}>
          {digit === " " ? "\u00A0" : digit}
        </p>
      ))}
    </div>
  );

  
  const TextRow = ({ letters, isFirstRow = false, startIndex = 0 }) => (
    <div className="h-[15vw] overflow-hidden translate-y-[100%] w-fit flex justify-center">
      {letters.map((letterArray, index) => (
        <LetterColumn 
          key={startIndex + index} 
          letterArray={letterArray}
          extraClasses={isFirstRow && index === 0 ? "" : ""}
          globalIndex={startIndex + index}
        />
      ))}
    </div>
  );

  return (
    <section id='text-break' className=' text-white h-fit dark-bg w-full flex items-center justify-center  pb-[20vw] textbreak-container'>
      <div className='w-full  flex flex-col items-center justify-center h-fit text-center'>
        {/* First row: "Learn it" */}
        <TextRow letters={row1Letters} isFirstRow={true} startIndex={0} />
        
        {/* Second row: "Tweak it" */}
        <TextRow letters={row2Letters} startIndex={8} />
        
        {/* Third row: "Use it" */}
        <TextRow letters={row3Letters} startIndex={16} />
      </div>
    </section>
  )
}

export default Textreak