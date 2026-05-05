import Link from "next/link"


const links = [
  {
    label: "About us",
    value: "about"
  },

  {
    label: "Blog",
    value: "blog"
  },

  {
    label: "Contact us",
    value: "contact"
  },

  {
    label: "Help & support",
    value: "help-support"
  }
]


export default function Nav() {
  return (
    <nav className=" w-full">
      <ul className="md:flex  items-center xl:justify-end hidden ">
        {
          links.map(link => (
            <li key={link.value} className="max-w-24 w-full">
              <Link href={'/'} className="text-text-muted  text-left   text-[14px] leading-5 font-medium hover:text-text-main transition-colors duration-200 whitespace-nowrap">
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
