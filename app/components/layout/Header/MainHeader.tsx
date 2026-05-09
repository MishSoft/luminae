import Nav from '../Nav'
import Logo from './components/Logo'
import HeaderSearch from './components/HeaderSearch'
import HeaderSocials from './components/HeaderSocials'

export default function MainHeader() {
  return (
    <div className='container py-7 flex flex-wrap xl:flex-nowrap shrink-0 items-center justify-between md:gap-20'>
      <div className='flex items-center gap-8 xl:gap-20  xl:max-w-138.5 w-full flex-col md:flex-row  justify-between xl:justify-start'>
        <Logo />
        <HeaderSearch />
      </div>
      <div className='flex w-full gap-20 items-center justify-between'>
        <Nav />
        <HeaderSocials />
      </div>
    </div>
  )
}

