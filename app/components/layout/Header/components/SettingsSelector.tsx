import DropDown from '@/app/components/ui/drop-down'
import { useLangStore } from '@/store/useLangStore'
import langData from "@/app/constants/lang-data.json"
import { useState } from 'react'
import { CURRENCY_OPTIONS } from '@/app/constants/currency'

export default function SettingsSelector() {
  const [selectValute, setSelectValute] = useState('USD')
  const [selectLang, setSelectLang] = useState('English')
  const currentLang = useLangStore((state) => state.currentLang);
  const setLanguage = useLangStore((state) => state.setLanguage);
  return (
    <div className='relative ml-16 xl:mr-18 xl:ml-auto flex items-center mt-1 max-w-36 w-full justify-end gap-6.5'>
      <DropDown options={CURRENCY_OPTIONS} onSelect={(option) => setSelectValute(option.category as string)} className='text-white text-[12px]' placeholder={selectValute} iconClassName={'w-[10px] h-[5px] '} iconColor={'white'} dropDownClassName='top-full' />
      <DropDown options={langData} onSelect={(option) => setSelectLang(option.category as string)} className='text-white text-[12px]' placeholder={currentLang === 'eng' ? 'English' : 'Georgian'} iconClassName={'w-[10px] h-[5px]'} iconColor={'white'} dropDownClassName='top-full' />
    </div>
  )
}
