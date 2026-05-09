import Hero from '../components/features/Hero'
import PromoBannerSection from '../components/features/products/PromoBannerSection'
import SaleSection from '../components/features/products/SaleSection'
import FeatureItemSection from '../components/features/products/FeatureItemSection'
import TrendingSection from '../components/features/products/TrendingSection'
import TopProdSection from '../components/features/products/TopProdSection'
import prodData from "@/app/constants/product-data.json"

export default function page() {
  return (
    <main>
      <Hero />
      <SaleSection data={prodData[0]?.sales || []} />
      <TrendingSection />
      <TopProdSection />
      <PromoBannerSection />
      <FeatureItemSection />
      <PromoBannerSection />
    </main>
  )
}
