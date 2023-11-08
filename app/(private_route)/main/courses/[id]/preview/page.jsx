'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CircleLoader from '@components/loader/CircleLoader';
import { CldImage } from 'next-cloudinary';


const CoursePreviewPage = ({ params }) => {

  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCourseData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/course/${params.id}`);
      const data = await response.json();
      setCourseData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  console.log(courseData);

  if (loading) return <CircleLoader />

  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Курс: {courseData.title}</h1>
      <div className='max-w-[1000px] flex flex-col gap-5'>
        <div className='flex gap-5 text-sm bg-white dark:bg-neutral-800 rounded-lg p-5'>
          <div className='flex-shrink-0 flex justify-center items-center'>
            <div className="relative w-[300px] h-[200px]">
                <CldImage
                  src={courseData?.image?.public_id}
                  sizes='300px'
                  fill
                  style={{objectFit: 'cover'}}
                  alt='course-image'
                />
            </div>
          </div>
          <div>
            <h2 className='text-lg mb-3'>Описание курса:</h2>
            <p className='text-justify'>{courseData.description}</p>
          </div>
        </div>
        <div className='flex justify-end gap-5'>
          <Link className='border border-violet-500 dark:border-violet-500 border-solid hover:text-violet-700 rounded-md px-2 py-1' href={`/main/courses`}>Отмена</Link>
          <Link className='bg-violet-500 hover:bg-violet-700 text-white rounded-md px-2 py-1' href={`/course/${params.id}/run`}>Начать курс</Link>
        </div>
      </div>
    </div>
  )
}

export default CoursePreviewPage;