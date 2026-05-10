import HeartIcon from '@/app/components/ui/icons/HeartIcon'

export default function ProdTitle({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className='flex items-start justify-between'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-text-main font-bold text-[18px] leading-6 line-clamp-1'>{title}</h3>
        <p className='text-text-muted font-normal text-[14px] leading-5 line-clamp-1'>{subTitle}</p>
      </div>
      <button className='p-2 hover:bg-gray-50 rounded-full transition-colors'>
        <HeartIcon className='w-6 h-6' color="#1C1C1C" />
      </button>
    </div>
  )
}
