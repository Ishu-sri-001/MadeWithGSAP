import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const LinkBtn = () => {
  return (
    <div className='w-[40vw] max-md:w-fit h-[12vh] max-md:h-[7.5vw]  max-sm:w-full max-sm:h-[12vw]  cursor-pointer group relative overflow-hidden '>

    <div className='flex flex-col translate-y-[-50%] group-hover:translate-y-[0] duration-300 transition-all'>
      <div className='flex items-center justify-between '>

        <div className='w-[3vw] h-[5vh] max-md:w-[5vw] max-md:h-[8vw] max-sm:w-[20vw] max-sm:h-[10vw] max-md:mr-[4vw] '>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw] max-sm:text-[8vw] text-primary w-full text-nowrap'> Explore Collection </Link>
          
        </div>
        <div className='flex items-center justify-between  group max-sm:w-[70vw] max-sm:h-[40vw]'>

        <div className='w-[3vw] h-[5vh] max-md:w-[5vw] max-md:h-[8vw] max-sm:w-fit max-sm:h-[10vw] max-md:mr-[4vw] max-sm:mr-0 '>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw]  max-sm:text-[8vw] text-primary w-full text-nowrap max-md:text-[5vw] max-sm:pl-[2vw]'> Explore Collection </Link>

        </div>
          

        
        
                
        </div>
         <div className='w-[38vw] max-sm:w-[70vw] max-md:w-[80vw] px-[1vw] h-[0.3vw] max-sm:h-[0.5vw]  absolute bottom-0 max-sm:bottom-0  left-[1%] bg-black max-md:bottom-0' />
    </div>
  )
}

export default LinkBtn