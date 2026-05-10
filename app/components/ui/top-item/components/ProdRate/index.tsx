import RateIcon from '@/app/components/ui/icons/RateIcon'

export default function ProdRate({ rate, count }: { rate?: number, count?: number }) {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <RateIcon
            key={star}
            className={`w-6 h-6 ${rate && star <= rate ? 'fill-[#FFC700]' : 'fill-gray-200'}`}
          />
        ))}
      </div>
      <span className='text-text-muted text-[16px] font-normal'>({count})</span>
    </div>
  )
}
