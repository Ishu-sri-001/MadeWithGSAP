import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const LinkBtn = () => {
  return (
    <div className='w-[40vw] h-[12vh] cursor-pointer'>

    <div className='flex items-center justify-between relative'>
        <div className='w-[3vw] h-[5vh]'>
            <Image
                src='/assets/icons/enter.svg'
                width={900}
                height={900}
                alt='arrow'
                className='h-full w-full object-fill'
                />
        </div>
        <Link href='./' className='text-[4.5vw] text-primary w-full'> Explore Collection </Link>
        <div className='w-[38vw] px-[1vw] h-[0.3vw] absolute bottom-[10%] left-[1%] bg-black'>

        </div>
        </div>
    </div>
  )
}

export default LinkBtn