import { RateIcon } from '@/app/components/ui/icons'

interface RateProps {
  rate?: number
  count?: number
}

export default function Rate({ rate, count = 0 }: RateProps) {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center'>
        {
          Array.from({ length: count }).map((_, index) => {
             return (
               <RateIcon key={index}  />
             )
          })
        }
      </div>
      <span>({rate})</span>
    </div>
  )
}
