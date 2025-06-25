'use client';
import React, { useEffect } from "react";
import '@/app/globals.css'
import Button from '@/components/Buttons/index';
import Image from "next/image";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  // "A collection"
  const row1Letters = [
    ["A", "A"], [" ", " "], ["c", "c"], ["o", "o"], ["l", "l"], ["l", "l"], 
    ["e", "e"], ["c", "c"], ["t", "t"], ["i", "i"], ["o", "o"], ["n", "n"]
  ];

  //  "of JS effects"
  const row2Letters = [
    ["o", "o"], ["f", "f"], [" ", " "], ["J", "J"], ["S", "S"], [" ", " "],
    ["e", "e"], ["f", "f"], ["f", "f"], ["e", "e"], ["c", "c"], ["t", "t"], ["s", "s"]
  ];

  //  "Made With Gsap"
  const row3Letters = [
    ["M", "M"], ["a", "a"], ["d", "d"], ["e", "e"], [" ", " "], ["W", "W"],
    ["i", "i"], ["t", "t"], ["h", "h"], [" ", " "], ["G", "G"], ["s", "s"], ["a", "a"], ["p", "p"]
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline 1 - Characters with indices divisible by 3
      if(globalThis.innerWidth>760){
const tl1 = gsap.timeline();
      tl1.from(".timer-0, .timer-3, .timer-6, .timer-9, .timer-12, .timer-15, .timer-18, .timer-21, .timer-24, .timer-27, .timer-30, .timer-33, .timer-36", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      // Timeline 2 - Characters with indices (3n+1)
      const tl2 = gsap.timeline({ delay: 0.2 });
      tl2.from(".timer-1, .timer-4, .timer-7, .timer-10, .timer-13, .timer-16, .timer-19, .timer-22, .timer-25, .timer-28, .timer-31, .timer-34, .timer-37", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      // Timeline 3 - Characters with indices (3n+2)
      const tl3 = gsap.timeline({ delay: 0.4 });
      tl3.from(".timer-2, .timer-5, .timer-8, .timer-11, .timer-14, .timer-17, .timer-20, .timer-23, .timer-26, .timer-29, .timer-32, .timer-35, .timer-38", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });
      }
      else{
        const tl1 = gsap.timeline();
      tl1.from(".timer-0, .timer-3, .timer-6, .timer-9, .timer-12, .timer-15, .timer-18, .timer-21, .timer-24, .timer-27, .timer-30, .timer-33, .timer-36", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      // Timeline 2 - Characters with indices (3n+1)
      const tl2 = gsap.timeline({ delay: 0.2 });
      tl2.from(".timer-1, .timer-4, .timer-7, .timer-10, .timer-13, .timer-16, .timer-19, .timer-22, .timer-25, .timer-28, .timer-31, .timer-34, .timer-37", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      // Timeline 3 - Characters with indices (3n+2)
      const tl3 = gsap.timeline({ delay: 0.4 });
      tl3.from(".timer-2, .timer-5, .timer-8, .timer-11, .timer-14, .timer-17, .timer-20, .timer-23, .timer-26, .timer-29, .timer-32, .timer-35, .timer-38", {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });
      }
      
    });

    return () => ctx.revert();
  }, []);

  
  const LetterColumn = ({ letterArray, extraClasses = "", globalIndex }) => (
    <div className={`w-fit flex flex-col items-center justify-center translate-y-[-50%] timer  leading-[1.2] tracking-[-0.4vw] timer-${globalIndex} ${extraClasses}`}>
      {letterArray.map((digit, idx) => (
        <p key={idx} className="font-display leading-[0.9] text-[7.9vw] max-sm:text-[11vw] max-md:text-[9.5vw] max-md:leading-[]  translate-y-[-2%]" style={{ minWidth: digit === " " ? "0.3em" : "auto" }}>
          {digit === " " ? "\u00A0" : digit}
        </p>
      ))}
    </div>
  );

  
  const TextRow = ({ letters, isFirstRow = false, startIndex = 0 }) => (
    <div className="h-[7.5vw] max-sm:h-[10.5vw] max-md:h-[8vw] overflow-hidden w-fit flex pr-[0.5vw] ">
      {letters.map((letterArray, index) => (
        <LetterColumn 
          key={startIndex + index} 
          letterArray={letterArray}
          extraClasses={isFirstRow && index === 0 ? "text-neutral-900" : ""}
          globalIndex={startIndex + index}
        />
      ))}
    </div>
  );

  return (
    <section className="w-fit hero-container h-[50vh] max-md:h-[60vh] max-sm:h-[50vh] text-neutral-900" id='hero'>
      <div className="flex max-md:flex-col items-end justify-end max-md:items-start max-md:justify-end gap-[2vw] max-md:gap-0 max-sm:pt-0 max-md:pt-[20vw] h-full px-[2vw]">
        <div className="w-[63%] pb-[2vw]">
          <div>
            {/* First row: "A collection" */}
            <TextRow letters={row1Letters} isFirstRow={true} startIndex={0} />
            
            {/* Second row: "of JS effects" */}
            <TextRow letters={row2Letters} startIndex={12} />
            
            {/* Third row: "Made With Gsap" */}
            <TextRow letters={row3Letters} startIndex={25} />
          </div>
        </div>
        
        <div className="w-[37%] max-md:w-full flex flex-col items-start gap-[1vw]  px-[2vw] py-[3vw] max-md:py-0  max-md:pt-[1vw] max-md:px-0">
          <div className="h-[50%] max-sm:w-full max-md:w-[60%] py-[1vw]">
            <p className="text-[1.6vw] max-md:font-display max-md:text-[3vw] max-sm:text-[5vw] leading-[1.3] text-black">
              Enhance your GSAP skills with a range of 50 unique and well-crafted effects.
            </p>
          </div>
          <div className="h-[50%] max-md:h-full max-md:pt-[2vw]">
            <Button title='explore collection' isArrow={true} isBorder={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
