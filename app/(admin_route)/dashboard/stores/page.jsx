import Link from "next/link";
import Image from "next/image";

const StoresPage = () => {
  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5 mb-10">Направления</h1>
      <ul className="flex justify-start gap-10">
        <li className='dark:bg-neutral-800 rounded-xl hover:scale-105 hover:text-violet-500 transition-all'>
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
              <p className='text-sm text-center dark:text-neutral-400'>80 торговых точек</p>
            </div>
          </Link>
        </li>
        <li className='dark:bg-neutral-800 rounded-xl hover:scale-105 hover:text-violet-500 transition-all'>
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
                <p className='text-sm text-center dark:text-neutral-400'>20 торговых точек</p>
              </div>
          </Link>
        </li>
        <li className='dark:bg-neutral-800 rounded-xl hover:scale-105 hover:text-violet-500 transition-all'>
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
                <p className='text-sm text-center dark:text-neutral-400'>4 торговых точки</p>
              </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default StoresPage;