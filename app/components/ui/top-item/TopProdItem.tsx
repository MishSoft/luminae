import React from 'react'
import Image from "next/image"
import HeartIcon from '../icons/HeartIcon'
import RateIcon from '../icons/RateIcon'
import Button from '../button/Button'
export default function TopProdItem() {
  return (
    <div className='lg:max-w-75 min-w-80 sm:min-w-40 lg:min-w-50 w-full group h-120 relative overflow-hidden hover:shadow-lg duration-200 shadow-sm'>
      <div className='relative h-full bg-[#EEF2F3]'>
        <Image fill className='object-cover sm:object-fill lg:object-cover' src={'/assets/images/top-product/top-prod1.jpg'} alt={''} />
      </div>
      <div className='absolute w-full bottom-0 bg-white  p-5 flex flex-col gap-4'>
        <div className='flex items-center justify-between '>
          <div className='flex flex-col gap-1'>
            <span className='capitalize text-black font-bold text-[12px] leading-5'>mango</span>
            <span className='text-[#555555] font-normal text-[10px] leading-5'>Kimono & Caftan - Black - Regular fit</span>
          </div>

          <Button type="button" icon={<HeartIcon className={''} color={'black'} />} />
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <RateIcon className={'size-5'} />
            <RateIcon className={'size-5'} />
            <RateIcon className={'size-5'} />
            <RateIcon className={'size-5'} />
            <RateIcon className={'size-5'} />
          </div>
          <span className='font-normal leading-5 text-[12px] text-[#555555]'>(289)</span>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-[#FF2E00] font-extrabold text-[14px] leading-5'>$228</span>
          <span className='text-[#9D9D9D] font-normal text-[14px] leading-5'>$290</span>
          <span className='text-[#FF2E00] font-normal text-[12px] leading-5'>-10%</span>
        </div>
      </div>
    </div>
  )
}
