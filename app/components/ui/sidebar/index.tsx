"use client"
import { categoryLinks } from '@/app/constants/hero-nav-links'
import { links } from '@/app/constants/navLinks'
import { ChevronRight, X } from 'lucide-react'
import Link from 'next/link'
import  {  useState, MouseEvent } from 'react'
import { useSidebarStore } from '../../features/navigation/store/useNavBarStore'

export default function MobileSideBar() {
  const [targetId, setTargetId] = useState<number | null>(null)
  const {isOpen, closeSidebar} = useSidebarStore()

  const handleOpen = (id: number) => {
    setTargetId(prevId => prevId === id ? null : id)
  }

  return (
    <aside className={`fixed ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-1000 opacity-0"} top-0 duration-500  ease-in-out z-50 bg-white h-full w-full md:hidden transition-all`}>
      {/* Header */}
      <div className="container relative flex items-center justify-center py-5">
        <button onClick={closeSidebar} className="absolute left-5 cursor-pointer p-1">
          <X size={24} />
        </button>
        <span className="text-[20px] font-bold capitalize">Menu</span>
      </div>

      {/* Categories List */}
      <div className="bg-bg-sidebar h-[calc(100%-65px)] overflow-y-auto">
        <div className="container flex flex-col py-4">
          {categoryLinks.map((link) => (
            <details onClick={(event: MouseEvent) => {
              event.preventDefault()
              handleOpen(link.id)
            }} key={link.id} className="group" open={targetId === link.id} >
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none hover:text-orange-400 duration-200">
                <span className="font-medium text-[16px]">{link.label}</span>
              </summary>

              {link.categories && (
                <div className="bg-white p-4 grid sm:grid-cols-2 gap-6">
                  {link.categories.map((category) => (
                    <div
                      key={category.title}
                    >
                      <h3 className="font-bold uppercase text-[13px] text-black mb-2 tracking-wider">
                        {category.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {category.links.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.link}
                            className="text-text-muted hover:text-accent-orange text-[14px] py-1"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </details>
          ))}
          {/* user links */}
        </div>
        <div className='bg-white'>
          <div className='container flex flex-col gap-5 py-8'>
            {
              links.map(link => (
                <Link href={link.link} key={link.id} className='flex items-center justify-between hover:text-black'>
                  {link.label}
                  <ChevronRight className='text-icon-dark' size={15} />
                </Link>
              ))
            }
          </div>
          </div>
      </div>

    </aside>
  );
}
