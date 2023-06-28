'use client';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

const HomePage = () => {

  const { status, data } = useSession();
  console.log(status, data);

  return (
    <div>
      <h1 className="text-center text-2xl">Добро пожаловать!</h1>
    </div>
  )
}

export default HomePage;