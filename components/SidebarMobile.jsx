'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavIcons from './NavIcons';

const SidebarMobile = ({ setBurgerIsOpen }) => {

  const [currentPage, setCurrentPage] = useState('main');

  return (
    <div className="absolute top-[69px] md:top-[80px] left-[0px] w-full h-[calc(100vh-69px)] md:h-[calc(100vh-80px)] z-50">
      <div className="min-w-[300px] h-[calc(100vh-80px)] bg-neutral-100 dark:bg-neutral-900 flex flex-col items-start">
        {NavIcons.map((icon) =>
          <div className={`w-full flex justify-start items-center pl-10 py-3 transition-colors duration-300 ${currentPage === icon.page && 'bg-violet-500 dark:bg-violet-500'}`}>
            <div
              className='w-full flex justify-center items-center cursor-pointer hover_parent'
              onClick={() => setBurgerIsOpen(false)}
            >
              <Link className='w-full flex items-center gap-3' href={icon.link} onClick={() => setCurrentPage(icon.page)}>
                <icon.element width={20} height={20} page={currentPage} />
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