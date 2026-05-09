import React from 'react'


interface ProdTitleProps {
  title: string
  subTitle: string
}

export default function ProdTitle({ title, subTitle }: ProdTitleProps) {
  return (
    <>
      <h3 className='font-extrabold text-left text-[16px] leading-5 text-[#262626] '>{title}</h3>
      <p className='text-[#555555] font-normal text-[12px] leading-5'>{subTitle}</p>
    </>
  )
}
