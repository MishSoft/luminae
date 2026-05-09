import Time from './Time'
import ProdImage from './ProdImage'
import ProdInfo from './ProdInfo'
import { PropsDataProps } from '@/types/prodDataTypes'

export default function SaleItem({ prodData }: {
  prodData: PropsDataProps
}) {
  return (
    <div className='flex flex-col w-full group lg:max-w-75 min-w-80 sm:min-w-40 lg:min-w-50 items-center rounded-lg shadow-[0_0_12px_0_rgba(0,0,0,0.1)]'>
      {/* Time */}
      <Time endDate={prodData.saleEndsAt}/>
      {/* Image */}
      <ProdImage image={prodData.image}/>
      {/* Prod info */}
      <ProdInfo title={prodData.name} subTitle={prodData.subName} rate={prodData.rate} price={prodData.price} amount={prodData.discount} count={prodData.count}/>
    </div>
  )
}
