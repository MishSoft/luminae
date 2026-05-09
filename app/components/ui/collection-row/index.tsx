import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { CollectionRowProps } from './type'

export default function CollectionRow({ className, link, sectionTitle, children }: CollectionRowProps) {
  return (
    <section className='w-full my-21 '>
      <div className='container flex gap-12 flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[28px] font-medium leading-5'>{sectionTitle}</h2>
          {
            link && <Link href={link} className='flex items-center hover:underline'>
              View all
              <ChevronRight size={15} />
            </Link>
          }
        </div>
        <div className={`lg:flex flex items-center justify-start px-2 py-2  lg:items-start lg:justify-between gap-5 ${className}`}>
          {
            children
          }
        </div>
      </div>
    </section>
  )
}
