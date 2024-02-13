'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavIcons from './NavIcons';
import { existPathname } from '@utils/existPathname';

const SidebarMobile = ({ setBurgerIsOpen }) => {

  const pathname = usePathname();

  return (
    <div className="font-rubik text-sm md:text-base absolute top-[80px] left-[0px] w-full black_opacity min-h-[calc(100vh-69px)] md:h-[calc(100vh-80px)] z-40 unselectable">
      <div className="w-[300px] min-h-[calc(100vh-60px)] bg-neutral-100 dark:bg-neutral-900 flex flex-col items-start">
        {NavIcons.map((icon, index) =>
          <div
            className={`w-full flex justify-start items-center pl-10 py-3 transition-colors duration-300 ${existPathname(pathname) === icon.link && 'bg-violet-500 dark:bg-violet-500'}`}
            key={index}
          >
            <div
              className='w-full flex justify-center items-center cursor-pointer hover_parent'
              onClick={() => setTimeout(() => (setBurgerIsOpen(false)), 300)}
            >
              <Link className='w-full flex items-center gap-3' href={icon.link}>
                <icon.element
                  className={`transition-colors ${existPathname(pathname) === icon.link ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${existPathname(pathname) !== icon.link && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                  width={28}
                  height={28}
                />
                <p className={existPathname(pathname) === icon.link ? 'text-white text-lg' : 'text-lg text-neutral-700 dark:text-white'}>{icon.title}</p>
              </Link>
            </div>
          </div>
        )}
      </div>
  </div>
  )
}

export default SidebarMobile;