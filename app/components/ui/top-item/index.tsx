import { PropsDataProps } from '@/types/prodDataTypes'
import ProdImage from './components/ProdImage'
import ProdTitle from './components/ProdTitle'
import ProdRate from './components/ProdRate'
import ProdPrice from './components/ProdPrice'

export default function TopProdItem({ prodData }: { prodData: PropsDataProps }) {
  return (
    <div className='flex flex-col w-full group lg:max-w-75 min-w-80  lg:min-w-50 items-center bg-white rounded-lg shadow-[0_0_12px_0_rgba(0,0,0,0.1)]'>
      <ProdImage image={prodData.image} name={prodData.name} />
      <div className='flex flex-col gap-4 p-5'>
        <ProdTitle title={prodData.name} subTitle={prodData.subName} />
        <ProdRate rate={prodData.rate} count={prodData.count} />
        <ProdPrice price={prodData.price!} discount={prodData.discount} />
      </div>
    </div>
  )
}
