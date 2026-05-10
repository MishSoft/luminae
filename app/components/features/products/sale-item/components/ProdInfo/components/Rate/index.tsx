import RateIcon from '@/app/components/ui/icons/RateIcon'

export default function Rate({ rate, count }: { rate?: number, count?: number }) {
  return (
    <div className='flex items-center gap-1.5'>
      <div className='flex items-center gap-0.5'>
        {[1, 2, 3, 4, 5].map((star) => (
          <RateIcon
            key={star}
            className={`${rate && star <= rate ? 'fill-rating-star' : 'fill-icon-muted'}`}
          />
        ))}
      </div>
      <span className='text-icon-muted text-[12px] font-normal'>({count})</span>
    </div>
  )
}
