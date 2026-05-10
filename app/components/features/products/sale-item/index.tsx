import Time from './components/Time'
import ProdImage from './components/ProdImage'
import ProdInfo from './components/ProdInfo'
import { PropsDataProps } from '@/types/prodDataTypes'

export default function SaleItem({ prodData }: {
  prodData: PropsDataProps
}) {
  return (
    <div className='flex flex-col w-full group lg:max-w-75 min-w-80 sm:min-w-40 lg:min-w-50 items-center bg-white rounded-lg shadow-[0_0_12px_0_rgba(0,0,0,0.1)] py-5'>
      <Time endDate={prodData.saleEndsAt} />
      <ProdImage image={prodData.image}/>
      <ProdInfo title={prodData.name} subTitle={prodData.subName} rate={prodData.rate} price={prodData.price || 0} amount={prodData.discount} count={prodData.count} />
    </div>
  )
}
