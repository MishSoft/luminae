import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Trending() {
  return (
    <section className='w-full py-21'>
      <div className='container flex gap-12 flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[28px] font-medium leading-5'>Trending must-haves</h2>
          <Link href={'/'} className='flex items-center hover:underline'>
            View all
            <ChevronRight size={15} />
          </Link>
        </div>
        <div className='flex items-start justify-between gap-5'>

        </div>
      </div>
    </section>
  )
}
