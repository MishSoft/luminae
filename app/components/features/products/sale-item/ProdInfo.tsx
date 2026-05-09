import React from 'react'
import Rate from './Rate'
import ProdTitle from './ProdTitle'
import ProdCount from './ProdCount'

interface ProdInfoProps {
  title: string
  subTitle: string
  rate?: number
  price: number
  amount?: number
  count?: number
}

export default function ProdInfo({ title, subTitle, rate, price, amount, count }: ProdInfoProps) {
  return (
    <div className='flex justify-center  py-4.25 px-7.5 items-center'>
      <div className='flex flex-col gap-1'>
        <ProdTitle title={title} subTitle={subTitle}/>
        <Rate rate={rate} count={count} />
        <ProdCount price={price} amount={amount}/>
      </div>
    </div>
  )
}
