'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import CircleLoader from "@components/loader/CircleLoader";

const CourseFinishPage = ({ params }) => {

  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState({});

  const fetchCourseData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/course-result/${params.id}`);
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

  if (loading) return <CircleLoader />

  return (
    <div className='w-full h-[calc(100vh-120px)] p-5 md:p-10'>
      <div className='w-full h-[calc(100vh-200px)] flex justify-center items-center bg-white dark:bg-neutral-800 rounded-xl'>
  
        {courseData.result &&
          <div className="flex flex-col items-center gap-5">
            <svg className="w-[80px] md:w-[150px] h-[80px] md:h-[150px] fill-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/>
            </svg>
            <h1 className="text-lg md:text-3xl">Курс пройден</h1>
            <Link className="text-white bg-violet-500 hover:bg-violet-700 px-2 py-1 rounded-md" href='/main/results'>Выход</Link>
          </div>
        }

      </div>
    </div>
  )
}

export default CourseFinishPage;