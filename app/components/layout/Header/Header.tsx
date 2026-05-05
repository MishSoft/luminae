"use client"

import MainHeader from "./MainHeader"
import SubHeader from "./SubHeader"




export default function Header() {

  return (
    <header className='w-full flex flex-col'>
      <div className='container py-7 flex flex-wrap xl:flex-nowrap shrink-0 items-center justify-between md:gap-4.25'>
        <MainHeader/>
      </div>
      <SubHeader/>
    </header>
  )
}
