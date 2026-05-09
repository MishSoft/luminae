import React from 'react'
import Image from "next/image"
import DropboxIcon from '../../ui/icons/DropboxIcon'
import Button from '../../ui/button/Button'
export default function HeroBanner() {
  return (
    <div className='md:flex w-full hidden h-115 relative'>
      <div className='max-w-136.75 w-full  relative '>
        <Image fill src={'/assets/images/hero-banner/banner.jpg'} className='object-cover' alt='' />
        <div className='absolute max-w-57 w-full top-[50%] translate-y-[-50%] hidden left-full translate-x-[-50%] z-45 xl:flex flex-col bg-[#FFFFFF] '>
          <div className='font-bold leading-5 text-[20px] flex text-center gap-2.75 flex-col px-7.5 py-9'>
            <span className='capitalize'>summer essentials</span>
            <span className='text-[#FF2E00] font-bold text-[20px] leading-5'>20% off</span>
          </div>
          <div className='bg-[#262626] flex capitalize items-center justify-center py-2.5 text-[#FFFFFF]'>
            19 jul - 30 jul
          </div>
        </div>
      </div>
      <div className='w-full h-full relative'>
        <Image fill src={'/assets/images/hero-banner/banner.png'} className='z-2' alt='' />
        <div className='absolute w-full flex items-center gap-8 justify-center flex-col h-full bg-[#4172DC]/50 left-0 z-40'>
          <span className='text-white font-bold text-center text-[32px] uppercase leading-12.5'>Kimonos, Caftans & Pareos</span>
          <span className='text-white font-medium text-center text-[28px] leading-12.5'>Poolside glam included From $4.99</span>
          <Button className='uppercase bg-[#4172DC] cursor-pointer justify-center text-white py-4 max-w-60.75 w-full rounded-md font-medium leading-5 text-[14px] flex items-center gap-2' type="button" text='shop now' icon={<DropboxIcon className='text-white' />} />
        </div>
      </div>

    </div>
  )
}
