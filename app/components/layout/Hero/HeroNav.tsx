import Link from 'next/link';
import Image from "next/image"
import { categoryLinks } from '@/linksData/heroNavLinks';


export default function HeroNav() {
  return (
    <nav className='hidden md:block '>
      <ul className='flex items-center  py-4 justify-between relative'>
        {categoryLinks.map((item) => {
          return (
            <li key={item.id} className='list-none group '>

              <Link
                href={'/'}
                className='hover:text-[#FF7A00] text-nowrap duration-200 text-[#555555] text-[12px] lg:text-[14px] leading-5 font-bold'
              >
                {item.label}
              </Link>

              {item.categories && (
                <div className='hidden group-hover:flex gap-5 absolute top-10 left-0 bg-white rounded-lg px-6 py-8 z-50 '>
                  <div className='grid grid-cols-4 items-start space-x-8 space-y-8'>
                    {item.categories.map((category) => (
                      <div
                       
                      key={category.title} className={`flex flex-col gap-4 min-w-45

                        ${category.rowSpan ? `row-span-${category.rowSpan}` : ""}`}>
                        <h3 className='text-[14px] font-bold leading-5 uppercase text-black'>
                          {category.title}
                        </h3>
                        <div className='font-normal text-[14px] capitalize leading-5 text-[#555555] flex flex-col gap-2'>
                          {category.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.link}
                              className="hover:text-[#FF7A00] transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Image width={100} height={100} className='max-w-69.5 w-full h-85 rounded-[10px] hidden xl:block' alt='' src={'/assets/images/category-image/image.png'} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
