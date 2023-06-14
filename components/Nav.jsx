'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const Nav = () => {

  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [dropMenuIsOpen, setDropMenuIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='w-full px-5 sm:px-10 md:px-5 lg:px-20 py-8 box-border flex justify-between items-center'>
      <div className='flex gap-5 md:gap-10 lg:gap-20'>

        {/* Mobile screen */}
        <div className='block md:hidden cursor-pointer' onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
          {mounted && (
            burgerIsOpen ? (
              <Image
                src={currentTheme === 'dark' ? '/assets/icons/close_white.svg' : '/assets/icons/close_black.svg'}
                alt="close-burger"
                width={25}
                height={25}
              />
            ) : (
              <Image
                src={currentTheme === 'dark' ? '/assets/icons/menu_white.svg' : '/assets/icons/menu_black.svg'}
                alt="open-burger"
                width={25}
                height={25}
              />
          ))}
        </div>

        <Image
          className=''
          src='/assets/images/logo.png'
          alt='logo'
          width={190}
          height={29}
        />
        <nav className='font-roboto dark:text-white md:flex shrink-0 gap-10 hidden'>
          <Link className='hover:border-b-2 hover:border-violet-700 hover:border-solid' href='/main'>Главная</Link>
          <Link className='hover:border-b-2 hover:border-violet-700 hover:border-solid' href='/main/catalog'>Каталог обучения</Link>
          <Link className='hover:border-b-2 hover:border-violet-700 hover:border-solid' href='/main/services'>Сервисы</Link>
          <Link className='hover:border-b-2 hover:border-violet-700 hover:border-solid' href='/main/company'>О компании</Link>
        </nav>
      </div>
      <div className='flex items-center shrink-0 gap-5'>
        <div className='relative w-10 h-10 rounded-full bg-violet-500 hover:bg-violet-700 flex justify-center items-center cursor-pointer' onClick={() => setDropMenuIsOpen(!dropMenuIsOpen)}>
          <Image
            src='/assets/icons/person_white.svg'
            alt='profile-photo'
            width={28}
            height={28}
          />
          {dropMenuIsOpen &&
            <div className='absolute top-12 right-0 flex flex-col gap-2 text-right dark:bg-neutral-800 rounded-md p-2'>
              <div className='flex justify-end items-center'>
                <ThemeSwitch />
              </div>
              <div className='hover:text-violet-400'>Профиль</div>
              <div className='hover:text-violet-400'>Настройки</div>
              <div className='hover:text-violet-400'>Выйти</div>
            </div>
          }
        </div>
      </div>



      {/* Mobile burger menu */}
      {/* <div>
        
      </div> */}
    </div>
  )
}

export default Nav;