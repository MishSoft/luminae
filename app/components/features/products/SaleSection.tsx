import { PropsDataProps } from '@/types/prodDataTypes'
import CollectionRow from '../../ui/collection-row'
import SaleItem from './sale-item'

interface SaleSectionProps {
  data: PropsDataProps[]
}


export default function SaleSection({ data }: SaleSectionProps) {
  return (
    <CollectionRow className={'sm:grid sm:grid-cols-2 overflow-auto'} sectionTitle='Flash Sales' link='/'>
      {
        data?.map(prod => (
          <SaleItem key={prod.id} prodData={prod} />
        ))
      }
    </CollectionRow>
  )
}
