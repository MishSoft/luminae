"use client"
import { useEffect } from 'react'
import Hero from '../components/layout/Hero/Hero'
import Sale from '../components/layout/Sale/Sale'
import CollectionRow from '../components/ui/collection-row/CollectionRow'
import SaleItem from '../components/ui/sale-item/SaleItem'
import TrendingItem from '../components/ui/trending-item/TrendingItem'
import TopProdItem from '../components/ui/top-item/TopProdItem'




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
      <CollectionRow className={''} sectionTitle='Flash Sales' link='/'>
        <SaleItem/>
        <SaleItem />
        <SaleItem />
        <SaleItem />
      </CollectionRow>

      <CollectionRow className={''} sectionTitle='Trending must-haves' link='/'>
        <TrendingItem/>
        <TrendingItem />
        <TrendingItem />
      </CollectionRow>

      <CollectionRow className={''} sectionTitle='Top100' link='/'>
        <TopProdItem/>
        <TopProdItem />
        <TopProdItem />
        <TopProdItem />
      </CollectionRow>
    </main>
  )
}
