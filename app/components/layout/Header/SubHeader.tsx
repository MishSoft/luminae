"use client"
import { useState } from 'react'
import CategoryMenuIcon from '../../ui/icons/CategoryMenuIcon'
import DropDown from '../../ui/drop-down/DropDown'
import HeaderPromo from './HeaderPromo'
import HeaderUserSide from './HeaderUserSide'

const valute = [
  {
    title: "usd",
    category: "usd"
  },

  {
    title: "euro",
    category: "euro"
  },

  {
    title: "gel",
    category: "gel"
  }
]


const languages = [
  {
    title: "english",
    category: "eng"
  },

  {
    title: "georgian",
    category: "geo"
  }
]

export default function SubHeader() {
  const [selectValute, setSelectValute] = useState('USD')
  const [selectLang, setSelectLang] = useState('English')
  return (
    <div className='bg-foreground w-full hidden md:flex items-center justify-center '>
      <div className="container flex py-2 items-center border justify-between">
        <div className='flex  items-center  gap-1 text-text-on-dark max-w-36 w-full'>
          <CategoryMenuIcon className={'text-text-on-dark w-6 h-6'} color={'#ffffff'}/>
          <span className='capitalize text-[20px] leading-5 font-bold'>categories</span>
        </div>
        <div className='relative ml-16 xl:mr-18 xl:ml-auto flex items-center mt-1 max-w-36 w-full justify-end gap-6.5'>
          <DropDown options={valute} onSelect={(option) => setSelectValute(option.category as string)} className='text-white text-[12px]' placeholder={selectValute} iconClassName={'w-[10px] h-[5px] '} iconColor={'white'}/>
          <DropDown options={languages} onSelect={(option) => setSelectLang(option.category)} className='text-white text-[12px]' placeholder={selectLang} iconClassName={'w-[10px] h-[5px]'} iconColor={'white'} />
        </div>

        <HeaderPromo/>
        <HeaderUserSide/>
      </div>
    </div>
  )
}
