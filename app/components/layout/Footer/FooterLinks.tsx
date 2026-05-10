"use client"
import { footerNavLinks } from '@/app/constants/footer-nav-links'
import Link from 'next/link'

export default function FooterLinks() {
  return (
    <nav className='container  flex pt-33 pb-15 items-center justify-center'>
      <ul className='grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-5 place-items-center w-full max-w-222.25 '>
        {
          footerNavLinks.map(link => (
            <div key={link.title} className='flex flex-col gap-3.75'>
              <h2 className='font-bold text-[14px] text-foreground capitalize leading-5'>{link.title}</h2>
              {
                link.links?.map(item => (
                  <li key={item.label} className='text-text-muted font-normal text-[14px] capitalize leading-5'>
                    <Link href={item.link}>
                      {item.label}
                    </Link>
                  </li>
                ))
              }
            </div>
          ))
        }
      </ul>
    </nav>
  )
}

