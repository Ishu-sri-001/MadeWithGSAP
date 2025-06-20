'use client';

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Buttons/index";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ready = () => {
  
  useEffect( () => {
    const ctx=gsap.context(()  => {
        const blocks = document.querySelectorAll(".ready-animated-blocks");
      // console.log(blocks);
      const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".ready-block-container",
        scrub: true,
        start: "top bottom",
        end: "60% 80%",
        markers: false,
      },
    });
    const len = blocks.length;
    const mid = Math.floor(len / 2);

    for (let i = 0; i <= mid; i++) {
      const left = blocks[i];
      const right = blocks[len - 1 - i];

      const targets = left === right ? [left] : [left, right];

      timeline.from(
        targets,
        {
          yPercent: 47,
          ease: "elastic.out(1, 1)",
          duration: 1,
        },
        i  
      );
    }

        gsap.fromTo(".text-scroll", {
          yPercent: -50,
        } , {
          yPercent: -150,
          scrollTrigger: {
            trigger: ".ready-text-container",
            scrub: true,
            start: "top 60%",
            end: "bottom 40%",
            markers: false
          }
        }),
        gsap.to(".text-top", {
          duration: 8,
          xPercent: -33,
          repeat: -1,
          ease: "none"
        })
        gsap.to(".text-bottom", {
          duration: 4,
          xPercent: 25,
          repeat: -1,
          ease: "none"
        })
    });
    return () => ctx.revert()
  }, []);

  return (
    <section className="dark-bg text-white h-full w-fit ready-block-container" id='ready'>
      <div className="relative h-screen w-full">
                <div className="w-full h-full flex flex-col items-center py-[9vw] gap-[2vw]">
            <p className='text-[0.9vw] pb-[3vw]'>EAGER TO LEARN GSAP ?</p>
            <div className='flex flex-col items-start justify-start   h-[10vh] w-[98vw] overflow-hidden py-[3.5vw] ready-text-container '>

          <div className="text-top text-scroll  flex flex-nowrap  w-fit">
          <div className="h-fit flex ">

          
          <h2 className="text-[6.5vw]  font-display px-[1vw] text-center leading-[1] text-nowrap ">
            Get ready to animate
          </h2>

          <div className='h-full w-[5vw] py-[1vw]'>
            <Image src='/assets/icons/plusy.svg' width={900} height={900} alt='' className='w-full h-full object-cover'/>
          </div>
          </div>

           <div className="h-fit flex ">

          
          <h2 className="text-[6.5vw] font-display px-[1vw] text-center leading-[1] text-nowrap z-[1]">
            Get ready to animate
          </h2>

          <div className='h-full w-[5vw] py-[1vw]'>
            <Image src='/assets/icons/plusy.svg' width={900} height={900} alt='' className='w-full h-full object-cover'/>
          </div>
          </div>

          <div className="h-fit  flex">

          
          <h2 className="text-[6.5vw]  font-display px-[1vw] text-center leading-[1] text-nowrap">
            Get ready to animate
          </h2>

          <div className='h-full w-[5vw] py-[1vw]'>
            <Image src='/assets/icons/plusy.svg' width={900} height={900} alt='' className='w-full h-full object-cover'/>
          </div>
          </div>

          <div className="h-fit flex ">

          
          <h2 className="text-[6.5vw]  font-display px-[1vw] text-center leading-[1] text-nowrap ">
            Get ready to animate
          </h2>

          <div className='h-full w-[5vw] py-[1vw]'>
            <Image src='/assets/icons/plusy.svg' width={900} height={900} alt='' className='w-full h-full object-cover'/>
          </div>
          </div>

         
          </div>

          <div className="flex text-bottom text-scroll flex-nowrap w-fit translate-x-[-62%]">


            {[...Array(4)].map((_, i) => (
          <div className="flex " key={`block-duplicate-${i}`}>

           <h2 className="text-[6.5vw] text-nowrap font-display px-[1vw] text-center leading-[1] ">
            Get ready to animate
          </h2>

          <div className='h-full py-[1vw] w-[5vw]'>
            <Image src='/assets/icons/plusy.svg' width={900} height={900} alt='' className='w-full h-full object-cover'/>
          </div>
          </div>
           ))}
          </div>

          
        </div>
        <div className='dark-bg w-full flex justify-center py-[3vw] z-[0]'>
        <div className='h-full px-[3vw] bg-white'>

                    <Button isArrow={false} title='Start learning now' bg='bg-white' />
                    </div>
        </div>
            </div>

        
        <div className="absolute top-[-8%] left-0 right-[-20%] h-[22vh] w-full flex ">
          {Array.from({ length: 13 }).map((_, index, arr) => {
            const isFirst = index === 0;
            const isLast = index === arr.length - 1;

            return (
              <div
                key={index}
                className={`dark-bg ready-animated-blocks h-[80%] origin-bottom ${
                  isFirst || isLast ? "w-[4.15vw]" : "w-[8.3vw]"
                } ${
                  isFirst
                    ? "rounded-r-full"
                    : isLast
                    ? "rounded-l-full"
                    : "rounded-full"
                }`}
              >
                <div className="h-full" />
              </div>
            );
          })}
        </div>
      </div>

      
    </section>
  );
};

export default Ready;

