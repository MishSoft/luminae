import Link from 'next/link';

const categoryLinks = [
  { id: 1,
    label: "Woman",
    slug: "womens-dresses",
    categories: [
      {
        title: "shoes & bag",
        links: [
          {
            label: "casual shoes",
            link: "/casualshoes"
          },
          {
            label: "boots",
            link: "/boots"
          },
          {
            label: "sandals",
            link: "/sandals"
          },
          {
            label: "slippers",
            link: "/slippers"
          }
        ]
      },

      {
        title: "home & textile",
        links: [
          {
            label: "bedding",
            link: "/bedding"
          },
          {
            label: "pillows",
            link: "/pillows"
          },
          {
            label: "handkerchief towels",
            link: "/towels"
          },
          {
            label: "curtain",
            link: "/curtain"
          }
        ]
      }
    ]
  },
  { id: 2, label: "Male", slug: "mens-shirts" },
  { id: 3, label: "Mother-Child", slug: "baby-accessories" },
  { id: 4, label: "Home & Furniture", slug: "furniture" },
  { id: 5, label: "Super market", slug: "groceries" },
  { id: 6, label: "Cosmetics", slug: "beauty" },
  { id: 7, label: "Shoe & Bag", slug: "womens-shoes" },
  { id: 8, label: "Electronic", slug: "laptops" },
  { id: 9, label: "Sport & Outdoor", slug: "sports-accessories" },
  { id: 10, label: "Best seller", slug: "tops" },
];

export default function HeroNav() {
  return (
    <nav className='hidden md:block' >
      <ul className='flex items-center  justify-between'>
        {
          categoryLinks.map(item => (
            <li key={item.id} className='list-none'>
              <Link href={'/'} className='hover:text-[#FF7A00] text-nowrap duration-200 text-[#555555] text-[12px] lg:text-[14px] leading-5 font-bold text-right'>
                {item.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
