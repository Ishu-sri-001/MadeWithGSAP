import React from 'react'
import Image from 'next/image'

const Button = (props) => {
  return (
    <div className={`h-[3.2vw] flex items-center justify-between w-fit my-auto px-[1vw]  gap-[0.5vw] cursor-pointer ${props.isBorder ? 'border border-black' : '' } ${props.bg}`}>
        
            {props.isArrow && (
                <div className='w-[1vw] h-[1.7vw] '>
  <Image
    src='/assets/icons/enter.svg'
    width={900}
    height={900}
    alt='arrow'
    className='h-full w-full object-fill'
  />
   </div>
)}

       
        <p className='h-fit font-body w-fit my-auto text-black uppercase text-[1vw]'>

            {props.title}
        </p>
    </div>
  )
}

export default Button
