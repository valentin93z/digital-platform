'use client';
import { useState, useEffect } from "react";
import CreateIcon from "@components/icons/CreateIcon";
import Link from "next/link";
import CircleLoader from "@components/loader/CircleLoader";
import CoursesList from "@components/CoursesList";

const CoursesPageAdmin = () => {

  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchCourseList = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/course');
      const data = await response.json();
      setCourseList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourseList();
  }, []);

  if (loading) return <CircleLoader />

  return (
    <div className="font-rubik px-5 md:px-20 mt-10 md:mt-0">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-4xl text-neutral-700 dark:text-white py-5">Каталог курсов</h1>
        <Link className="flex gap-3 items-center bg-violet-500 hover:bg-violet-600 rounded-md px-3 py-2" href='/dashboard/education/courses/new'>
          <CreateIcon className='block fill-white' width='24px' height='24px' />
          <p className="text-lg text-white mt-1">Создать</p>
        </Link>
      </div>
      <div className="flex flex-col gap-10">
          <CoursesList courseList={courseList} />
        </div>
    </div>
  )
}

export default CoursesPageAdmin;