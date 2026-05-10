import React from 'react'
import Image from "next/image"

export default function HeaderPromo() {
  return (
    <div className='border-x border-border-light hidden xl:flex    items-center gap-2.5 justify-center px-18 '>
      <Image width={63} height={62} src={'/assets/images/exclusive-product/men-cosmetic.svg'} alt='Promo Image' />
        <div className='flex flex-col gap-1'>
          <span className='capitalize font-bold text-[12px] leading-5 text-text-on-dark'>Weekly Men's Toiletries Coupons.</span>
          <p className=' font-normal text-[12px] text-nowrap leading-5 text-border-light'>We extend exclusive discounts to our male clientele</p>
        </div>
    </div>
  )
}
