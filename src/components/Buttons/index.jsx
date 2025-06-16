'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';

gsap.registerPlugin(SplitText);

const Button = (props) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      splitRef.current = new SplitText(textRef.current, { type: 'chars' });
    }

    return () => {
      splitRef.current && splitRef.current.revert();
    };
  }, []);

  const handleHover = () => {
    if (splitRef.current) {
      gsap.fromTo(
        splitRef.current.chars,
        { y: 0, opacity: 1 },
        {
          y: -10,
          opacity: 0,
          stagger: 0.01,
          duration: 0.1,
          ease: 'none',
          onComplete: () => {
            gsap.to(splitRef.current.chars, {
              y: 0,
              opacity: 1,
              stagger: 0.01,
              duration: 0.1,
              ease: 'none',
            });
          },
        }
      );
    }
  };

  return (
    <div
      className={`h-[3.2vw] flex items-center justify-between w-fit my-auto px-[1vw] gap-[0.5vw] cursor-pointer ${props.isBorder ? 'border border-black' : ''} ${props.bg}`}
      onMouseEnter={handleHover}
    >
      {props.isArrow && (
        <div className='w-[1vw] h-[1.7vw]'>
          <Image
            src='/assets/icons/enter.svg'
            width={900}
            height={900}
            alt='arrow'
            className='h-full w-full object-fill'
          />
        </div>
      )}

      <p
        className='h-fit font-body w-fit my-auto text-black uppercase text-[1vw]'
        ref={textRef}
      >
        {props.title}
      </p>
    </div>
  );
};

export default Button;
