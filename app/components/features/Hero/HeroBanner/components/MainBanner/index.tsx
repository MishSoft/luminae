import Image from "next/image"
import DropboxIcon from '@/app/components/ui/icons/DropboxIcon'
import Button from '@/app/components/ui/button'

export default function MainBanner() {
  return (
    <div className='w-full h-full relative'>
      <Image fill src={'/assets/images/hero-banner/banner.png'} className='z-2' alt='' />
      <div className='absolute w-full flex items-center gap-8 justify-center flex-col h-full bg-hero-blue/50 left-0 z-40'>
        <span className='text-white font-bold text-center text-[32px] uppercase leading-12.5'>Kimonos, Caftans & Pareos</span>
        <span className='text-white font-medium text-center text-[28px] leading-12.5'>Poolside glam included From $4.99</span>
        <Button className='uppercase bg-hero-blue cursor-pointer justify-center text-white py-4 max-w-60.75 w-full rounded-md font-medium leading-5 text-[14px] flex items-center gap-2' type="button" text="Shop Now" icon={<DropboxIcon className='text-white' />} />
      </div>
    </div>
  )
}
