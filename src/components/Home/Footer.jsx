import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="dark-bg text-white h-fit px-[2vw] w-full" id='footer'>
      <div className='flex justify-between text-white pb-[10%]'>
          <div className='flex flex-col w-[35%]'>
            <p className='text-[3vw] pb-[1.5vw]'>Never miss what's next</p>

            <div className='flex justify-between w-full pb-[1.5vw]'>
              <p className='text-[1.5vw] '>Your email</p>
              <div className='text-white flex items-end gap-[0.5vw]'>
                    <div className='w-[1vw] h-[1vw] mb-[0.2vw]'>
                      <Image src='/assets/icons/enter-wh.svg' width={900} height={900} alt='' className='w-full h-full object-fill' />
                    </div>
                    <p className='text-[0.9vw]'>SUBMIT</p>
              </div>
            </div>
            <hr className='text-neutral-800 '/>
            <div className='max-w-[25vw] py-[1vw]'>
              <p className='text-[0.9vw] text-neutral-500 font-display'>By submitting your email, you’ll be the first to know about upcoming updates for Made With Gsap. You can unsubscribe at any time.</p>
            </div>
          </div>

          



          <div className='flex text-[0.9vw] justify-between gap-[8vw] pl-[20%] w-[65%] pr-[15%]'>
            <div className='flex flex-col text-neutral-500'>
                <p>SOCIAL</p>
                <div className='flex flex-col gap-[0.5vw] pt-[1vw] text-left text-white'>
                  <p className='text-nowrap cursor-pointer hover:text-[#C9FE6E]'>X (TWITTER)</p>
                  <p className='text-nowrap cursor-pointer hover:text-[#C9FE6E]'>INSTAGRAM</p>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>BLUESKY</p>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>LINKEDIN</p>
                  
                </div>
            </div>

            <div className='flex flex-col text-neutral-500'>
                <p>PAGES</p>
                <div className='flex flex-col gap-[0.5vw] pt-[1vw] text-left text-white'>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>HOME</p>
                  <p  className='cursor-pointer hover:text-[#C9FE6E]'>COLLECTION</p>
                  <p  className='cursor-pointer hover:text-[#C9FE6E]'>FAQ</p>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>PRICING</p>
                  
                </div>
            </div>

             <div className='flex flex-col text-neutral-500'>
                <p>CONTACT</p>
                <div className='flex flex-col gap-[0.5vw] pt-[1vw] items-center text-left text-white'>
                  <p className='cursor-pointer hover:text-[#C9FE6E]'>REACH US</p>
                  
                  
                </div>
            </div>

          </div>
      </div>


      <div className='flex text-neutral-300 py-[3vw] justify-between items-end'>
        <div className='flex text-[0.9vw] font-medium gap-[3vw]'>
          <p className='cursor-pointer hover:text-[#C9FE6E]'>2025©</p>
          <p className='cursor-pointer hover:text-[#C9FE6E]'>PERMISSIONS & TERMS</p>
          <p className='cursor-pointer hover:text-[#C9FE6E]'>PRIVACY POLICY</p>
        </div>
        <div className=' '>
          <div className='w-[48vw] h-fit'>
            <Image src='/assets/icons/white-logo.svg' width={900} height={900} alt='logo' className='h-full w-full object-cover' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
