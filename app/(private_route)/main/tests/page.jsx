'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CircleLoader from "@components/loader/CircleLoader";
import { CldImage } from "next-cloudinary";
import { useSession } from "next-auth/react";

const TestsPage = () => {

  const { data, status } = useSession();
  const [currentTab, setCurrentTab] = useState('tests');
  const [loading, setLoading] = useState(false);

  const [testList, setTestList] = useState([]);

  const fetchTestList = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tests');
      const testData = await response.json();
      setTestList(testData.filter((test) => test?.forPosition?.includes(data?.user?.position)));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTestList();
  }, []);

  if (loading) return <CircleLoader />

  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Тесты и опросы</h1>
      <div className="flex items-center gap-5 py-5">
        <div className="relative">
          <input
            className="absolute w-0 h-0 opacity-0"
            type="radio"
            id="tests"
            name="tests-polls"
            onChange={() => setCurrentTab('tests')}
            checked={currentTab === 'tests'}
          />
          <label className={`text-sm md:text-base rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'tests' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="tests">Тесты</label>
        </div>
        <div className="relative">
          <input
            className="absolute w-0 h-0 opacity-0"
            type="radio"
            id="polls"
            name="tests-polls"
            onChange={() => setCurrentTab('polls')}
            checked={currentTab === 'polls'}
          />
          <label className={`text-sm md:text-base rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'polls' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="polls">Опросы</label>
        </div>
      </div>

      {currentTab === 'tests' &&
        <>
        {testList.length !== 0 ? (
          <ul className='flex justify-start gap-5 shrink'>
            {testList.map((testItem) =>
              <li className='max-w-[50%] md:max-w-[300px] bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer' key={testItem._id}>
                <Link href={`/main/tests/${testItem._id}/preview`}>
                  {testItem.image
                    ?
                      <div className="relative w-[300px] h-[200px]">
                        <CldImage
                          src={testItem.image.public_id}
                          sizes='300px'
                          fill
                          style={{objectFit: 'cover'}}
                          alt='test-image'
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
                  <div className='h-auto md:h-[100px] flex flex-col gap-1 md:gap-0 justify-between items-start p-3'>
                    <h2 className="text-sm md:text-base">{testItem.title}</h2>
                    <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base shadow-md rounded-2xl px-2 py-1'>новый</div>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        ) : (
          <div className="w-full flex flex-col items-center gap-5 py-10">
            <svg className="block w-[60px] md:w-[120px] h-[60px] md:h-[120px] fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M279.982-407q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5Zm0-160q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM390-410h300q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-470H390q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T390-410Zm0-160h300q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-630H390q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T390-570ZM140-200q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v50q0 12.75-8.625 21.375T600-120H360q-12.75 0-21.375-8.625T330-150v-50H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"/>
            </svg>
            <h1 className="text-base md:text-2xl text-neutral-700 dark:text-white">Нет доступных тестов</h1>
          </div>
        )}

        </>
      }

      {currentTab === 'polls' &&
        <div className="w-full flex flex-col items-center gap-5 py-10">
          <svg className="block w-[60px] md:w-[120px] h-[60px] md:h-[120px] fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M279.982-407q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5Zm0-160q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM390-410h300q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-470H390q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T390-410Zm0-160h300q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T690-630H390q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T390-570ZM140-200q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v50q0 12.75-8.625 21.375T600-120H360q-12.75 0-21.375-8.625T330-150v-50H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"/>
          </svg>
          <h1 className="text-base md:text-2xl text-neutral-700 dark:text-white">Нет доступных опросов</h1>
        </div>
      }

    </div>
  )
}
  
export default TestsPage;