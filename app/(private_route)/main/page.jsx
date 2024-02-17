'use client';
import { useSession } from 'next-auth/react';

const HomePage = () => {

  const { status, data } = useSession();
  console.log(status, data);

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Главная страница</h1>
      <div>
        <h2>Назначенные курсы: {data?.user.courses.assigned.length}</h2>
        <ul className='flex flex-col sm:flex-row justify-start gap-5 md:gap-10'>
          {data?.user.courses.assigned.map((course) =>
            <li className='bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer overflow-hidden' key={course.assign_course_id}>
              
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default HomePage;