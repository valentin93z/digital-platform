'use client';
import { useEffect, useState } from "react";
import CircleLoader from "@components/loader/CircleLoader";
import CoursesList from "@components/CoursesList";
import CoursesList2 from "@components/CoursesList2";
import CoursesList3 from "@components/CoursesList3";

const CoursesPage = () => {

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

  console.log(courseList);

  if (loading) return <CircleLoader />

    return (
      <div className="font-rubik px-5 md:px-20 unselectable">
        <div className="py-5 mb-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 shadow-md px-2 py-1 rounded-xl cursor-pointer">
              <svg className="fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
                <path d="M440-160q-17 0-28.5-11.5T400-200v-240L161-745q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560-440v240q0 17-11.5 28.5T520-160h-80Z"/>
              </svg>
              <p className="text-sm md:text-base">Фильтр</p>
            </div>
            <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">Все</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <CoursesList courseList={courseList} />
          <CoursesList3 />
          <CoursesList2 />
        </div>
      </div>
    )
  }
  
export default CoursesPage;