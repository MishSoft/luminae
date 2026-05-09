import FeatureCarousel from './feature-carousel'
import FeatureItem from './feature-item'

export default function FeatureItemSection() {
  return (
    <FeatureCarousel>
      <FeatureItem title={'MagSafe'} description={'Snap on a magnetic case, wallet, or both. And get faster wireless charging.'} image={'/assets/images/feature-images/feature-img1.png'} />
    </FeatureCarousel>
  )
}
