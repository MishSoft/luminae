import Link from 'next/link'
import UserIcon from '../../ui/icons/UserIcon'
import HeartIcon from '../../ui/icons/HeartIcon'
import CardIcon from '../../ui/icons/CardIcon'
import Button from '../../ui/button/Button'

export default function HeaderUserSide() {
  return (
    <div className='pl-18 flex items-center gap-12 justify-between'>
      <Link href={'/'} className='text-white flex group items-center gap-1 text-nowrap text-[14px] font-normal leading-5'>
        <UserIcon className={'w-6 h-6 group-hover:fill-white/50 transition-all duration-200 ease-in-out'} color={'white'}/>
        Sign in
      </Link>

      <Button type={"button"} text='Favorites' icon={<HeartIcon className={'w-6 h-6  group-hover:fill-white/50 transition-all duration-200 ease-in-out'} color={'white'} />} className='bg-transparent cursor-pointer group text-white flex items-center gap-1 text-nowrap text-[14px] font-normal leading-5 outline-none border-none' />

      <div className='flex items-center gap-2'>
        <Button className='bg-transparent text-white group cursor-pointer flex items-center gap-1 text-nowrap text-[14px] font-normal leading-5 outline-none border-none' type={"button"} text='Card' icon={<CardIcon className={'w-6 h-6 group-hover:fill-white/50 transition-all duration-200 ease-in-out'} color={'white'} />} />
        <span className='bg-green-600 rounded-full flex items-center justify-center text-white w-6 h-5.75'>3</span>
      </div>
    </div>
  )
}
