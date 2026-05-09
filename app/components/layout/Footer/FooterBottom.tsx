"use client"
import Image from 'next/image'
import DropDown from '../../ui/drop-down/DropDown'
import { useLangStore } from '@/store/useLangStore';
import { useState } from 'react';
import langData from "@/data/langData.json"
import InstagramIcon from '../../ui/icons/InstagramIcon';
import FacebookIcon from '../../ui/icons/FacebookIcon';
import TelegramIcon from '../../ui/icons/TelegramIcon';
import Link from 'next/link';

export default function FooterBottom() {
  const [selectLang, setSelectLang] = useState('English')
  const currentLang = useLangStore((state) => state.currentLang);
  const setLanguage = useLangStore((state) => state.setLanguage);
  return (
    <div className='container py-6 flex flex-col gap-3 items-start justify-between'>
      <div className='md:border-b pb-6 flex  items-center justify-center md:justify-between w-full border-[#D9D9D9]'>
        <div className='flex items-center gap-6.25'>
          <Image width={62} height={19} src={'/assets/images/payment-images/visa.svg'} alt='' className='object-cover opacity-30 hover:opacity-100 duration-200 transition-opacity cursor-pointer' />
          <Image width={38} height={30} src={'/assets/images/payment-images/master-card.svg'} alt='' className='object-cover opacity-30 hover:opacity-100 duration-200 transition-opacity cursor-pointer' />
          <Image width={71} height={19} src={'/assets/images/payment-images/paypal.svg'} alt='' className='object-cover opacity-30 hover:opacity-100 duration-200 transition-opacity cursor-pointer' />
        </div>
        <div className='relative px-8 hidden md:block '>
          <DropDown options={langData} onSelect={(option) => setSelectLang(option.category as string)} placeholder={currentLang === 'eng' ? 'English' : 'Georgian'} iconClassName={'w-[10px] h-[5px]'} iconColor={'black'} dropDownClassName='-top-32' />
        </div>
      </div>
      <div className='md:flex pt-6 hidden  justify-between w-full'>
        <span className='font-normal text-[14px] leading-5 flex-1 text-[#262626]'>165-179 Forster Road City of Monash, Melbourne, Australia</span>

        <span className='font-normal text-[#9D9D9D] text-[14px] leading-5 flex-1'>©2023 Copyright in reserved for lumine shop</span>

        <div className='flex items-center gap-6'>
          <Link href={'/'}>
            <InstagramIcon className={'stroke-1.5 size-5 stroke-black'} color={'white'} />
          </Link>
          <Link href={'/'}>
            <FacebookIcon className={'stroke-1.5 size-5 stroke-black'} color={'white'} />
          </Link>
          <Link href={'/'}>
            <TelegramIcon className={'stroke-1.5 size-5 stroke-black'} color={'white'} />
          </Link>
        </div>
      </div>
    </div>
  )
}
