import Nav from '../Nav'
import Logo from './components/Logo'
import HeaderSearch from './components/HeaderSearch'
import HeaderSocials from './components/HeaderSocials'

export default function MainHeader() {
  return (
    <div className='container py-7.75  flex flex-wrap xl:flex-nowrap shrink-0 items-center justify-between  md:gap-20'>
      <div className='flex items-center  gap-6 w-full xl:w-auto xl:gap-20 flex-col md:flex-row justify-between  xl:justify-start'>
        <Logo />
        <HeaderSearch />
      </div>
      <div className='flex w-full justify-between items-center gap-20'>
        <Nav />
        <HeaderSocials />
      </div>
    </div>
  )
}

