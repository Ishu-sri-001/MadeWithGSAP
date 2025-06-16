import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Button from "@/components/Buttons/index"

const Header = () => {

    const navItems=[
        {
            id: 1,
            name: 'Collection',
            link: '/collection'
        },
        {
            id: 2,
            name: 'Pricing',
            link: '/pricing'
        },
        {
            id: 3,
            name: 'FAQ',
            link: '/faq'
        },
    ];

  return (
   
        <div className='fixed z-50 w-full overflow-x-hidden overflow-y-hidden top-0 flex items-center justify-between h-[15vh] px-[2vw] '>
            <div className='h-[4vh] w-[10vw] flex flex-col gap-[0.5vw] group justify-between items-center duration-400 transition-all  overflow-hidden cursor-pointer'>  
  <div className='h-full w-full translate-y-[-100%] group-hover:translate-y-[20%] duration-400 transition-all'>
    <Image 
      src='/assets/icons/logo.svg' 
      width={900} 
      height={900} 
      alt='' 
      className='h-full w-full object-fill'
    />
  </div>
  <div className='h-full w-full translate-y-[-100%] group-hover:translate-y-[130%] duration-400 transition-all '>
    <Image 
      src='/assets/icons/logo.svg' 
      width={900} 
      height={900} 
      alt='' 
      className='h-full w-full object-fill'
    />
  </div>
</div>

            {/* <div className='flex justify-between gap-[2.5vw] pl-[11vw] font-display group'>
                
                {navItems.map((links) => (
                    <Link key={links.id} className='font-heading font-medium text-[1.3vw] link text-black' href={links.link}>{links.name} </Link>
                ))}

               
            </div> */}

            <div className='flex justify-between gap-[2.5vw] pl-[11vw] font-display'>
  {navItems.map((link) => (
    <div key={link.id} className='overflow-hidden h-[2vw] group relative'>
      <Link href={link.link} className='block font-heading font-medium text-[1.3vw] text-black transition-all duration-300  group-hover:translate-y-[100%]'>
        {link.name}
      </Link>
      <Link href={link.link} className='block font-heading font-medium text-[1.3vw] text-black transition-all duration-300  absolute top-0 left-0 group-hover:translate-y-[0%] translate-y-[-100%]'>
        {link.name}
      </Link>
    </div>
  ))}
</div>


            <div className='flex justify-between gap-[2vw]'>
                <div className='text-black'>
                    <Button title='Sign In'/>
                </div>
                <div className='text-black'>
                    <Button title='Start Learning Now' isArrow={true} isBorder={false} bg='bg-[#C9FE6E]'/>
                </div>
            </div>

        </div>
    
  )
}

export default Header
