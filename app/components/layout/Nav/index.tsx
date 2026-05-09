import { links } from "@/app/constants/navLinks"
import Link from "next/link"


export default function Nav() {
  return (
    <nav className="w-full flex-1 xl:flex-10">
      <ul className="md:flex  items-center  justify-between hidden md:gap-4 2xl:gap-0">
        {
          links.map(link => (
            <li key={link.id} className="w-full">
              <Link href={link.link} className="text-text-muted  text-left   text-[14px] leading-5 font-medium hover:text-text-main transition-colors duration-200 whitespace-nowrap">
                {
                  link.label
                }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
