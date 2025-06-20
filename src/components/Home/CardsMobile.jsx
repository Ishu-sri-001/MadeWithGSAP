'use client';

import React, {useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText)


const CardsMobile = () => {
  const cardData = [
    {
      title: "Beginners friendly",
      description:
        "Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
      icon: "/assets/icons/cards/card1.svg",
      rotate: "",
    },
    {
      title: "Easy to implement",
      description:
        "Get started effortlessly with our code snippets and integrate them into your project in no time.",
      icon: "/assets/icons/cards/card2.svg",
      rotate: "",
    },
    {
      title: "Performance optimized",
      description:
        "Our effects are built with efficiency in mind: combining performance with creativity.",
      icon: "/assets/icons/cards/card3.svg",
      rotate: "",
    },
  ];

  useEffect(() => {
    const ctx= gsap.context(() => {
      const splitText = new SplitText(".cards-animated-txt", {
              type: "chars",
              linesClass: "lines",
              mask: "lines",
          });
          const chars = splitText.chars;
          const shuffled = gsap.utils.shuffle([...chars]);
          
          gsap.fromTo(
        shuffled,
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'sine.out(1.1)',
          stagger: {
            each: 0.03,
            from: 'random',
          },
          scrollTrigger: {
            trigger: '.card-text-container',
            scrub: true,
            start: '20% 80%',
            end: '50% 50%',
            markers: false, 
          },
        },
      );
      const blocks = document.querySelectorAll(".cards-animated-blocks");
      // console.log(blocks);
      const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-animated-blocks",
        scrub: true,
        start: "10% bottom",
        end: "30% 80%",
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
          yPercent: 100,
          ease: "sine.out",
          duration: 1,
        },
        i  
      );
    }
  });
  
    
     return () => ctx.revert();

}, []);


  return (

    
    <section className="dark-bg text-white h-fit w-full cards-container" id="cards">
      <div className="relative h-fit dark-bg w-full">
        <div className="w-full h-full flex items-center justify-center card-text-container py-[20vw] z-[2]">
          <h2 className="text-[10vw] font-display text-center leading-[1] cards-animated-txt">
            <span className="block w-full overflow-hidden">

            Learn how to use{" "}
            </span>
            <span className="block w-full  overflow-hidden"> the coolest JS  </span>
            <span className="block w-full  overflow-hidden">library</span>
          </h2>
        </div>

        
        <div className="absolute top-[-10%] left-0 right-[-20%] h-[13vh] w-full flex  ">
          {Array.from({ length: 7 }).map((_, index, arr) => {
            

            return (
              <div
                key={index}
                className={`dark-bg cards-animated-blocks h-[80%] origin-bottom w-[20vw] rounded-full`}
              >
                <div className="h-full" />
              </div>
            );
          })}
        </div>
      </div>

          <div className="w-[95vw] overflow-x-scroll ">
      <div className="flex w-[200vw] h-fit  gap-[5vw] pl-[5vw] cards-animated-container moving-container dark-bg ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-[#0d0d0d] text-white border border-neutral-800 rounded-[4vw] py-[1.5vw] pb-[2.5vw] px-[1.7vw] w-full  cursor-pointer flex flex-col justify-between h-[35vh] cards-animation  `}
          >
            <div className="h-[18vw] w-fit px-[2vw] py-[4vw]">
              <Image
                src={card.icon}
                alt={card.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end h-[60%] gap-[1vw]">
              <h3 className="text-[7vw] leading-[1] font-medium w-[50%] mb-[0.5vw] h-full">
                {card.title}
              </h3>
              <p className="text-[4vw] leading-[1.3] opacity-80 ">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CardsMobile;
