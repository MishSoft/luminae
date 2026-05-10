"use client"
import Image from "next/image"
import Button from '@/app/components/ui/button'
import { PropsDataProps } from '@/types/prodDataTypes'
import PriceDisplay from "@/app/components/ui/price-display"

export default function TrendingItem({ prodData }: { prodData: PropsDataProps }) {
  return (
    <div className='relative md:max-w-101.5 min-w-80 md:min-w-100 h-109.25 overflow-hidden w-full rounded-lg'>
      <Image fill src={prodData.image} alt={prodData.name} className='object-cover' />

      <div className='py-4.25 px-5 absolute bottom-0 bg-foreground w-full flex items-center justify-between'>
        <div className='flex flex-col gap-3 text-white'>
          <span className='font-bold capitalize text-[14px] leading-5 text-text-on-dark'>
            {prodData.name}
          </span>
          <span className='text-icon-muted leading-5 text-[12px] font-normal'>
            {prodData.subName}
          </span>
        </div>

        <Button className='py-3 px-6 capitalize gap-2 text-[14px] flex items-center text-white border rounded-xl cursor-pointer' type="button">
          <PriceDisplay usdPrice={prodData.price!} />
          <span className="">Shop Now</span>
        </Button>
      </div>
    </div>
  )
}
