"use client"
import HeaderPromo from './HeaderPromo'
import HeaderUserSide from './HeaderUserSide'
import CategorySelector from './components/CategorySelector'
import SettingsSelector from './components/SettingsSelector'

export default function SubHeader() {
  return (
    <div className='bg-foreground w-full hidden md:flex items-center justify-center '>
      <div className="container flex py-2 items-center border justify-between">
        <CategorySelector />
        <SettingsSelector />
        <HeaderPromo/>
        <HeaderUserSide/>
      </div>
    </div>
  )
}
