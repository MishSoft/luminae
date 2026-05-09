import CollectionRow from '../../ui/collection-row'
import TopProdItem from '../../ui/top-item'

export default function TopProdSection() {
  return (
    <CollectionRow className={'sm:grid sm:grid-cols-2 overflow-auto'} sectionTitle='Top100' link='/'>
      <TopProdItem />
      <TopProdItem />
      <TopProdItem />
      <TopProdItem />
    </CollectionRow>
  )
}
