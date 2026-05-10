"use client"
import { categoryLinks } from '@/app/constants/hero-nav-links';
import NavItem from './components/NavItem';

export default function HeroNav() {
  return (
    <nav className=' border-b border-border-light hidden md:block'>
      <div >
        <ul className='flex  w-full items-center justify-between'>
          {categoryLinks.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
