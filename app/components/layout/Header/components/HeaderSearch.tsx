"use client"
import Button from '@/app/components/ui/button'
import DropDown from '@/app/components/ui/drop-down'
import { SearchIcon } from '@/app/components/ui/icons'
import InputContainer from '@/app/components/ui/input'
import megaMenu from "@/app/constants/mega-data.json"
import { useState } from 'react'

export default function HeaderSearch() {
   const dropDownOptions = megaMenu.megaMenu.map((item) => ({
      title: item.title,
      category: item.category
    }))
    const [selectedCategory, setSelectedCategory] = useState<string>("")
  return (
    <InputContainer placeholder="Search Products" containerClassName='relative w-full gap-[16px] md:flex-[0_0_345px]  border border-border-light/50 rounded-md flex items-center justify-between' className='text-[14px] w-full  leading-5 py-2.5 px-3 outline-none bg-transparent'>
      <div className='flex items-center gap-3'>
        <DropDown options={dropDownOptions} onSelect={(option) => setSelectedCategory(option.category as string)} iconClassName={'w-[12px] h-[10px] mt-1'} iconColor={'black'} placeholder={selectedCategory || "All categories"} className='flex items-center' dropDownClassName='top-full' />
        <Button className='border-l px-2 py-1 outline-none cursor-pointer border-border-light' icon={<SearchIcon className={'w-5 h-5 '} color={'black'} />} type={"button"} />
      </div>
    </InputContainer>
  )
}

