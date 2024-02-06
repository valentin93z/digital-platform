'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { getNoun } from "@utils/getNoun";

const CmStoresPage = () => {

  const [storesLength, setStoresLength] = useState({ belgorod: 0, so: 0, kursk1: 0, kursk2: 0 });

  useEffect(() => {
    const fetchStoresLength = async () => {
      const storesRes = await fetch('/api/store');
      const storesData = await storesRes.json();
      setStoresLength({
        belgorod: storesData.filter((store) => store.sector === 'Белгород').length,
        so: storesData.filter((store) => store.sector === 'СО').length,
        kursk1: storesData.filter((store) => store.sector === 'Курск 1').length,
        kursk2: storesData.filter((store) => store.sector === 'Курск 2').length,
      });
    }
    fetchStoresLength();
  }, []);

    return (
      <div className="font-rubik px-5 md:px-20">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5 mb-10">Сектор</h1>
        <ul className="flex items-start gap-5">
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/belgorod'>
              <div>
                <p className="text-3xl text-center text-white">Белгород</p>
                <p className="text-sm text-center text-neutral-200">{`${storesLength.belgorod} ${getNoun(storesLength.belgorod, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/stariy-oskol'>
              <div>
                <p className="text-3xl text-center text-white">Старый Оскол</p>
                <p className="text-sm text-center text-neutral-200">{`${storesLength.so} ${getNoun(storesLength.so, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/kursk1'>
              <div>
                <p className="text-3xl text-center text-white">Курск 1</p>
                <p className="text-sm text-center text-neutral-200">{`${storesLength.kursk1} ${getNoun(storesLength.kursk1, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/kursk2'>
              <div>
                <p className="text-3xl text-center text-white">Курск 2</p>
                <p className="text-sm text-center text-neutral-200">{`${storesLength.kursk2} ${getNoun(storesLength.kursk2, 'торговая точка', 'торговых точки', 'торговых точек')}`}</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CmStoresPage;