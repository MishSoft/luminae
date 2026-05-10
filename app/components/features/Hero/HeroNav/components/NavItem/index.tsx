import Link from 'next/link';
import { CategoryProps } from '@/app/components/features/Hero/type';
import MegaMenu from '../MegaMenu';

interface NavItemProps {
  item: CategoryProps;
}

export default function NavItem({ item }: NavItemProps) {
  return (
    <li className='relative group py-2.5'>
      <Link
        href={'/'}
        className='hover:text-accent-orange text-nowrap duration-200 text-text-muted text-[12px] lg:text-[14px] leading-5 font-bold'
      >
        {item.label}
      </Link>

      {item.categories && <MegaMenu categories={item.categories} />}
    </li>
  );
}
