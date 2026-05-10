import PriceDisplay from '@/app/components/ui/price-display'

export default function ProdPrice({ price, discount }: { price: number, discount?: number }) {
  const originalPrice = discount ? price + discount : price;
  const discountPercentage = discount ? Math.round((discount / originalPrice) * 100) : 0;

  return (
    <div className='flex items-center gap-3.5'>
      <PriceDisplay usdPrice={price} className="text-sale-red font-bold text-[20px] leading-7" />
      {discount && (
        <>
          <span className='text-icon-muted text-[16px] line-through'>
            <PriceDisplay usdPrice={originalPrice} />
          </span>
          <span className='text-sale-red text-[14px] font-bold'>
            - {discountPercentage}%
          </span>
        </>
      )}
    </div>
  )
}
