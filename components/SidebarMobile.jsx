'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavIcons from './NavIcons';

const SidebarMobile = ({ setBurgerIsOpen }) => {

  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState('main');

  console.log(pathname);

  return (
    <div className="absolute top-[69px] md:top-[80px] left-[0px] w-full h-[calc(100vh-69px)] md:h-[calc(100vh-80px)] z-40 unselectable">
      <div className="w-full h-[calc(100vh-80px)] bg-neutral-100 dark:bg-neutral-900 flex flex-col items-start">
        {NavIcons.map((icon, index) =>
          <div
            className={`w-full flex justify-start items-center pl-10 py-3 transition-colors duration-300 ${pathname === icon.link && 'bg-violet-500 dark:bg-violet-500'}`}
            key={index}
          >
            <div
              className='w-full flex justify-center items-center cursor-pointer hover_parent'
              onClick={() => setTimeout(() => (setBurgerIsOpen(false)), 300)}
            >
              <Link className='w-full flex items-center gap-3' href={icon.link}>
                <icon.element width={20} height={20} currentPage={pathname} page={icon.link} />
                <p>{icon.title}</p>
              </Link>
            </div>
          </div>
        )}
      </div>
  </div>
  )
}

export default SidebarMobile;