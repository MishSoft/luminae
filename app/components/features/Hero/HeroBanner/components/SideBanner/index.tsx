import Image from "next/image"

export default function SideBanner() {
  return (
    <div className='max-w-136.75 w-full  relative '>
      <Image fill src={'/assets/images/hero-banner/banner.jpg'} className='object-cover' alt='' />
      <div className='absolute max-w-57 w-full top-[50%] translate-y-[-50%] hidden left-full translate-x-[-50%] z-45 xl:flex flex-col bg-background '>
        <div className='font-bold leading-5 text-[20px] flex text-center gap-2.75 flex-col px-7.5 py-9'>
          <span className='capitalize'>Summer Essentials</span>
          <span className='text-sale-red font-bold text-[20px] leading-5'>20% off</span>
        </div>
        <div className='bg-foreground flex capitalize items-center justify-center py-2.5 text-text-on-dark'>
          19 jul - 30 jul
        </div>
      </div>
    </div>
  )
}
