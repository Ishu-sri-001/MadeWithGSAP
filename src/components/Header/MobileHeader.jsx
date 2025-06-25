'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// import UseMobile from '../Home/UseMobile'; 
import UseTablet from '../Hooks/UseTable';

const MobileHeader = () => {
  const isMobile = UseTablet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoWhite, setIsLogoWhite] = useState(false);

 

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (isMenuOpen) {
//         gsap.fromTo(
//          ".mobile-menu",{ 
//             yPercent: -100 
//         }, { 
//             yPercent: 0, 
//             duration: 1, 
//             ease: 'power2.out' 
//         });
//       } else {
//         gsap.fromTo(".mobile-menu",{
//              yPercent: 0,
//         }, {
//           yPercent: -100,
//           duration: 1,
//           ease: 'power2.in',
//         });
//       }
//     });

//     return () => ctx.revert();
//   }, [isMenuOpen]); 

    useEffect(() => {
        console.log(isLogoWhite)
        const ctx=gsap.context(() => {
            gsap.to(".header-logo",{
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
        })
        return () => ctx.revert();
    }, [isLogoWhite])

  const navItems = [
    { id: 1, name: 'Collection', link: '/collection', badge: '50' },
    { id: 2, name: 'Pricing', link: '/pricing' },
    { id: 3, name: 'FAQ', link: '/faq' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  console.log(isMenuOpen)

  if (!isMobile) return null;

    return (
        <div className=''>
       
            <div className='fixed z-50 w-full top-0 flex items-center justify-between max-sm:h-[12vh] max-md:h-[6vh] max-md:pt-[3vw] px-[4vw] '>
                <div className='max-sm:h-[15vw] max-sm:w-[35vw] max-md:h-[2.5vw] max-md:w-fit'>
                    <Image 
                      src='/assets/icons/logo.svg' 
                      width={900} 
                      height={900} 
                      alt='' 
                      className={`h-full w-full object-fill header-logo ${isLogoWhite ? 'invert' : ''}`}
                    />
                  </div>
                
                <div className='flex items-center gap-[3vw]'>
                    <button className='bg-[#C9FE6E] text-black px-[4vw] py-[1.5vh] max-sm:text-[3vw] max-md:text-[2vw] max-md:px-[2vw] max-md:py-[1.5vw] font-medium rounded-[1vw]'>
                        GET STARTED
                    </button>
                    
                    <button 
                        onClick={toggleMenu}
                        className='max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[5vw] max-md:h-[5vw] flex flex-col justify-center items-center border border-neutral-900 max-md:px-[1vw] max-sm:px-[4vw] max-md:py-[2vw]'
                    >
                        {!isMenuOpen ? (
                            <div className='w-full h-full'>

                            <Image 
                                src='/assets/icons/header/open-menu.svg' 
                                width={100} 
                                height={100} 
                                alt='Menu' 
                                className=' object-fill h-full w-full'
                                />
                                </div>
                        ) : (
                            <div className='w-full h-full'>

                            <Image 
                                src='/assets/icons/header/close-menu.svg' 
                                width={100} 
                                height={100} 
                                alt='Close' 
                                className='w-full h-full object-fill'
                                />
                                </div>
                        )}
                    </button>
                </div>
            </div>

             {isMenuOpen && (
                <div className='fixed inset-0 z-30 bg-black/20'></div>
            )}

          
            
                <div 
                    className={`fixed top-0 left-0 w-full z-40  mobile-menu  max-sm:pt-[12vh] max-md:pt-[12vw] ease-in-out overflow-hidden duration-700 ${isMenuOpen ? 'max-sm:h-[50vh] max-md:h-[35vh] bg-white' : 'h-0'}`}
>

                    <div className='px-[4vw] py-[1vh] max-sm:space-y-[3vh] max-md:space-y-[0.5vw]'>
                        {navItems.map((item) => (
                            <div key={item.id} className=''>
                                <Link 
                                    href={item.link}
                                    className='flex items-center justify-between text-black font-medium max-sm:text-[4.5vw] max-md:text-[3vw]'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span>{item.name}</span>
                                    
                                </Link>
                            </div>
                        ))}
                        
                        <div className='border-b border-gray-100 pb-[4vh]'>
                            <Link 
                                href="/signin"
                                className='text-black font-medium max-sm:text-[4.5vw] max-md:text-[3vw]'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign in
                            </Link>
                        </div>

                        <div className=''>
                            <button className='max-sm:w-full max-md:w-[50%] bg-[#C9FE6E] text-black font-medium py-[2vh] rounded-[1vw] flex items-center justify-start gap-[2vw]'>
                                 <div className='max-sm:w-[1vw] max-sm:h-[1.7vw] max-md:h-[2vw] max-md:w-[2vw] ml-[4vw]'>
                                          <Image
                                            src='/assets/icons/enter.svg'
                                            width={900}
                                            height={900}
                                            alt='arrow'
                                            className='h-full w-full object-fill'
                                          />
                                        </div>
                                <span className='max-sm:text-[4vw] max-md:text-[2vw] mx-auto'>START LEARNING NOW</span>
                                
                            </button>
                        </div>
                    </div>
                </div>
          
        </div>
    );
};

export default MobileHeader;