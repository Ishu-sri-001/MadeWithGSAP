import React from "react";
import Image from "next/image";

const Cards = () => {
  const cardData = [
    {
      title: "Beginners friendly",
      description:
        "Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
      icon: "/assets/icons/cards/card1.svg",
    },
    {
      title: "Easy to implement",
      description:
        "Get started effortlessly with our code snippets and integrate them into your project in no time.",
      icon: "/assets/icons/cards/card2.svg",
    },
    {
      title: "Performance optimized",
      description:
        "Our effects are built with efficiency in mind: combining performance with creativity.",
      icon: "/assets/icons/cards/card3.svg",
    },
  ];

  return (
    <section className="dark-bg text-white h-full w-full" id="cards">
      <div className="relative h-screen w-full">
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-[7vw] font-display  text-center leading-[1]">
            Learn how to use{" "}
            <span className="block"> the coolest JS library </span>
          </h2>
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

      <div className="flex flex-col md:flex-row gap-[1.3vw] justify-center items-center px-[10vw] pb-[10vw]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#0d0d0d] text-white rounded-[0.7vw] py-[1.3vw] pb-[2.5vw] px-[1.7vw] w-full  transform hover:-rotate-2 transition duration-300 min-h-[67vh] cursor-pointer flex flex-col gap-[6vw] h-full"
          >
            <div className="h-[40%] w-fit py-[2vw]">
              <Image
                src={card.icon}
                alt={card.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-around h-[60%] gap-[1vw]">
              <h3 className="text-[3vw] leading-[1] font-medium w-[50%] mb-[0.5vw] h-full">
                {card.title}
              </h3>
              <p className="text-[1.3vw] leading-[1.3] opacity-80 h-full">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
