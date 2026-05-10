"use client"
import { PropsDataProps } from '@/types/prodDataTypes'
import CollectionRow from '@/app/components/ui/collection-row'
import TrendingItem from '@/app/components/features/products/trending-item'

interface TrendingSectionProps {
  data: PropsDataProps[]
}

export default function TrendingSection({ data }: TrendingSectionProps) {
  return (
    <CollectionRow className={'sm:flex-col md:flex-row  overflow-auto'} sectionTitle="Trending must-haves" link='/'>
      {
        data?.map(prod => (
          <TrendingItem key={prod.id} prodData={prod} />
        ))
      }
    </CollectionRow>
  )
}
