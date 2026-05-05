import Link from 'next/link'
import React from 'react'
import UserIcon from '../../ui/icons/UserIcon'
import HeartIcon from '../../ui/icons/HeartIcon'
import CardIcon from '../../ui/icons/CardIcon'

export default function HeaderUserSide() {
  return (
    <div className='pl-18 flex items-center gap-12 justify-between'>
      <Link href={'/'} className='text-white flex items-center gap-1 text-nowrap text-[14px] font-normal leading-5'>
        <UserIcon className={'w-6 h-6'} color={'white'}/>
        Sign in
      </Link>

      <button className='bg-transparent cursor-pointer text-white flex items-center gap-1 text-nowrap text-[14px] font-normal leading-5 outline-none border-none'>
        <HeartIcon className={'w-6 h-6'} color={'white'}/>
        Favorites
      </button>

      <button className='bg-transparent text-white cursor-pointer flex items-center gap-1 text-nowrap text-[14px] font-normal leading-5 outline-none border-none'>
        <CardIcon className={'w-6 h-6'} color={'white'} />
        Card
        <span className='bg-green-600 rounded-full flex items-center justify-center text-white w-6 h-5.75'>3</span>
      </button>
    </div>
  )
}
