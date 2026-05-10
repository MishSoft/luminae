import { PropsDataProps } from '@/types/prodDataTypes'
import CollectionRow from '@/app/components/ui/collection-row'
import PromoBanner from '@/app/components/features/PromoBanner'

export default function PromoBannerSection({ data }: { data: PropsDataProps[] }) {
  return (
    <CollectionRow className={`hidden lg:block`}>
      {
        data?.map(item => (
          <PromoBanner key={item.id} bgColor={item.bg_color || ""}  image={item.image} title={item.name} description={item.subName} link={item.link || ""}  />
        ))
      }
    </CollectionRow>
  )
}
