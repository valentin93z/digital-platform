'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavIconsAdmin from './NavIconsAdmin';

const SidebarAdminMobile = ({ setBurgerIsOpen }) => {

  const pathname = usePathname();

  return (
    <div className="font-rubik text-sm md:text-base absolute top-[69px] md:top-[80px] left-[0px] w-full min-h-[calc(100vh-69px)] md:h-[calc(100vh-80px)] z-40 unselectable">
      <div className="w-full min-h-[calc(100vh-80px)] bg-neutral-100 dark:bg-neutral-900 flex flex-col items-start">
        {NavIconsAdmin.map((icon, index) =>
          <div
            className={`w-full flex justify-start items-center pl-10 py-3 transition-colors duration-300 ${pathname === icon.link && 'bg-violet-500 dark:bg-violet-500'}`}
            key={index}
          >
            <div
              className='w-full flex justify-center items-center cursor-pointer hover_parent'
              onClick={() => setTimeout(() => (setBurgerIsOpen(false)), 300)}
            >
              <Link className='w-full flex items-center gap-3' href={icon.link}>
                <icon.element
                  className={`transition-colors ${pathname === icon.link ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${pathname !== icon.link && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                  width={20}
                  height={20}
                />
                <p className={pathname === icon.link ? 'text-white' : ''}>{icon.title}</p>
              </Link>
            </div>
          </div>
        )}
      </div>
  </div>
  )
}

export default SidebarAdminMobile;