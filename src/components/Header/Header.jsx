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
            <div className='h-[2.5vh] w-[10vw]'>
                <Image src='/assets/icons/logo.svg' width={900} height={900} alt='' className='className="h-full w-full object-fill"'/>
            </div>

            <div className='flex justify-between gap-[2.5vw] pl-[11vw] font-display'>
                {navItems.map((links) => (
              <Link key={links.id} className='font-heading font-medium text-[1.3vw] link text-black' href={links.link}>{links.name} </Link>
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
