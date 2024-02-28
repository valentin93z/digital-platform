'use client';
import { useSession } from 'next-auth/react';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HomePage = () => {

  const { status, data } = useSession();
  console.log(status, data);

  const [courseList, setCourseList] = useState([]);
  const [testList, setTestList] = useState([]);

  const fetchCourseList = async () => {
    const response = await fetch('/api/course');
    const data = await response.json();
    setCourseList(data);
  }

  const fetchTestList = async () => {
    const response = await fetch('/api/tests');
    const data = await response.json();
    setTestList(data);
  }

  useEffect(() => {
    fetchCourseList();
    fetchTestList();
  }, []);


  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Главная страница</h1>

      
      <div className='flex flex-col gap-5 mb-10'>

        {/* Список назначенных курсов */}
        {data?.user.courses.assigned.length >= 1 &&
          <div>
            <h2 className='mb-5'>Назначенные курсы: {data?.user.courses.assigned.length}</h2>
            <ul className='flex flex-col sm:flex-row justify-start gap-5 md:gap-10'>
              {data?.user.courses.assigned.map((course) =>
                <li className='bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden' key={course.assign_course_id}>
                  <Link href={`main/courses/${course.assign_course_id}/preview`}>
                    {courseList?.filter((i) => i._id === course.assign_course_id)[0]?.image
                      ?
                        <div className="relative w-full sm:w-[300px] h-[200px]">
                          <CldImage
                            src={courseList?.filter((i) => i._id === course.assign_course_id)[0]?.image.public_id}
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
                    <div className='h-[100px] flex flex-col justify-between items-start p-3'>
                      <h2 className='text-sm md:text-base'>{course.assign_course_title}</h2>
                      <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base shadow-md rounded-2xl px-2 py-1'>новый</div>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        }

        {/* Список назначенных тестов */}
        {data?.user.courses.assigned.length >= 1 &&
          <div>
            <h2 className='mb-5'>Назначенные тесты: {data?.user.tests.assigned.length}</h2>
            <ul className='flex flex-col sm:flex-row justify-start gap-5 md:gap-10'>
              {data?.user.tests.assigned.map((test) =>
                <li className='bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden' key={test.assign_course_id}>
                  <Link href={`main/tests/${test.assign_test_id}/preview`}>
                    {testList?.filter((i) => i._id === test.assign_test_id)[0]?.image
                      ?
                        <div className="relative w-full sm:w-[300px] h-[200px]">
                          <CldImage
                            src={testList?.filter((i) => i._id === test.assign_test_id)[0]?.image.public_id}
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
                    <div className='h-[100px] flex flex-col justify-between items-start p-3'>
                      <h2 className='text-sm md:text-base'>{test.assign_test_title}</h2>
                      <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base shadow-md rounded-2xl px-2 py-1'>новый</div>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default HomePage;