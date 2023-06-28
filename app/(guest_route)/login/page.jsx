'use client';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ThemeSwitch from '@components/ThemeSwitch';
import LoginInput from '@components/inputs/LoginInput';
import PasswordInput from '@components/inputs/PasswordInput';


const LoginPage = () => {

  const { status, data } = useSession();
  const router = useRouter();

  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', { username: loginData.login, password: loginData.password, redirect: false });
    console.log(res);
    if (res?.error) return setError(res.error);
    router.replace('/main');
  }

  useEffect(() => {
    if (status === 'authenticated') router.push('/main');
  }, [status]);

  return (
    <section className='font-rubik w-full min-h-screen flex justify-center items-center relative'>
      <form className='bg-neutral-200 dark:bg-neutral-800 py-5 px-5 rounded-sm flex flex-col gap-6' onSubmit={handleSubmit}>
        <h1 className='dark:text-white font-semibold text-3xl text-center'>Вход</h1>
        <div className='flex flex-col gap-1'>
          <p className='text-lg'>Логин</p>
          <LoginInput
            loginData={loginData}
            setLoginData={setLoginData}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-lg'>Пароль</p>
          <PasswordInput
            loginData={loginData}
            setLoginData={setLoginData}
          />
        </div>
        <button className='w-full p-2 text-white bg-violet-500 dark:bg-violet-500 rounded-sm text-lg mt-5' type='submit'>Войти</button>
      </form>
      <div className='absolute top-5 right-5'>
        <ThemeSwitch />
      </div>
    </section>
  )
}

export default LoginPage;