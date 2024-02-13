'use client';
import { useTheme } from 'next-themes';
import LightModeIcon from './icons/LightModeIcon';
import DarkModeIcon from './icons/DarkModeIcon';

const ThemeSwitch = () => {

  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className='cursor-pointer'>
      {currentTheme === 'dark' ? (
        <div onClick={() => setTheme('light')}>
          <LightModeIcon className='fill-neutral-700 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' width='20px' height='20px' />
        </div>
      ) : (
        <div onClick={() => setTheme('dark')}>
          <DarkModeIcon className='fill-neutral-700 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500' width='20px' height='20px' />
        </div>
      )}
    </div>
  )
}

export default ThemeSwitch;