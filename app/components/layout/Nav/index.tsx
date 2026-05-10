import { links } from "@/app/constants/navLinks"
import Link from "next/link"


export default function Nav() {
  return (
    <nav className="max-w-105 w-full">
      <ul className="md:flex  items-center  justify-between hidden md:gap-3">
        {
          links.map(link => (
            <li key={link.id}>
              <Link href={link.link} className="text-text-muted text-left   text-[14px] leading-5 font-medium hover:text-text-main transition-colors duration-200 whitespace-nowrap">
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
