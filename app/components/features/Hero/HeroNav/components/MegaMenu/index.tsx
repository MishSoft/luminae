import Link from 'next/link';
import Image from "next/image"
import { CategoriesLinksType, CategoryType } from '@/app/components/features/Hero/type';

interface MegaMenuProps {
  categories: CategoryType[];
}

export default function MegaMenu({ categories }: MegaMenuProps) {
  return (
    <div className='hidden w-266.75 group-hover:flex gap-10 absolute top-10 left-0 bg-white rounded-lg px-12 py-10 z-50 border border-gray-100'>
      <div className="grid w-full grid-cols-4 gap-15 items-start">
        {[1, 2, 3, 4].map((col) => (
          <div key={col} className="flex flex-col gap-10">
            {categories
              ?.filter((cat: CategoryType) => cat.colStart === col)
              .map((category: CategoryType) => (
                <div key={category.title} className="flex flex-col gap-4 min-w-45">
                  <h3 className='text-[14px] font-bold leading-5 uppercase text-black tracking-wider'>
                    {category.title}
                  </h3>
                  <div className='font-normal text-[14px] capitalize leading-5 text-text-muted flex flex-col gap-2.5'>
                    {category.links.map((link: CategoriesLinksType) => (
                      <Link
                        key={link.label}
                        href={link.link}
                        className="hover:text-accent-orange transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="relative w-69.5 h-85 shrink-0 hidden xl:block">
        <Image fill className='rounded-[10px] object-center' alt='' src={'/assets/images/category-image/image.png'} />
      </div>
    </div>
  );
}
