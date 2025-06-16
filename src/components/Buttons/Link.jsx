import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const LinkBtn = () => {
  return (
    <div className='w-[40vw] h-[12vh] cursor-pointer group relative overflow-hidden'>

    <div className='flex flex-col translate-y-[-50%] group-hover:translate-y-[0] duration-300 transition-all'>
      <div className='flex items-center justify-between  '>

        <div className='w-[3vw] h-[5vh]'>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw] text-primary w-full text-nowrap'> Explore Collection </Link>
          
        </div>
        <div className='flex items-center justify-between  group'>

        <div className='w-[3vw] h-[5vh]'>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw] text-primary w-full text-nowrap'> Explore Collection </Link>

        </div>
          

        
        
                
        </div>
         <div className='w-[38vw] px-[1vw] h-[0.3vw] absolute bottom-0 left-[1%] bg-black' />
    </div>
  )
}

export default LinkBtn