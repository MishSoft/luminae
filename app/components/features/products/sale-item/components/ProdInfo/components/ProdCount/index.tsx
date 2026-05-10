import PriceDisplay from '@/app/components/ui/price-display'

export default function ProdCount({ price, discount }: { price: number, discount?: number }) {
  const originalPrice = discount ? price + discount : price;
  const discountPercentage = discount ? Math.round((discount / originalPrice) * 100) : 0;

  return (
    <div className='flex items-center gap-3.5 mt-2'>
      <PriceDisplay usdPrice={price} className="text-sale-red font-bold text-[20px] leading-7" />
      {discount && (
        <>
          <span className='text-icon-muted text-[14px] leading-7 line-through'>
            <PriceDisplay usdPrice={originalPrice} />
          </span>
          <div className='bg-sale-red text-white text-[12px] font-bold px-2 py-0.5 rounded flex items-center justify-center'>
            - {discountPercentage}%
          </div>
        </>
      )}
    </div>
  )
}
