import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import InputContainer from '../../ui/input/InputContainer'
import DropDown from '../../ui/drop-down/DropDown'
import megaData from '@/data/megaData.json'
import SearchIcon from '../../ui/icons/SearchIcon'
import Nav from '../Nav/Nav'
import InstagramIcon from '../../ui/icons/InstagramIcon'
import FacebookIcon from '../../ui/icons/FacebookIcon'
import TelegramIcon from '../../ui/icons/TelegramIcon'
import CardIcon from '../../ui/icons/CardIcon'
import { Menu } from 'lucide-react'
import { useSidebarStore } from '@/store/useNavBarStore'
import Button from '../../ui/button/Button'

export default function MainHeader() {
  const { openSidebar } = useSidebarStore()
  const dropDownOptions = megaData.megaMenu.map(item => ({
    title: item.title,
    category: item.category
  }))
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  return (
    <div className='container py-7 flex flex-wrap xl:flex-nowrap shrink-0 items-center justify-between md:gap-4.25'>
      <div className='flex items-center gap-8 xl:gap-0  xl:max-w-138.5 w-full flex-col md:flex-row  justify-between xl:justify-start'>
        {/* Logo container */}
        <div className='flex items-center  justify-between w-full'>
          <Button type='button' icon={<Menu />} handleClick={openSidebar} className='cursor-pointer md:hidden'/>
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
        </div>
        {/* Input */}
        <InputContainer placeholder='Search Producs' containerClassName='relative w-full gap-[16px] md:flex-[0_0_345px]  border border-border-light/50 rounded-md flex items-center justify-between' className='text-[14px] w-full  leading-5 py-2.5 px-3 outline-none bg-transparent'>
          <div className='flex items-center gap-3'>
            <DropDown options={dropDownOptions} onSelect={(option) => setSelectedCategory(option.category as string)} iconClassName={'w-[12px] h-[10px] mt-1'} iconColor={'black'} placeholder={selectedCategory || "All categories"} className='flex items-center' />
            <Button className='border-l px-2 py-1 outline-none cursor-pointer border-border-light' icon={<SearchIcon className={'w-5 h-5 '} color={'black'} />} type={"button"} />
          </div>
        </InputContainer>
      </div>
      <div className='flex w-full gap-40 items-center justify-between'>
        <Nav />
        <div className='md:flex items-center gap-4 hidden'>
          <InstagramIcon className={'cursor-pointer fill-icon-muted hover:fill-foreground/70 duration-200'} color={""} />
          <FacebookIcon className={'cursor-pointer fill-icon-muted hover:fill-foreground/70 duration-200'} color={''} />
          <TelegramIcon className={'cursor-pointer fill-icon-muted hover:fill-foreground/70 duration-200'} color={''} />
        </div>
      </div>
    </div>
  )
}
