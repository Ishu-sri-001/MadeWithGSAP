'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Button from "@/components/Buttons/index"
// import UseMobile from '../Home/UseMobile';
import UseTablet from '../Hooks/UseTable';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Header = () => {

  const [isLogoWhite, setIsLogoWhite] = useState(false);

  useEffect(() => {
          console.log(isLogoWhite)
          const ctx=gsap.context(() => {
              gsap.to(".header-logo2",{
                  // filter:"brightness(20)",
                  scrollTrigger:{
                    trigger:"#cards",
                    start:"top top",
                    end:"bottom top",
                    markers:false,
                    onEnter: () => setIsLogoWhite(true),
                  onLeaveBack: () => setIsLogoWhite(false),
                  }
                 })
                 gsap.to(".header-logo2",{
                  // filter:"brightness(20)",
                  scrollTrigger:{
                    trigger:"#ready",
                    start:"top top",
                    end:"bottom top",
                    markers:false,
                    onEnter: () => setIsLogoWhite(true),
                  
                  }
                 })
                 gsap.to(".header-logo2",{
                  // filter:"brightness(20)",
                  scrollTrigger:{
                    trigger:"#linebreak",
                    start:"top top",
                    end:"bottom top",
                    markers:false,
                    onEnter: () => setIsLogoWhite(false),
                  onLeaveBack: () => setIsLogoWhite(true),
                  }
                 })
          })
          return () => ctx.revert();
      }, [isLogoWhite])
  

  const isMobile = UseTablet();

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

    if(isMobile)
    {
      return null;
    }

  return (
   
        <div className='fixed z-50 w-full overflow-x-hidden overflow-y-hidden top-0 flex items-center justify-between h-[15vh] px-[2vw] '>
            <div className='h-[4vh] w-[10vw] flex flex-col gap-[0.5vw] group justify-between items-center duration-400 transition-all  overflow-hidden cursor-pointer'>  
  <div className='h-full w-full translate-y-[-100%] group-hover:translate-y-[20%] duration-400 transition-all '>
    <Image 
      src='/assets/icons/logo.svg' 
      width={900} 
      height={900} 
      alt='' 
       className={`h-full w-full object-fill header-logo2 ${isLogoWhite ? 'invert' : ''}`}
    />
  </div>
  <div className='h-full w-full translate-y-[-100%] group-hover:translate-y-[130%] duration-400 transition-all '>
    <Image 
      src='/assets/icons/logo.svg' 
      width={900} 
      height={900} 
      alt='' 
      className={`h-full w-full object-fill header-logo2 ${isLogoWhite ? 'invert' : ''}`}
    />
  </div>
</div>

           

            <div className='flex justify-between gap-[2.5vw] pl-[11vw] font-display'>
  {navItems.map((link) => (
    <div key={link.id} className='overflow-hidden h-[2vw] group relative'>
      <Link href={link.link} className='block font-heading font-medium text-[1.3vw] text-black nav-links transition-all duration-300  group-hover:translate-y-[100%]'>
        {link.name}
      </Link>
      <Link href={link.link} className='block font-heading font-medium text-[1.3vw] text-black transition-all duration-300  absolute top-0 left-0 group-hover:translate-y-[0%] nav-links translate-y-[-100%]'>
        {link.name}
      </Link>
    </div>
  ))}
</div>


            <div className='flex justify-between gap-[2vw]'>
                <div className={`${isLogoWhite ? 'text-white' : 'text-black'}`}>
                    <Button title='Sign In'/>
                </div>
                <div className='text-black '>
                    <Button title='Start Learning Now' isArrow={true} isBorder={false} bg='bg-[#C9FE6E]'/>
                </div>
            </div>

        </div>
  )
}

export default Header
