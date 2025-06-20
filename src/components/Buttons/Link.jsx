import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const LinkBtn = () => {
  return (
    <div className='w-[40vw] h-[12vh] max-md:w-full max-md:h-[15vw] cursor-pointer group relative overflow-hidden '>

    <div className='flex flex-col translate-y-[-50%] group-hover:translate-y-[0] duration-300 transition-all'>
      <div className='flex items-center justify-between  '>

        <div className='w-[3vw] h-[5vh] max-md:w-[20vw] max-md:h-[10vw]'>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw] max-md:text-[8vw] text-primary w-full text-nowrap'> Explore Collection </Link>
          
        </div>
        <div className='flex items-center justify-between   group max-md:w-[70vw] max-md:h-[40vw]'>

        <div className='w-[3vw] h-[5vh] max-md:w-[20vw] max-md:h-[10vw]'>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw] max-md:pl-[1vw] max-md:text-[8vw] text-primary w-full text-nowrap'> Explore Collection </Link>

        </div>
          

        
        
                
        </div>
         <div className='w-[38vw] max-md:w-[70vw] px-[1vw] h-[0.3vw] max-md:h-[0.5vw]  absolute bottom-0 max-md:bottom-[-5%]  left-[1%] bg-black' />
    </div>
  )
}

export default LinkBtn