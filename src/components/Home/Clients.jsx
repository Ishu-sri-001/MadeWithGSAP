import React from 'react';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className='w-full h-fit py-[5vw] text-white dark-bg pt-[15vw]' id='clients'>
        <div className='flex h-full w-full flex-col justify-between items-center gap-[4vw]'>
            <h2 className='font-body text-[1vw]'>TRUSTED BY AWESOME AGENCIES</h2>
            <div className='w-fit mx-auto h-[3vw] p'>
                <Image src='/assets/images/clients/logos1.png' width={900} height={900} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Clients
