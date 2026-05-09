import CollectionRow from '../../ui/collection-row'
import PromoBanner from '../promo-banner'

interface DataProps {
  color: string
  image: string
  text: string
  description: string
  link: string
}

interface PromoBannerSectionProps {
  data?: DataProps[]
  containerClassName?: string
}

export default function PromoBannerSection({ data, containerClassName }: PromoBannerSectionProps) {
  return (
    <CollectionRow className={`hidden lg:block ${containerClassName}`}>
      {
        data?.map(item => (
          <PromoBanner className={item.color} image={item.image} title={item.text} description={item.description} link={item.link} />

        ))
      }
    </CollectionRow>
  )
}
