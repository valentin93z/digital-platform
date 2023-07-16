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
          <LightModeIcon className='fill-black dark:fill-white' width='20px' height='20px' />
        </div>
      ) : (
        <div onClick={() => setTheme('dark')}>
          <DarkModeIcon className='fill-black dark:fill-white' width='20px' height='20px' />
        </div>
      )}
    </div>
  )
}

export default ThemeSwitch;