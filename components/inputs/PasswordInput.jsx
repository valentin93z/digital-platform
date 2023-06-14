'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const PasswordInput = ({ loginData, setLoginData }) => {

    const [visibility, setVisibility] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, systemTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
      <div className="relative">
        <input
          className='p-2 outline-violet-800 dark:outline-violet-500 rounded-sm text-lg'
          type={visibility ? 'text' : 'password'}
          placeholder='Введите пароль'
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <div
          className='absolute top_center right-2'
          onClick={() => setVisibility(!visibility)}
        >
          {mounted && (
            visibility ? (
              <Image
                src={currentTheme === 'dark' ? '/assets/icons/visibility_false_white.svg' : '/assets/icons/visibility_false_black.svg'}
                alt='visibility'
                width={25}
                height={25}
              />
            ) : (
              <Image
                src={currentTheme === 'dark' ? '/assets/icons/visibility_true_white.svg' : '/assets/icons/visibility_true_black.svg'}
                alt='visibility'
                width={25}
                height={25}
              />
            )
          )}
        </div>
      </div>
    )
  }
  
  export default PasswordInput;