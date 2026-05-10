import Image from "next/image"

export default function ProdImage({ image }: { image: string }) {
  return (
    <div className='flex items-center justify-center bg-white w-full'>
      <div className='relative max-w-40 w-full h-40 group-hover:scale-105 transition-all duration-300'>
        <Image fill src={image} alt='' className='object-cover' />
      </div>
    </div>
  )
}
