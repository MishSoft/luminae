import React from 'react'
import Image from "next/image"
import RateIcon from '../icons/RateIcon'
export default function SaleItem() {
  return (
    <div className='flex flex-col w-full lg:max-w-75 min-w-80 sm:min-w-40 lg:min-w-50 items-center rounded-lg shadow-[0_0_12px_0_rgba(0,0,0,0.1)]'>
      <div className='flex flex-col py-4.25 px-7.5 items-center w-full'>
        <span className='font-extrabold text-[16px] leading-5 tracking-normal text-center flex items-center justify-center text-[#9D9D9D]'>Deal of the Day</span>
        <div className='flex items-center gap-2.5  text-[#C4C4C4]'>
          <span className='flex items-center text-[#262626] justify-center text-center font-extrabold text-[18px] leading-7.5 tracking-normal'>12</span>
          :
          <span className='flex items-center text-[#262626] justify-center text-center font-extrabold text-[18px] leading-7.5 tracking-normal'>43</span>
          :
          <span className='flex items-center text-[#262626] justify-center text-center font-extrabold text-[18px] leading-7.5 tracking-normal'>12</span>
        </div>
        <div className='flex items-center gap-6.25'>
          <span className='flex items-center justify-center text-center font-normal text-[12px] leading-5 text-[#9D9D9D] tracking-normal'>hour</span>
          <span className='flex items-center justify-center text-center font-normal text-[12px] leading-5 text-[#9D9D9D] tracking-normal'>min</span>
          <span className='flex items-center justify-center text-center font-normal text-[12px] leading-5 text-[#9D9D9D] tracking-normal'>sec</span>
        </div>
      </div>

      <div className='relative h-35 max-w-60.25 w-full flex items-center justify-center'>
        <Image className='object-cover'  fill src={'/assets/images/product/reebok.png'} alt='Prod image' />
      </div>

      <div className='flex justify-center  py-4.25 px-7.5 items-center'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-extrabold text-left text-[16px] leading-5 text-[#262626] '>Rebook</h3>
          <p className='text-[#555555] font-normal text-[12px] leading-5'>Women’s Powder sneakers</p>
          <div className='flex items-center gap-2'>
            <div className='flex items-center'>
              <RateIcon className={''} />
              <RateIcon className={''} />
              <RateIcon className={''} />
              <RateIcon className={''} />
              <RateIcon className={''} />
            </div>
            <span>(54)</span>
          </div>
          <div className='flex items-center gap-3'>
            <h4 className='text-[#FF2E00] font-bold gap-1 flex items-center text-[14px] leading-5'>
              $112.02
              <span className='text-[#555555] font-normal leading-5 text-[12px]'>$129.99</span>
            </h4>
            <div className='w-8.25 h-4 text-[8px] flex items-center justify-center text-white  bg-[#FF2E00] rounded-[2.6px]'>
              - 40%
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
