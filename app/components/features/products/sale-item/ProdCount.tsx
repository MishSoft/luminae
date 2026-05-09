

interface ProdCountProps {
  price: number
  amount?: number
}

export default function ProdCount({ price, amount = 0 }: ProdCountProps) {
  return (
    <div className='flex items-center gap-3'>
      <h4 className='text-[#FF2E00] font-bold gap-1 flex items-center text-[14px] leading-5'>
        ${price - (price * amount / 100)}
        <span className='text-[#555555] font-normal leading-5 text-[12px]'>${price}</span>
      </h4>
      <div className='w-8.25 h-4 text-[8px] flex items-center justify-center text-white  bg-[#FF2E00] rounded-[2.6px]'>
        - 40%
      </div>
    </div>
  )
}
