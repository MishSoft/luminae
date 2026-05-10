"use client"
import FeatureCarousel from '@/app/components/features/products/feature-carousel'
import FeatureItem from '@/app/components/features/products/feature-item'

export default function FeatureItemSection() {
  return (
    <FeatureCarousel>
      <FeatureItem title={'MagSafe'} description="Snap on a magnetic case, wallet, or both. And get faster wireless charging." image={'/assets/images/feature-images/feature-img1.png'} />
    </FeatureCarousel>
  )
}
