'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNoun } from '@utils/getNoun';

const EducationPage = () => {

  const [coursesLength, setCoursesLength] = useState(0);
  const [testsLength, setTestsLength] = useState(0);
  const [pollsLength, setPollsLength] = useState(0);

  useEffect(() => {
    const fetchMaterialsLength = async () => {

      const coursesRes = await fetch('/api/course');
      const coursesData = await coursesRes.json();
      setCoursesLength(coursesData.length);
      console.log(coursesData)

      const testsRes = await fetch('/api/tests');
      const testsData = await testsRes.json();
      setTestsLength(testsData.length);
      console.log(testsData)
    }
    fetchMaterialsLength();
  }, []);

  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5 mb-10">Учебные материалы</h1>
      <ul className="flex justify-start gap-10">
        <li className='bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:text-violet-500 transition-all'>
          <Link href='/dashboard/education/courses'>
            <Image
              className='rounded-t-lg'
              src='/assets/images/admin-courses.jpg'
              alt='course-image'
              width={300}
              height={200}
            />
              <div className='p-3'>
                <h2 className='text-sm md:text-2xl text-center'>Каталог курсов</h2>
                <p className='text-sm text-center dark:text-neutral-400'>{`${coursesLength} ${getNoun(coursesLength, 'материал', 'материала', 'материалов')}`}</p>
              </div>
          </Link>
        </li>
        <li className='bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:text-violet-500 transition-all'>
          <Link href='/dashboard/education/tests'>
            <Image
              className='rounded-t-lg'
              src='/assets/images/admin-tests.jpg'
              alt='tests-image'
              width={300}
              height={200}
            />
              <div className='p-3'>
                <h2 className='text-sm md:text-2xl text-center'>Каталог тестов</h2>
                <p className='text-sm text-center dark:text-neutral-400'>{`${testsLength} ${getNoun(testsLength, 'материал', 'материала', 'материалов')}`}</p>
              </div>
          </Link>
        </li>
        <li className='bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:text-violet-500 transition-all'>
          <Link href='/dashboard/education/polls'>
            <Image
              className='rounded-t-lg'
              src='/assets/images/admin-polls.jpg'
              alt='polls-image'
              width={300}
              height={200}
            />
              <div className='p-3'>
                <h2 className='text-sm md:text-2xl text-center'>Опросы</h2>
                <p className='text-sm text-center dark:text-neutral-400'>{`${pollsLength} ${getNoun(pollsLength, 'материал', 'материала', 'материалов')}`}</p>
              </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default EducationPage;