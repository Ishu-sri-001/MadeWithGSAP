"use client";
import { useState, useEffect } from 'react';

const UseTablet = (breakpoint = 1024) => {
  const [isTablet, setIsTablet] = useState(globalThis.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(globalThis.innerWidth <= breakpoint);
    };

    globalThis.addEventListener('resize', handleResize);
    return () => globalThis.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isTablet;
};

export default UseTablet;
