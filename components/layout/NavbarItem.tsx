import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface NavbarItemProps {
  title: string;
  icon: IconType;
  active?: boolean;
  href: string;
}

export const NavbarItem = ({
  title,
  icon: Icon,
  active,
  href
}: NavbarItemProps) => {
  return (
    <Link
      href={href}
      className={twMerge(`px-2 flex flex-row h-auto items-center gap-x-4 text-md cursor-pointer py-2 text-neutral-400 transition group hover:text-white`, active && 'text-white')}
    >
      <Icon size={26} className={twMerge(``, active && 'text-primary-500')} />
      <p className='truncate w-full'>
        {title}
      </p>
    </Link>
  )
}