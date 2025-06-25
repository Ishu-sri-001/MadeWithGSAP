import React from 'react';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className='w-full h-fit py-[5vw] text-white dark-bg pt-[15vw]' id='clients'>
        <div className='flex h-full w-full flex-col justify-between items-center gap-[4vw] max-md:gap-[10vw]'>
            <h2 className=' text-[1vw] max-md:text-[2vw] font-display'>TRUSTED BY AWESOME AGENCIES</h2>
            <div className='w-fit mx-auto h-[3vw] max-md:px-[5vw]'>
                <Image src='/assets/images/clients/logos1.png' width={900} height={900} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Clients
