import MainHeader from "./MainHeader"
import SubHeader from "./SubHeader"
export default function Header() {

  return (
    <header className='w-full flex flex-col items-center '>
      <MainHeader />
      <SubHeader />
    </header>
  )
}
