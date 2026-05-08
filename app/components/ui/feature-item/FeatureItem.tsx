import Image from 'next/image'

interface FeatureItemProps {
  title: string
  description: string
  image: string
}

export default function FeatureItem({ title, description, image }: FeatureItemProps) {
  return (
    <div className=' flex items-center justify-center '>
      <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-[20px] leading-5 tracking-wider uppercase text-[#465D6B]'>{title}</h2>
        <p className='text-[#555555] font-medium max-w-123.25 text-[20px] leading-7'>
          {description}
        </p>
      </div>
      <div className='max-w-123.25 relative h-55.25 w-full'>
        <Image fill src={image} alt='dd' className=' object-contain ' />
      </div>
    </div>
  )
}
