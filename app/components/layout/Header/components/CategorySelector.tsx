import { CategoryMenuIcon } from '@/app/components/ui/icons'

export default function CategorySelector() {
  return (
    <div className='flex  items-center  gap-1 text-text-on-dark max-w-36 w-full'>
      <CategoryMenuIcon className={'text-text-on-dark w-6 h-6'} color={'#ffffff'} />
      <span className='capitalize text-[20px] leading-5 font-bold'>categories</span>
    </div>
  )
}
