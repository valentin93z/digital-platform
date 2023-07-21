'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavIconsAdmin from './NavIconsAdmin';

const SidebarAdmin = () => {

  const pathname = usePathname();

  return (
    <div className='hidden min-h-screen md:flex flex-col justify-between items-center fixed top-0 left-0 bg-white dark:bg-neutral-800 shadow-md py-5'>
      
      <div className='flex flex-col items-center gap-16'>
        <div>
            <div className='w-full flex justify-center items-center p-3'>
            <div className='w-full flex justify-center items-center'>
                <svg
                className='fill-neutral-700 dark:fill-white'
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
                >
                <path d="M105-215v-91h750v91H105Zm0-219v-91h750v91H105Zm0-220v-92h750v92H105Z"/>
                </svg>
            </div>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            {NavIconsAdmin.map((icon, index) =>
            <div
                className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${pathname === icon.link && 'bg-violet-500 dark:bg-violet-500'}`}
                key={index}
            >
                <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
                <Link href={icon.link}>
                    <icon.element
                      className={`transition-colors ${pathname === icon.link ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${pathname !== icon.link && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                      width={40}
                      height={40}
                      />
                </Link>
                </div>
                <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>{icon.title}</div>
            </div>
            )}
        </div>
      </div>

      <div>
        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${pathname === '/dashboard/svk' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/dashboard/svk'>
              <svg
                className={`transition-colors ${pathname === '/dashboard/svk' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${pathname !== '/dashboard/svk' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M868-230 768-330q-10-9.957-10-22.979Q758-366 767.967-376q9.966-10 23-10Q804-386 814-376l126 125q9 9 9 21t-9 21L814-83q-9.957 10-22.979 10Q778-73 768-83.183q-10-10.184-10-23.5Q758-120 768-130l100-100ZM360-120q-12.75 0-21.375-8.625T330-150v-50H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v267q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T820-513v-267H140v520h516q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T656-200h-26v50q0 12.75-8.625 21.375T600-120H360Zm89-379v100q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T509-399v-100h100q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T609-559H509v-100q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T449-659v100H349q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T349-499h100ZM140-260v-520 520Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Видеоконтроль</div>
        </div>
      </div>
    </div>
  )
}

export default SidebarAdmin;