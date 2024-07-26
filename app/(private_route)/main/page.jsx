'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
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

        <div className='w-full grid grid-cols-[1fr_3fr] gap-10 bg-white shadow-lg rounded-md p-10 cursor-pointer'>
          <div className="relative w-[300px] h-[170px] rounded-md overflow-hidden">
            <Image
              className="object-contain rounded-md"
              src='/assets/images/iphone_lrrr.jpg'
              alt='logo'
              sizes="300px"
              fill
            />
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl text-neutral-700'>{newsData[0]?.title}</h2>
            <p className='text-neutral-700 text-justify'>{newsData[0]?.description}</p>
            <p className='text-neutral-600 text-right'>27.07.2024г.</p>
          </div>
        </div>

        <div className='w-full grid grid-cols-[1fr_3fr] gap-10 bg-white shadow-lg rounded-md p-10 cursor-pointer'>
          <div className="relative w-[300px] h-[170px] rounded-md overflow-hidden">
            <Image
              className="object-contain rounded-md"
              src='/assets/images/samsung_ai.jpg'
              alt='logo'
              sizes="300px"
              fill
            />
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl text-neutral-700'>{newsData[1]?.title}</h2>
            <p className='text-neutral-700 text-justify'>{newsData[1]?.description}</p>
            <p className='text-neutral-600 text-right'>27.07.2024г.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage;

  // const [courseList, setCourseList] = useState([]);
  // const [testList, setTestList] = useState([]);

  // const fetchCourseList = async () => {
  //   const response = await fetch('/api/course');
  //   const data = await response.json();
  //   setCourseList(data);
  // }

  // const fetchTestList = async () => {
  //   const response = await fetch('/api/tests');
  //   const data = await response.json();
  //   setTestList(data);
  // }

  // useEffect(() => {
  //   fetchCourseList();
  //   fetchTestList();
  // }, []);


  // {/* Список назначенных курсов */}
  // {data?.user.courses.assigned.length >= 1 &&
  //   <div>
  //     <h2 className='mb-5'>Назначенные курсы: {data?.user.courses.assigned.length}</h2>
  //     <ul className='flex flex-col sm:flex-row justify-start gap-5 md:gap-10'>
  //       {data?.user.courses.assigned.map((course) =>
  //         <li className='bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden' key={course.assign_course_id}>
  //           <Link href={`main/courses/${course.assign_course_id}/preview`}>
  //             {courseList?.filter((i) => i._id === course.assign_course_id)[0]?.image
  //               ?
  //                 <div className="relative w-full sm:w-[300px] h-[200px]">
  //                   <CldImage
  //                     src={courseList?.filter((i) => i._id === course.assign_course_id)[0]?.image.public_id}
  //                     sizes='300px'
  //                     fill
  //                     style={{objectFit: 'cover'}}
  //                     alt='course-image'
  //                   />
  //                 </div>
  //               :
  //                 <Image
  //                   className='rounded-t-lg'
  //                   src='/assets/images/math-course.jpg'
  //                   alt='course-img'
  //                   width={300}
  //                   height={200}
  //                 />
  //             }
  //             <div className='h-[100px] flex flex-col justify-between items-start p-3'>
  //               <h2 className='text-sm md:text-base'>{course.assign_course_title}</h2>
  //               <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base shadow-md rounded-2xl px-2 py-1'>новый</div>
  //             </div>
  //           </Link>
  //         </li>
  //       )}
  //     </ul>
  //   </div>
  // }

  // {/* Список назначенных тестов */}
  // {data?.user.courses.assigned.length >= 1 &&
  //   <div>
  //     <h2 className='mb-5'>Назначенные тесты: {data?.user.tests.assigned.length}</h2>
  //     <ul className='flex flex-col sm:flex-row justify-start gap-5 md:gap-10'>
  //       {data?.user.tests.assigned.map((test) =>
  //         <li className='max-w-full sm:max-w-[300px] bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden' key={test.assign_course_id}>
  //           <Link href={`main/tests/${test.assign_test_id}/preview`}>
  //             {testList?.filter((i) => i._id === test.assign_test_id)[0]?.image
  //               ?
  //                 <div className="relative w-full sm:w-[300px] h-[200px]">
  //                   <CldImage
  //                     src={testList?.filter((i) => i._id === test.assign_test_id)[0]?.image.public_id}
  //                     sizes='300px'
  //                     fill
  //                     style={{objectFit: 'cover'}}
  //                     alt='course-image'
  //                   />
  //                 </div>
  //               :
  //                 <Image
  //                   className='rounded-t-lg'
  //                   src='/assets/images/math-course.jpg'
  //                   alt='course-img'
  //                   width={300}
  //                   height={200}
  //                 />
  //             }
  //             <div className='h-[100px] flex flex-col justify-between items-start p-3'>
  //               <h2 className='text-sm md:text-base'>{test.assign_test_title}</h2>
  //               <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base shadow-md rounded-2xl px-2 py-1'>новый</div>
  //             </div>
  //           </Link>
  //         </li>
  //       )}
  //     </ul>
  //   </div>
  // }