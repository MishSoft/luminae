import { Send } from 'lucide-react'
import Button from '../../ui/button/Button'
import InputContainer from '../../ui/input/InputContainer'

export default function NewsletterBox() {
  return (
    <div className='absolute hidden  max-w-142.75 bg-[#7296AB]  gap-6 md:flex flex-col items-center rounded-lg py-8 px-14 w-full -top-16 left-[50%] translate-x-[-50%]'>
      <div className='flex flex-col gap-5 items-center'>
        <span className='flex  text-[#FFFFFF] capitalize items-center gap-1 font-bold text-[32px] leading-5'>
          luminae
          <span className='text-[#D1E2EB]'>store</span>
        </span>
        <p className='text-[#FFFFFF]  text-[16px] leading-5 font-normal'>Register your email not to miss the last minutes off+ Free delivery</p>
      </div>
      <InputContainer placeholder='Enter your email' className='w-full bg-none border-none outline-none py-2' containerClassName='flex bg-[#FFFFFF] rounded items-center max-w-[268px] px-3 w-full'>
        <Button type="button" className='cursor-pointer' icon={<Send className='size-5' />} />
      </InputContainer>
    </div>
  )
}
