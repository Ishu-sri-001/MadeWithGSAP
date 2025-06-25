'use client';

import React, {useEffect} from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Footer = () => {

  useEffect(() => {
    const ctx=gsap.context(() => {
      ScrollTrigger.create({
      trigger: "#footer",
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

    });
    return () => ctx.revert()
  }, []);

  return (
    <footer className="dark-bg text-white h-fit max-md:pb-[15vw] px-[2vw] w-full" id='footer'>
      <div className='flex max-md:flex-col justify-between text-white pb-[10%]'>
          <div className='flex flex-col w-[35%] max-md:w-full'>
            <p className='text-[3vw] max-md:pl-[2vw] max-md:pt-[5vw] max-sm:text-[7vw] pb-[1.5vw] max-md:text-[5vw]'>Never miss what's next</p>

            <div className='flex justify-between w-full pb-[1.5vw] max-md:pt-[3vw] max-md:px-[2vw]'>
              <p className='text-[1.5vw] max-sm:text-[4.5vw] max-md:text-[3vw]'>Your email</p>
              <div className='text-white flex items-end gap-[0.5vw]'>
                    <div className='w-[1vw] h-[1vw] max-md:w-[3vw] max-md:h-[3vw] mb-[0.2vw] max-md:mb-[1vw] max-md:mr-[2vw]'>
                      <Image src='/assets/icons/enter-wh.svg' width={900} height={900} alt='' className='w-full h-full object-fill' />
                    </div>
                    <p className='text-[0.9vw] max-sm:text-[3vw] max-md:text-[3vw]'>SUBMIT</p>
              </div>
            </div>
            <hr className='text-neutral-800 py-[2vw]'/>
            <div className='max-w-[25vw] max-md:max-w-full py-[1vw]'>
              <p className='text-[0.9vw] max-md:pl-[2vw] max-md:text-[3vw] text-neutral-500 font-display'>By submitting your email, you’ll be the first to know about upcoming updates for Made With Gsap. You can unsubscribe at any time.</p>
            </div>
          </div>

          



          <div className='flex max-md:grid max-md:grid-cols-2 max-md:gap-x-[50vw] text-[0.9vw] max-sm:text-[3vw] max-md:text-[2.5vw] justify-between gap-[8vw] pl-[20%] max-md:pl-[4vw] w-[65%] pr-[15%] max-md:pt-[10vw]'>
            <div className='flex flex-col text-neutral-500'>
                <p>SOCIAL</p>
                <div className='flex flex-col gap-[0.5vw] max-md:gap-[1.5vw] max-sm:gap-[2vw] max-md:pt-[3vw] pt-[1vw] text-left text-white'>
                  <p className='text-nowrap cursor-pointer hover:text-[#C9FE6E]'>X (TWITTER)</p>
                  <p className='text-nowrap cursor-pointer hover:text-[#C9FE6E]'>INSTAGRAM</p>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>BLUESKY</p>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>LINKEDIN</p>
                  
                </div>
            </div>

            <div className='flex flex-col text-neutral-500'>
                <p>PAGES</p>
                <div className='flex flex-col gap-[0.5vw] pt-[1vw] text-left max-sm:gap-[2vw] max-md:pt-[3vw] text-white  max-md:gap-[1.5vw]'>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>HOME</p>
                  <p  className='cursor-pointer hover:text-[#C9FE6E]'>COLLECTION</p>
                  <p  className='cursor-pointer hover:text-[#C9FE6E]'>FAQ</p>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>PRICING</p>
                  
                </div>
            </div>
            <div >

           

             <div className='flex flex-col text-neutral-500 '>
                <p>CONTACT</p>
                <div className='flex flex-col gap-[0.5vw] pt-[1vw] items-center text-left text-white max-sm:gap-[2vw] max-md:pt-[3vw]  max-md:gap-[1.5vw]'>
                  <p className='cursor-pointer hover:text-[#C9FE6E] text-nowrap max-md:pl-[14vw]'>REACH US</p>
                  
                  
                </div>
            </div>
            </div>

          </div>
      </div>


      <div className='flex text-neutral-300 py-[3vw] justify-between items-end '>
        <div className='flex text-[0.9vw] font-medium gap-[3vw] max-md:hidden'>
          <p className='cursor-pointer hover:text-[#C9FE6E]'>2025©</p>
          <p className='cursor-pointer hover:text-[#C9FE6E]'>PERMISSIONS & TERMS</p>
          <p className='cursor-pointer hover:text-[#C9FE6E]'>PRIVACY POLICY</p>
        </div>
        <div className=' '>
          <div className='w-[48vw] h-fit max-md:w-full max-md:pt-[20vw]'>
            <Image src='/assets/icons/white-logo.svg' width={900} height={900} alt='logo' className='h-full w-full object-cover' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
