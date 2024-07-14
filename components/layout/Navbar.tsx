'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { HiHome, HiSearch } from 'react-icons/hi';

import Logo from '@dabaz/public/images/logo.svg'

import { NavbarItem } from '@dabaz/components/layout/NavbarItem';

interface NavbarProps {
  children: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      title: 'Home',
      icon: HiHome,
      active: pathname === '/',
      href: '/',
    },
    {
      title: 'Search',
      icon: HiSearch,
      active: pathname === '/search',
      href: '/search',
    }
  ], [
    pathname
  ])

  return (
    <div className='flex'>
      <div className='hidden md:flex flex-col w-[240px] h-screen bg-neutral-50 dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 gap-y-2 px-6 py-2'>
        <Link
          href="/"
          className='flex items-center gap-x-2 px-2 py-4'
        >
          <Image
            src={Logo}
            alt='DabMusic Logo.'
            width={32}
            height={32}
            className='w-6 h-6'
          />
          <p className='text-2xl font-semibold tracking-tight'>
            DabMusic
          </p>
        </Link>
        <div className='flex flex-col py-2'>
          {routes.map((item) => (
            <NavbarItem
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
      <div className='flex md:hidden w-full h-[60px] bg-white dark:bg-neutral-800 shadow-sm px-6 justify-between items-center'>
        <p className='text-sm'>
          Login
        </p>
        <Link
          href="/"
          className='flex items-center gap-x-1'
        >
          <Image
            src={Logo}
            alt='DabMusic Logo.'
            width={32}
            height={32}
            className='w-4 h-4'
          />
          <p className='text-lg font-semibold tracking-tight'>
            DabMusic
          </p>
        </Link>
        <p className='text-sm'>
          Login
        </p>
      </div>
      <main className='fixed left-0 top-[60px] md:left-[240px] md:top-0 flex-1 p-6 h-full overflow-y-auto'>
        {children}
      </main>
    </div>
  )
}
