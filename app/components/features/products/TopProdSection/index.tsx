"use client"
import { PropsDataProps } from '@/types/prodDataTypes'
import CollectionRow from '@/app/components/ui/collection-row'
import TopProdItem from '@/app/components/ui/top-item'

interface TopProdSectionProps {
  data: PropsDataProps[]
}

export default function TopProdSection({ data }: TopProdSectionProps) {
  return (
    <CollectionRow className={'md:grid  md:grid-cols-2 overflow-auto'} sectionTitle="Top100" link='/'>
      {
        data?.map(prod => (
          <TopProdItem key={prod.id} prodData={prod} />
        ))
      }
    </CollectionRow>
  )
}
