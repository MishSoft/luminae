export default function ProdTitle({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <div className='flex flex-col'>
      <h3 className='text-text-main font-bold text-[14px] leading-5 line-clamp-1'>{title}</h3>
      <p className='text-text-muted font-normal text-[12px] leading-5 line-clamp-1'>{subTitle}</p>
    </div>
  )
}
