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

    });
    return () => ctx.revert()
  }, []);

  return (
    <section className="dark-bg text-white h-full w-full" id='ready'>
      <div className="relative h-screen w-full">
                <div className="w-full h-full flex flex-col items-center py-[9vw] gap-[2vw]">
            <p className='text-[0.9vw] pb-[3vw]'>EAGER TO LEARN GSAP ?</p>
            <div className='flex items-center justify-center ] h-[10vh]'>

          <h2 className="text-[6.5vw] font-display px-[1vw] text-center leading-[1]">
            Get ready to animate
          </h2>
          <div className='h-full w-[5vw]'>
            <Image src='/assets/icons/plusy.svg' width={900} height={900} alt='' className='w-full h-full object-cover'/>
          </div>

          
        </div>
        <div className='dark-bg w-full flex justify-center py-[3vw]'>
        <div className='h-full px-[3vw] bg-white'>

                    <Button isArrow={false} title='Start learning now' bg='bg-white' />
                    </div>
        </div>
            </div>

        
        <div className="absolute top-[-10%] left-0 right-[-20%] h-[20vh] w-full flex overflow-hidden">
          {Array.from({ length: 13 }).map((_, index, arr) => {
            const isFirst = index === 0;
            const isLast = index === arr.length - 1;

            return (
              <div
                key={index}
                className={`dark-bg h-full ${
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

