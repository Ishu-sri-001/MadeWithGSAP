'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { gsap } from 'gsap';
import UseMobile from '../Home/UseMobile';

const MobileHeader = () => {
    const isMobile = UseMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const navItems = [
        {
            id: 1,
            name: 'Collection',
            link: '/collection',
            badge: '50'
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

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            
            gsap.fromTo(menuRef.current, { 
                yPercent: -100,
                duration: 1, 
                ease: 'power2.out' 
            }, { 
                yPercent: 0, 
                duration: 1, 
                ease: 'power2.out' 
            }
            );
        } else {
            
            gsap.to(menuRef.current, {
                yPercent: -100,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => setIsMenuOpen(false)
            });
        }
    };

    if(!isMobile)
    {   
        return null;
    }

    return (
        <div className=''>
       
            <div className='fixed z-50 w-full top-0 flex items-center justify-between h-[12vh] px-[4vw] bg-white backdrop-blur-sm'>
                <div className='h-[15vw] w-[35vw] '>
                    <Image 
                      src='/assets/icons/logo.svg' 
                      width={900} 
                      height={900} 
                      alt='' 
                      className='h-full w-full object-fill'
                    />
                  </div>
                
                <div className='flex items-center gap-[3vw]'>
                    <button className='bg-[#C9FE6E] text-black px-[4vw] py-[1.5vh] text-[3vw] font-medium rounded-[1vw]'>
                        GET STARTED
                    </button>
                    
                    <button 
                        onClick={toggleMenu}
                        className='w-[15vw] h-[10vw] flex flex-col justify-center items-center border border-neutral-900 px-[4vw]'
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

          
            {isMenuOpen && (
                <div 
                    ref={menuRef}
                    className='fixed top-0 left-0 w-full h-[50vh] z-40 bg-white backdrop-blur-sm pt-[12vh]'
                >
                    <div className='px-[4vw] py-[1vh] space-y-[3vh]'>
                        {navItems.map((item) => (
                            <div key={item.id} className=''>
                                <Link 
                                    href={item.link}
                                    className='flex items-center justify-between text-black font-medium text-[4.5vw]'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span>{item.name}</span>
                                    
                                </Link>
                            </div>
                        ))}
                        
                        <div className='border-b border-gray-100 pb-[4vh]'>
                            <Link 
                                href="/signin"
                                className='text-black font-medium text-[4.5vw]'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign in
                            </Link>
                        </div>

                        <div className=''>
                            <button className='w-full bg-[#C9FE6E] text-black font-medium py-[2vh] rounded-[1vw] flex items-center justify-start gap-[2vw]'>
                                 <div className='w-[1vw] h-[1.7vw] max-md:h-[3.5vw] max-md:w-[3.5vw] ml-[4vw]'>
                                          <Image
                                            src='/assets/icons/enter.svg'
                                            width={900}
                                            height={900}
                                            alt='arrow'
                                            className='h-full w-full object-fill'
                                          />
                                        </div>
                                <span className='text-[4vw] mx-auto'>START LEARNING NOW</span>
                                
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileHeader;