import Image from "next/image"

export default function ProdImage({ image, name }: { image: string, name: string }) {
  return (
    <div className='relative w-full h-100 overflow-hidden'>
      <Image
        fill
        src={image}
        alt={name}
        className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
      />
    </div>
  )
}
