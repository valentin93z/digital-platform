'use client';
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {

  const { status, data } = useSession();
  const isAuth = status === 'authenticated';

  const [dropMenuIsOpen, setDropMenuIsOpen] = useState(false);

  return (
    <div className="font-rubik w-full flex justify-between items-center px-20 py-10">
      <Image
        src='/assets/images/logo.png'
        alt='logo'
        width={190}
        height={29}
      />
      <div className="flex items-center gap-3">
        <div className='relative w-10 h-10 rounded-full bg-violet-500 flex justify-center items-center'>
          <Image
            src='/assets/icons/person_white.svg'
            alt='profile-photo'
            width={28}
            height={28}
          />
        </div>
        <div className="relative flex items-center cursor-pointer" onClick={() => setDropMenuIsOpen(!dropMenuIsOpen)}>
          <p className="text-neutral-700 dark:text-white">{data?.user?.firstname} {data?.user?.lastname}</p>
          <div>
            {dropMenuIsOpen ? (
              <svg className="fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                <path d="M353-400q-20 0-27.5-18.5T332-451l128-129q5-5 10-6.5t11-1.5q6 0 11 1.5t10 6.5l128 129q14 14 6.5 32.5T609-400H353Z"/>
              </svg>
            ) : (
              <svg className="fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
                <path d="M459-381 332-508q-14-14-6.5-32.5T353-559h254q20 0 27.5 18.5T628-508L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
              </svg>
            )}
          </div>
          {dropMenuIsOpen &&
            <div className="absolute top-12 right-0 flex flex-col gap-2 text-right bg-white dark:bg-neutral-800 shadow-md rounded-md p-2">
              <div className='flex justify-end items-center'>
                <ThemeSwitch />
              </div>
              <div className='text-neutral-700 dark:text-white hover:text-violet-500 dark:hover:text-violet-500'>Профиль</div>
              <div className='text-neutral-700 dark:text-white hover:text-violet-500 dark:hover:text-violet-500'>Настройки</div>
              <div
                className='text-neutral-700 dark:text-white hover:text-violet-500 dark:hover:text-violet-500'
                onClick={() => signOut()}
              >
                Выйти
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header;