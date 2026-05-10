"use client"
import DropDown from '@/app/components/ui/drop-down'
import { CURRENCY_OPTIONS } from '@/app/constants/currency'
import { useCurrencyStore } from '@/store/useCurrencyStore'
import { useLangStore } from '@/store/useLangStore'
import langData from "@/app/constants/lang-data.json"

export default function SettingsSelector() {
  const currentCurrency = useCurrencyStore((state) => state.currentCurrency);
  const setCurrency = useCurrencyStore((state) => state.setCurrency);
  
  const currentLang = useLangStore((state) => state.currentLang);
  const setLanguage = useLangStore((state) => state.setLanguage);
  
  return (
    <div className='relative ml-16 xl:mr-18 xl:ml-auto flex items-center mt-1 max-w-36 w-full justify-end gap-6.5'>
      <DropDown options={CURRENCY_OPTIONS} onSelect={(option) => setCurrency(option.category as string)} className='text-white text-[12px]' placeholder={currentCurrency} iconClassName={'w-[10px] h-[5px] '} iconColor={'white'} dropDownClassName='top-full' />
      <DropDown options={langData} onSelect={(option) => setLanguage(option.category as 'eng' | 'geo')} className='text-white text-[12px]' placeholder={currentLang === 'eng' ? 'English' : 'Georgian'} iconClassName={'w-[10px] h-[5px]'} iconColor={'white'} dropDownClassName='top-full' />
    </div>
  )
}

