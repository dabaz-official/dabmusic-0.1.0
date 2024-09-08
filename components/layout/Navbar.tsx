'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { HiHome, HiSearch } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi2';

import Logo from '@dabaz/public/images/logo.svg'

import { MobileNavbarItem, NavbarItem } from '@dabaz/components/layout/NavbarItem';

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
      <div className='hidden md:flex flex-col w-[240px] h-screen bg-neutral-50 dark:bg-[#171717] border-r border-neutral-200 dark:border-neutral-800 gap-y-2 px-6 py-2'>
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
        <div className='overflow-y-auto h-full'>
          {/* <Library /> */}
        </div>
      </div>
      <div className='md:hidden z-20'>
        <div className='flex w-full h-[60px] bg-white dark:bg-[#171717] shadow-sm px-6 justify-between items-center fixed top-0 border-b border-neutral-100 dark:border-neutral-800'>
          <div
            className='flex items-center gap-x-1 justify-center text-center'
          >
            <Image
              src={Logo}
              alt='DabMusic Logo.'
              width={32}
              height={32}
              className='w-5 h-5'
            />
            <p className='text-xl font-semibold tracking-tight'>
              DabMusic
            </p>
          </div>
          {/*<HiUserCircle className='h-6 w-6' />*/}
        </div>
        <div className='flex w-full h-[80px] bg-white dark:bg-[#171717] px-6 justify-center items-center fixed bottom-0 left-0 border-t border-neutral-100 dark:border-neutral-800'>
          <div className='flex gap-x-16'>
            {routes.map((item) => (
              <MobileNavbarItem
                key={item.title}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
      <main className='fixed left-0 top-[60px] md:left-[240px] md:top-0 flex-1 p-6 h-full overflow-y-auto'>
        {children}
      </main>
    </div>
  )
}
