'use client';

import { useRouter } from 'next/navigation';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  return (
    <div 
      className={twMerge(`
        h-fit
      `)}
    >
      <div className='w-full -mt-4 md:mt-0 mb-4 flex items-center justify-between'>
        <div className='mt-6 hidden md:flex gap-x-1 items-center'>
          <button
            onClick={() => router.back()}
            className='rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 transition-colors'
          >
            <HiChevronLeft size={20} className='text-neutral-400' />
          </button>
          <button
            onClick={() => router.forward()}
            className='rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 transition-colors'
          >
            <HiChevronRight size={20} className='text-neutral-400' />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center justify-center'>
          
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;