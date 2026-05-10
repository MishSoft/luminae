"use client"
import React from 'react'
import SideBanner from './components/SideBanner'
import MainBanner from './components/MainBanner'

export default function HeroBanner() {
  return (
    <div className='md:flex w-full hidden h-115 relative'>
      <SideBanner />
      <MainBanner />
    </div>
  )
}
