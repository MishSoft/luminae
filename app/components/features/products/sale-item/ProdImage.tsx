import Image from "next/image"

export default function ProdImage({image}:{image:string}) {
  return (
    <div className='relative h-40 max-w-60.25  w-full flex items-center  justify-center'>
      <Image className='object-cover group-hover:scale-82 duration-200 scale-80' fill src={image} alt='Prod image' />
    </div>
  )
}
