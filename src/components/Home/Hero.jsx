import React from "react";
import '@/app/globals.css'
import Button from '@/components/Buttons/index';
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] text-neutral-900" id='hero'>
      <div className="flex items-end justify-end gap-[2vw]  h-full px-[2vw]">
        <div className="w-[63%] font-display">

        <h1 className=" font-medium">
          <span className="inline-block ">
            A collection 
            </span>
            <span className="inline-block">
             of JS effects 
            </span>
            <span className="block w-[66vw] h-[20vh]">
                 {/* <Image src='/assets/icons/logo.svg' width={900} height={900} alt='' className="h-full w-full object-fill text-neutral-900" /> */}
                 Made With Gsap
            </span>
        </h1>
        </div>
        <div className=" w-[37%] flex flex-col gap-[1vw] px-[2vw] py-[3vw]">
            <div className="h-[50%] py-[1vw] ">
                <p className="text-[1.6vw] leading-[1.3] text-black">Enhance your GSAP skills with a range of 50 unique and well-crafted effects.</p>
            </div>
            <div className="h-[50%]">
                <Button title='explore collection' isArrow={true} isBorder={true}  />
            </div>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
