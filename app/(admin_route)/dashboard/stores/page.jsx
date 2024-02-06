'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNoun } from "@utils/getNoun";

const StoresPage = () => {

  const [storesLength, setStoresLength] = useState({ cm: 0, istore: 0, xiaomi: 0 });

  useEffect(() => {
    const fetchStoresLength = async () => {
      const storesRes = await fetch('/api/store');
      const storesData = await storesRes.json();
      setStoresLength({
        cm: storesData.filter((store) => store.direction === 'ЦМ').length,
        istore: storesData.filter((store) => store.direction === 'The iStore').length,
        xiaomi: storesData.filter((store) => store.direction === 'Xiaomi').length,
      });
      console.log(storesData);
    }
    fetchStoresLength();
  }, []);

  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5 mb-10">Направления</h1>
      <ul className="flex justify-start gap-10">
        <li className='bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:text-violet-500 transition-all'>
          <Link href='/dashboard/stores/cm'>
            <div className="relative w-[300px] h-[200px]">
              <Image
                className='rounded-t-lg'
                src='/assets/images/cm-logo.jpg'
                alt='cm-image'
                style={{objectFit: "cover"}}
                sizes="300px"
                fill
              />
            </div>
            <div className='p-3'>
              <h2 className='text-sm md:text-2xl text-center'>Цифромаркет</h2>
              <p className='text-sm text-center dark:text-neutral-400'>{`${storesLength.cm} ${getNoun(storesLength.cm, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
            </div>
          </Link>
        </li>
        <li className='bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:text-violet-500 transition-all'>
          <Link href='/dashboard/stores/the-istore'>
            <div className="relative w-[300px] h-[200px]">
              <Image
                className='rounded-t-lg'
                src='/assets/images/apple-logo.jpg'
                alt='apple-image'
                style={{objectFit: "cover"}}
                sizes="300px"
                fill
              />
            </div>
              <div className='p-3'>
                <h2 className='text-sm md:text-2xl text-center'>The iStore</h2>
                <p className='text-sm text-center dark:text-neutral-400'>{`${storesLength.istore} ${getNoun(storesLength.istore, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
              </div>
          </Link>
        </li>
        <li className='bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:text-violet-500 transition-all'>
          <Link href='/dashboard/stores/xiaomi'>
            <div className="relative w-[300px] h-[200px]">
              <Image
                className='rounded-t-lg'
                src='/assets/images/xiaomi-logo.jpeg'
                alt='polls-image'
                style={{objectFit: "cover"}}
                sizes="300px"
                fill
              />
            </div>
              <div className='p-3'>
                <h2 className='text-sm md:text-2xl text-center'>Xiaomi</h2>
                <p className='text-sm text-center dark:text-neutral-400'>{`${storesLength.xiaomi} ${getNoun(storesLength.xiaomi, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
              </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default StoresPage;