"use client"
import Button from '@/app/components/ui/button'
import { CardIcon } from '@/app/components/ui/icons'
import Link from 'next/link'
import Image from "next/image"
import { Menu } from 'lucide-react'
import { useSidebarStore } from '@/app/components/features/navigation/store/useNavBarStore'
export default function Logo() {
  const { openSidebar } = useSidebarStore()

  return (
    <div className='flex items-center w-full justify-between ' >
      <Button type='button' icon={<Menu />} handleClick={openSidebar} className='cursor-pointer md:hidden' />
      <Link href={'/'} className='flex   items-center gap-1.5 shrink-0'>
        <Image width={49} height={33} src='/assets/images/logo/Logo.svg' className='md:w-12.25 md:h-8.25 w-10 h-6.5' alt='Logo' aria-label='Luminae Logo' />
        <span className=' text-[32px] font-bold leading-5 not-italic'>
          Luminae
        </span>
      </Link>
      <div className='flex items-center gap-2 md:hidden'>
        <Button icon={<CardIcon className={'w-6 h-6'} color={'black'} />} className='bg-transparent  flex text-white cursor-pointer items-center gap-1 text-nowrap text-[14px] font-normal leading-5 outline-none border-none' type={"button"} />
        <span className='bg-green-600 rounded-full flex items-center justify-center text-white w-6 h-5.75'>3</span>
      </div>
    </div >
  )
}
