'use client';
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import SidebarMobile from "./SidebarMobile";

const Header = () => {

  const { status, data } = useSession();
  const [dropMenuIsOpen, setDropMenuIsOpen] = useState(false);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <div className="font-rubik fixed top-0 left-0 md:left-[64px] w-full md:w-[calc(100%-64px)] flex justify-between items-center bg-neutral-100 dark:bg-neutral-900 px-5 sm:px-10 md:px-20 md:py-10 py-5 z-40">

      {burgerIsOpen && <SidebarMobile setBurgerIsOpen={setBurgerIsOpen} />}

      <div className="flex items-center gap-5">
        <div className="md:hidden cursor-pointer unselectable" onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
          {burgerIsOpen ? (
            <svg
              className='w-[20px] md:w-[40px] h-[20px] md:h-[40px] fill-neutral-700 dark:fill-white'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z"/>
            </svg>
          ) : (
            <svg
              className='w-[20px] md:w-[40px] h-[20px] md:h-[40px] fill-neutral-700 dark:fill-white'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M105-215v-91h750v91H105Zm0-219v-91h750v91H105Zm0-220v-92h750v92H105Z"/>
            </svg>
          )}
        </div>
        <div className="relative w-[120px] md:w-[190px] h-[29px]">
          <Image
            className="object-contain"
            src='/assets/images/logo.png'
            alt='logo'
            sizes="190px"
            fill
          />
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-3 select-none unselectable" onClick={() => setDropMenuIsOpen(!dropMenuIsOpen)}>
        <div className='relative w-5 md:w-10 h-5 md:h-10 rounded-full bg-violet-500 flex justify-center items-center'>
          <div className="relative w-[14px] md:w-[28px] h-[14px] md:h-[28px]">
            <Image
              className="object-contain"
              src='/assets/icons/person_white.svg'
              alt='profile-photo'
              sizes="28px"
              fill
            />
          </div>
        </div>
        <div className="relative flex items-center cursor-pointer">
          <p className="text-neutral-700 dark:text-white hidden sm:block">{data?.user?.firstname} {data?.user?.lastname}</p>
          <div>
            {dropMenuIsOpen ? (
              <svg className="w-[14px] md:w-[28px] h-[14px] md:h-[28px] fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M353-400q-20 0-27.5-18.5T332-451l128-129q5-5 10-6.5t11-1.5q6 0 11 1.5t10 6.5l128 129q14 14 6.5 32.5T609-400H353Z"/>
              </svg>
            ) : (
              <svg className="w-[14px] md:w-[28px] h-[14px] md:h-[28px] fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M459-381 332-508q-14-14-6.5-32.5T353-559h254q20 0 27.5 18.5T628-508L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
              </svg>
            )}
          </div>
          {dropMenuIsOpen &&
            <div className="absolute top-6 md:top-12 right-0 flex flex-col gap-2 text-right bg-white dark:bg-neutral-800 shadow-md rounded-md p-2 z-50">
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