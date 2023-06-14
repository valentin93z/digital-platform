'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitch = () => {

    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

  return (
    <div className='cursor-pointer'>
      {currentTheme === 'dark' ? (
        <Image
          src='/assets/icons/light_mode.svg'
          alt='light'
          width={20}
          height={20}
          onClick={() => setTheme('light')}
        />
      ) : (
        <Image
          src='/assets/icons/dark_mode.svg'
          alt='dark'
          width={20}
          height={20}
          onClick={() => setTheme('dark')}
        />
      ) }
    </div>
  )
}

export default ThemeSwitch;