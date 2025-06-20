import React from 'react';
import Image from 'next/image';

const ClientsMobile = () => {
  return (
    <section className='w-full h-fit py-[5vw] pb-[18vw] text-white dark-bg pt-[15vw]' id='clients'>
        <div className='flex h-full w-full flex-col justify-between items-center gap-[9vw]'>
            <h2 className='font-body text-[3.2vw]'>TRUSTED BY AWESOME AGENCIES</h2>
            <div className='w-fit mx-auto h-[3vw] px-[15vw]'>
                <Image src='/assets/images/clients/logos2.png' width={900} height={900} alt='' />
            </div>
            {/* <p className='pt-[18vw] text-[3vw] text-center font-display text-neutral-500 leading-[1]'>
                <span className='block'>
                    SEEMS NICE BUT
                    </span> 
                    <span className='block'>

                    WHAT ARE WE REALLY
                    </span>
                    <span className='block'>
                        TALKING ABOUT
                    </span>
                    </p> */}
        </div>
    </section>
  )
}

export default ClientsMobile
