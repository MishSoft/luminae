import CollectionRow from '../../ui/collection-row'
import TrendingItem from './trending-item'

export default function TrendingSection() {
  return (
    <CollectionRow className={'sm:flex-col md:flex-row  overflow-auto'} sectionTitle='Trending must-haves' link='/'>
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
    </CollectionRow>
  )
}
