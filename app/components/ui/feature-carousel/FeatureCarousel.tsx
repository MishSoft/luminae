import React, { ReactNode } from 'react'
import Button from '../button/Button'
import ArrowIcon from '../icons/ArrowIcon'

export default function FeatureCarousel({children}: {children: ReactNode}) {
  return (
    <div className='bg-[#F7DDD0] hidden lg:block'>
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
