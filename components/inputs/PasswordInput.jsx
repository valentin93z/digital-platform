'use client';
import { useState } from "react";
import VisibilityFalseIcon from "@components/icons/VisibilityFalseIcon";
import VisibilityTrueIcon from "@components/icons/VisibilityTrueIcon";

const PasswordInput = ({ loginData, setLoginData }) => {

    const [visibility, setVisibility] = useState(false);

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
          className='absolute top_center right-2 cursor-pointer'
          onClick={() => setVisibility(!visibility)}
        >
          {visibility
            ? <VisibilityFalseIcon className='fill-black dark:fill-white' width='24px' height='24px' />
            : <VisibilityTrueIcon className='fill-black dark:fill-white' width='24px' height='24px' />
          }
        </div>
      </div>
    )
  }
  
  export default PasswordInput;