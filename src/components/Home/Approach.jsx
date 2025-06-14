import React from "react";
import Image from "next/image";

const Approach = () => {
  return (
    <section
      id="approach"
      className="h-fit py-[5vw] w-full text-white dark-bg"
    >
      <div className="pb-[5vw]">
        <div>
          <div className="flex justify-between text-[0.9vw] text-slate-400 uppercase tracking-widest border-b border-neutral-800 px-[2vw] font-body font-light py-[2vw]">
            <span>Seems nice but</span>
            <span className="">What are we really</span>
            <span>Talking about</span>
          </div>

          <div className="flex justify-between gap-[1vw] px-[2vw] py-[1.5vw] pb-">
            <div className="flex justify-between h-full text-[2.5vw] w-[45%]">
              <span className="inline-block w-[40%]">1</span>
              <span className="inline-block w-[60%]">Effects</span>
            </div>

            <div className="text-[1.5vw] font-medium w-[50%]">
              <p className="text-[2.7vw] leading-[1] pr-[2vw]">
                <span className=" flex justify-end items-end ">
                  Made With Gsap brings
                </span>{" "}
                <span>
                  together 50 effects that showcase fundamental web motion
                  techniques:
                </span>
              </p>
              <p className="text-[2.7vw] leading-[1] pr-[2vw]">
                <span className="bg-[#C9FE6E] px-[0.5vw] p-[0.2vw] rounded-full text-black text-[1.5vw]  font-bold mb-[1vw]">
                  1
                </span>{" "}
                scroll animations{" "}
                <span className="bg-[#C9FE6E] px-[0.5vw] p-[0.2vw] rounded-full text-black text-[1.5vw]  font-bold mb-[1vw]">
                  2
                </span>{" "}
                mouse-based interactions{" "}
                <span className="bg-[#C9FE6E] px-[0.5vw] p-[0.2vw] rounded-full text-black text-[1.5vw]  font-bold mb-[1vw] my-auto">
                  3
                </span>{" "}
                drag movements, and more. Each effect is designed to inspire
                others.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-fit flex px-[2vw] justify-end ">
          <div className="w-[50%] border-none">
            <div className="w-full h-[90vh] overflow-hidden relative">
              <div className="w-full h-full overflow-hidden absolute inset-0">
                <Image
                  src="/assets/images/approach/1.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover z-[0] "
                />
              </div>

              <div className="w-full h-full overflow-hidden absolute inset-0">
                <Image
                  src="/assets/images/approach/2.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover z-[1] scale-0"
                />
              </div>

              <div className="w-full h-full overflow-hidden  absolute inset-0 scale-0">
                <Image
                  src="/assets/images/approach/3.png"
                  width={1000}
                  height={1000}
                  alt=""
                  className="h-full w-full object-cover z-[2]"
                />
              </div>
            </div>
            <div className="dark-bg text-white  py-[3vw] w-full">
              <div className="flex flex-col gap-[2vw]">
          
                <div className="flex gap-[4vw] mb-[2vw]">
                  <div className="text-[0.8vw] uppercase  min-w-[10vw]">
                    No WebGL
                  </div>
                  <div className="text-[1.2vw] font-semibold leading-[1.6vw]">
                    Our effects use the GSAP core and GSAP plugins.
                  </div>
                </div>

            
                <div className="flex gap-[4vw]">
                  <div className="text-[0.8vw] tracking-widest uppercase  min-w-[10vw] text-nowrap">
                    Webflow Compatible
                  </div>
                  <div className="text-[1.4vw] font-semibold leading-[1.6vw] max-w-[50vw]">
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

        <div className="pb-[5vw]">
        <div>
          

          <div className="flex justify-between gap-[1vw] px-[2vw] py-[1.5vw] ">
            <div className="flex justify-between h-full text-[2.5vw] w-[45%]">
              <span className="inline-block w-[40%]">2</span>
              <span className="inline-block w-[60%]">Learning</span>
            </div>

            <div className="text-[1.5vw] font-medium w-[50%]">
              <p className="text-[2.7vw] leading-[1] pr-[2vw]">
                <span className=" flex justify-end items-end ">
                  Each effect is paired with
                </span>{" "}
                 a detailed, step-by-step tutorial to help you recreate it and fully grasp its functioning. You'll also get a downloadable zip file containing the final code with a live example.
              </p>
            
            </div>
          </div>
        </div>

        <div className="w-full h-fit flex px-[2vw] justify-end ">
          <div className="w-[50%] border-none">
            <div className="w-full h-[90vh] overflow-hidden relative">
                

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
          
                

            
                <div className="flex gap-[4vw]">
                  <div className="text-[0.8vw] tracking-widest uppercase  min-w-[10vw] text-nowrap">
                    100% CUSTOMIZABLE
                  </div>
                  <div className="text-[1.2vw] font-semibold leading-[1.6vw] max-w-[50vw]">
                    Whether you want to tweak colors, timings, or animations, the code is fully adaptable. For instance, if you choose to have 8 images instead of 4, the script will automatically adapt to the DOM elements, ensuring the render always looks great.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




           <hr className="w-full text-neutral-800"/>





      <div className="pb-[5vw]">
        <div>
          

          <div className="flex justify-between gap-[1vw] px-[2vw] py-[1.5vw] ">
            <div className="flex justify-between h-full text-[2.5vw] w-[45%]">
              <span className="inline-block w-[40%]">3</span>
              <span className="inline-block w-[60%]">Our goal</span>
            </div>

            <div className="text-[1.5vw] font-medium w-[50%]">
              <p className="text-[2.7vw] leading-[1] pr-[2vw]">
                <span className=" flex justify-end items-end ">
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
          <div className="w-[50%] border-none">
            
            <div className="dark-bg text-white  py-[3vw] w-full">
              <div className="flex flex-col gap-[2vw]">
          
                <div className="flex gap-[4vw] mb-[2vw]">
                  <div className="text-[0.8vw] uppercase  min-w-[10vw]">
                    ABOUT US
                  </div>
                  <div className="text-[1.2vw] font-semibold leading-[1.6vw]">
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
