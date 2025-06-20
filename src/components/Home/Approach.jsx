'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Approach = () => {


  useEffect (() => {
      const ctx= gsap.context(() => {
          gsap.to(".approach-img", {
            scale: 1,
            duration:0.7,
            stagger:0.2,
            scrollTrigger: {
              trigger: ".approach-container",
              scrub: true,
              start: "20% 80%",
              end: "bottom top",
              markers: false,
            }
          })
      });

      ScrollTrigger.create({
      trigger: "#approach",
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

  return (
    <section
      id="approach"
      className="h-fit py-[5vw] w-full text-white dark-bg"
    >
      <div className="pb-[5vw] max-md:pb-[15vw]">
        <div>
          <div className="flex max-md:flex-col max-md:text-center justify-between text-[0.9vw] max-md:text-[3vw] text-slate-400 uppercase tracking-widest max-md:tracking-normal max-md:font-display border-b border-neutral-700 px-[2vw] font-body font-light py-[2vw]">
            <span>Seems nice but</span>
            <span className="">What are we really</span>
            <span>Talking about</span>
          </div>

          <div className="flex max-md:flex-col justify-between gap-[1vw] px-[2vw] py-[1.5vw] pb-">
            <div className="flex justify-between max-md:justify-around h-full text-[2.5vw] w-[45%] max-md:pb-[10vw] max-md:w-full max-md:flex-row-reverse max-md:text-[8vw] max-md:font-display">
              <span className="inline-block w-[40%] max-md:w-full  max-md:text-right">1</span>
              <span className="inline-block w-[60%] max-md:w-full">Effects</span>
            </div>

            <div className="text-[1.5vw] font-medium w-[50%] max-md:w-full">
              <p className="text-[2.7vw] max-md:text-[7vw] leading-[1] pr-[2vw]">
                <span className=" flex justify-end items-end max-md:justify-start max-md:items-start">
                  Made With Gsap brings
                </span>{" "}
                <span>
                  together 50 effects that showcase fundamental web motion
                  techniques:
                </span>
              </p>
              <p className="text-[2.7vw] max-md:text-[7vw] leading-[1] pr-[2vw]">
                <span className="bg-[#C9FE6E] px-[0.5vw] p-[0.2vw] rounded-full text-black text-[1.5vw] max-md:p-[1vw] max-md:text-[4vw]  font-bold mb-[1vw] max-md:px-[2vw]">
                  1
                </span>{" "}
                scroll animations{" "}
                <span className="bg-[#C9FE6E] px-[0.5vw] p-[0.2vw] rounded-full text-black text-[1.5vw] max-md:p-[1vw] max-md:text-[4vw] font-bold mb-[1vw] max-md:px-[2vw]">
                  2
                </span>{" "}
                mouse-based interactions{" "}
                <span className="bg-[#C9FE6E] px-[0.5vw] p-[0.2vw] rounded-full text-black text-[1.5vw]  font-bold mb-[1vw] my-auto max-md:p-[1vw] max-md:text-[4vw] max-md:px-[2vw]">
                  3
                </span>{" "}
                drag movements, and more. Each effect is designed to inspire
                others.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-fit flex px-[2vw] max-md:px-[4vw] max-md:pt-[5vw] justify-end ">
          <div className="w-[50%] max-md:w-full border-none">
            <div className="w-full h-[90vh] max-md:h-[90vw] overflow-hidden relative approach-container">
              <div className="w-full h-full overflow-hidden absolute inset-0">
                <Image
                  src="/assets/images/approach/1.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-fill z-[0] origin-center"
                />
              </div>

              <div className="w-full h-full overflow-hidden absolute inset-0">
                <Image
                  src="/assets/images/approach/2.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover z-[1] scale-0 origin-center approach-img"
                />
              </div>

              <div className="w-full h-full overflow-hidden  absolute inset-0">
                <Image
                  src="/assets/images/approach/3.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover z-[2] origin-center approach-img scale-0"
                />
              </div>
            </div>
            <div className="dark-bg text-white  py-[3vw] w-full">
              <div className="flex flex-col gap-[2vw]">
          
                <div className="flex max-md:flex-col gap-[4vw] max-md:gap-[2vw] mb-[2vw]">
                  <div className="text-[0.8vw] max-md:text-[3vw] uppercase  min-w-[10vw]">
                    No WebGL
                  </div>
                  <div className="text-[1.2vw] max-md:text-[4vw] max-md:leading-[1.2] max-md:tracking-tighter font-semibold leading-[1.6vw] max-md:font-body">
                    Our effects use the GSAP core and GSAP plugins.
                  </div>
                </div>

            
                <div className="flex max-md:flex-col max-md:pt-[5vw] gap-[4vw]">
                  <div className="text-[0.8vw] tracking-widest uppercase  min-w-[10vw] text-nowrap max-md:text-[3vw]">
                    Webflow Compatible
                  </div>
                  <div className="text-[1.4vw] font-semibold leading-[1.6vw] max-w-[50vw] max-md:min-w-full max-md:text-[4.5vw] max-md:leading-[1.2] max-md:tracking-tighter max-md:font-body">
                    All effects are fully compatible with Webflow, making it
                    simple to integrate them into your website. By adding the
                    code and assets, you can seamlessly add dynamic animations
                    to your template.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



        <hr className="w-full text-neutral-800"/>

        <div className="pb-[5vw] max-md:pb-[15vw]">
        <div>
          

          <div className="flex max-md:flex-col justify-between gap-[1vw] px-[2vw] py-[1.5vw] ">
            <div className="flex justify-between max-md:justify-evenly h-full text-[2.5vw] w-[45%] max-md:pb-[10vw] max-md:w-full max-md:flex-row-reverse max-md:text-[8vw] max-md:font-display">
              <span className="inline-block w-[40%] max-md:text-right">2</span>
              <span className="inline-block w-[60%]">Learning</span>
            </div>

            <div className="text-[1.5vw] font-medium w-[50%] max-md:w-full">
              <p className="text-[2.7vw] max-md:text-[7vw] leading-[1] pr-[2vw]">
                <span className=" flex max-md:justify-start max-md:items-start justify-end items-end ">
                  Each effect is paired with
                </span>{" "}
                 a detailed, step-by-step tutorial to help you recreate it and fully grasp its functioning. You'll also get a downloadable zip file containing the final code with a live example.
              </p>
            
            </div>
          </div>
        </div>

        <div className="w-full max-md:pt-[4vw] h-fit flex px-[2vw] justify-end ">
          <div className="w-[50%] max-md:min-w-full border-none">
            <div className="w-full h-[90vh] max-md:h-fit max-md:pb-[4vw] overflow-hidden relative">
                

                <video
            autoPlay
            loop
            muted
            playsInline
            className="  z-0 "
        >
            <source src="https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/tutorial-optim.mp4" />
          </video>
            </div>
            <div className="dark-bg text-white  py-[3vw] w-full">
              <div className="flex flex-col gap-[2vw]">
          
                

            
                <div className="flex max-md:flex-col gap-[4vw]">
                  <div className="text-[0.8vw] tracking-widest uppercase  min-w-[10vw] text-nowrap max-md:text-[3vw]">
                    100% CUSTOMIZABLE
                  </div>
                  <div className="text-[1.4vw] font-semibold leading-[1.6vw] max-w-[50vw] max-md:min-w-full max-md:text-[4.5vw] max-md:leading-[1.2] max-md:tracking-tighter max-md:font-body">
                    Whether you want to tweak colors, timings, or animations, the code is fully adaptable. For instance, if you choose to have 8 images instead of 4, the script will automatically adapt to the DOM elements, ensuring the render always looks great.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




           <hr className="w-full text-neutral-800"/>





      <div className="pb-[5vw] max-md:pb-[15vw]">
        <div>
          

          <div className="flex max-md:flex-col justify-between gap-[1vw] px-[2vw] py-[1.5vw] ">
            <div className="flex justify-between max-md:justify-evenly h-full text-[2.5vw] w-[45%] max-md:pb-[10vw] max-md:w-full max-md:flex-row-reverse max-md:text-[8vw] max-md:font-display">
              <span className="inline-block w-[40%] max-md:text-right">3</span>
              <span className="inline-block w-[60%]">Our goal</span>
            </div>

            <div className="text-[1.5vw] font-medium w-[50%] max-md:w-full">
              <p className="text-[2.7vw] max-md:text-[7vw] leading-[1] pr-[2vw]">
                <span className=" flex justify-end items-end max-md:justify-start">
                  Made With Gsap is
                </span>{" "}
                <span>
                  meant to be accessible to everyone and continuously evolving. We’re starting with a first collection of 50 effects, but we're planning to release new batches separately in the future.
                </span>
              </p>
              
            </div>
          </div>
        </div>

        <div className="w-full h-fit flex px-[2vw] justify-end ">
          <div className="w-[50%] max-md:w-full max-md:pt-[4vw] border-none">
            
            <div className="dark-bg text-white  py-[3vw] w-full">
              <div className="flex flex-col gap-[2vw]">
          
                <div className="flex max-md:flex-col gap-[4vw] mb-[2vw]">
                  <div className="text-[0.8vw] tracking-widest uppercase  min-w-[10vw] text-nowrap max-md:text-[3vw]">
                    ABOUT US
                  </div>
                  <div className="text-[1.4vw] font-semibold leading-[1.6vw] max-w-[50vw] max-md:min-w-full max-md:text-[4.5vw] max-md:leading-[1.2] max-md:tracking-tighter max-md:font-body">
                    Made With Gsap is the project of  Ishita (developer) and she has collected prestigious awards for 10+ years, including the Awwwards 2023 E-Commerce Site of the Year.
                  </div>
                </div>

            
               
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Approach;
