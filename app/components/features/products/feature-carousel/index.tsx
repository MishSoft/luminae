import Button from '@/app/components/ui/button'
import { ArrowIcon } from '@/app/components/ui/icons'
import { ReactNode } from 'react'


export default function FeatureCarousel({children}: {children: ReactNode}) {
  return (
    <div className='bg-bg-feature-peach hidden lg:block'>
      <div className="container flex items-center justify-between ">
        <Button className='p-5' type="button" icon={<ArrowIcon className={'rotate-90 size-4 cursor-pointer'} color={'black'} />} />
        <div className='w-full'>
          {
            children
          }
        </div>
        <Button className='p-5' type="button" icon={<ArrowIcon className={'-rotate-90 size-4 cursor-pointer'} color={'black'} />} />
     </div>
    </div>
  )
}
