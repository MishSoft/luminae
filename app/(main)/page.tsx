"use client"
import { useEffect } from 'react'
import Hero from '../components/layout/Hero/Hero'
import Sale from '../components/layout/Sale/Sale'
import CollectionRow from '../components/ui/collection-row/CollectionRow'
import SaleItem from '../components/ui/sale-item/SaleItem'
import TrendingItem from '../components/ui/trending-item/TrendingItem'
import TopProdItem from '../components/ui/top-item/TopProdItem'
import PromoBanner from '../components/ui/promo-banner/PromoBanner'
import FeatureCarousel from '../components/ui/feature-carousel/FeatureCarousel'
import FeatureItem from '../components/ui/feature-item/FeatureItem'




export default function page() {

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();


  //     for(let i = 0; i < data.length; i++) {
  //       console.log(data[i].image);
  //     }

  //   } catch (err) {
  //     console.error("Fetch Error:", err);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <main>
      <Hero/>
      {/* <Sale /> */}
      <CollectionRow className={'sm:grid sm:grid-cols-2 overflow-auto'} sectionTitle='Flash Sales' link='/'>
        <SaleItem/>
        <SaleItem />
        <SaleItem />
        <SaleItem />
      </CollectionRow>

      <CollectionRow className={'sm:flex-col md:flex-row  overflow-auto'} sectionTitle='Trending must-haves' link='/'>
        <TrendingItem/>
        <TrendingItem />
        <TrendingItem />
      </CollectionRow>

      <CollectionRow className={'sm:grid sm:grid-cols-2 overflow-auto'} sectionTitle='Top100' link='/'>
        <TopProdItem/>
        <TopProdItem />
        <TopProdItem />
        <TopProdItem />
      </CollectionRow>

      <CollectionRow className={''}>
        <PromoBanner className={'bg-[#BF2E3B]'} image={'/assets/images/promo-image/promo1.png'} title={'Never-Ending Summer'} description={'Throwback Shirts & all-day dressed'} link={'/'} />
        <PromoBanner className={'bg-[#1D5159]'} image={'/assets/images/promo-image/promo1.png'} title={'Never-Ending Summer'} description={'Throwback Shirts & all-day dressed'} link={'/'} />
      </CollectionRow>

      <FeatureCarousel>
        <FeatureItem title={'MagSafe'} description={'Snap on a magnetic case, wallet, or both. And get faster wireless charging.'} image={'/assets/images/feature-images/feature-img1.png'}/>
      </FeatureCarousel>

      <CollectionRow className={''}>
        <PromoBanner className={'bg-[#D11FB5]'} image={'/assets/images/promo-image/promo1.png'} title={'The Pinky Barbie Edition'} description={'Lets play dress up'} link={'/'} />
        <PromoBanner className={'bg-[#0186C4]'} image={'/assets/images/promo-image/promo1.png'} title={'Best Sellers Everyone Love'} description={'poolside glam include'} link={'/'} />
      </CollectionRow>
    </main>
  )
}
