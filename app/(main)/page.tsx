"use client"
import { useEffect } from 'react'
import Hero from '../components/layout/Hero/Hero'




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
    </main>
  )
}
