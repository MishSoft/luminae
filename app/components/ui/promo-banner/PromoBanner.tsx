import Image from 'next/image'
import Link from 'next/link'

interface PromoBannerProps {
  className: string
  image: string
  title: string
  description: string
  link: string
}

export default function PromoBanner({ className, image, title, description, link }: PromoBannerProps) {
  return (
    <div className={`max-w-155 w-full hidden h-95.75  lg:flex items-center justify-between ${className}`}>
      <div className='flex flex-col gap-7.75 text-[#FFFFFF] px-5'>
        <div className='flex flex-col gap-4 '>
          <h2 className=' leading-11.5 text-[36px] font-extrabold'>{title}</h2>
          <p className='font-normal text-[28px] leading-9'>{description}</p>
        </div>
        <Link className='font-normal text-[20px] leading-11.5 underline' href={link}>Exlopre all categories</Link>
      </div>
      <div className='relative max-w-77.5 w-full h-95.75'>
        <Image fill src={image} alt='' className='object-cover xl:object-fill lg:object-center' />
      </div>
    </div>
  )
}
