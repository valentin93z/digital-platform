'use client';
import { parseDateFormat } from '@utils/parseUserData';
import { useSession } from 'next-auth/react';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HomePage = () => {

  const { status, data } = useSession();
  console.log(status, data);

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNewsData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news');
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Главная страница</h1>

      <div className='flex flex-col gap-5 mb-10'>

        {newsData.sort((a, b) => b.date - a.date).map((item) =>
          <div
            className="w-full grid grid-cols-[1fr_3fr] gap-10 bg-white shadow-lg rounded-md p-10 cursor-pointer"
            key={item._id}
          >
            <div className="relative w-[300px] h-[170px] rounded-md overflow-hidden">

            {item?.image
                ?
                  <div className="relative w-full sm:w-[300px] h-[200px]">
                    <CldImage
                      src={item.image.public_id}
                      sizes='300px'
                      fill
                      style={{objectFit: 'cover'}}
                      alt='course-image'
                    />
                  </div>
                :
                  <Image
                    className='rounded-t-lg'
                    src='/assets/images/math-course.jpg'
                    alt='course-img'
                    width={300}
                    height={200}
                  />
              }

            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-2xl text-neutral-700'>{item?.title}</h2>
              <p className='text-neutral-700 text-justify'>{item?.description}</p>
              <p className='text-neutral-600 text-right'>{parseDateFormat(item?.date)}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default HomePage;