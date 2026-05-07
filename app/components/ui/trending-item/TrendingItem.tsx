import React from 'react'
import Image from "next/image"
export default function TrendingItem() {
  return (
    <div className='relative max-w-101.5 h-109.25  overflow-hidden w-full min-w-100 rounded-lg'>
      <Image fill src={'/assets/images/trending-product/trend1.jpg'} alt={''} className='object-cover' />
      <div className=' py-4.25 px-5 absolute bottom-0 bg-[#262626] w-full flex items-center justify-between'>
        <div className='flex flex-col gap-3 text-white'>
          <span className='font-bold capitalize text-[16px] leading-5 text-[#FFFFFF]'>
            cool & sexy calvin klein
          </span>
          <span className='text-[#C4C4C4] leading-5 text-[14px] font-normal'>Dotted dress-casual</span>
        </div>
        <button className='py-3 px-6 capitalize gap-2 flex items-center text-white border rounded-xl cursor-pointer'>
          <span>$89</span>
          <span>shop now</span>
        </button>
      </div>
    </div>
  )
}
