import Image from 'next/image';

const CoursesList3 = () => {
  return (
    <div className='font-rubik'>
      <div className='flex justify-between items-center pb-5 md:pb-0'>
        <div className='flex flex-col md:flex-row md:items-center md:gap-3 md:py-5'>
          <h1 className='text-lg md:text-2xl text-neutral-700 dark:text-white'>Техника</h1>
          <div className='hidden md:block'>
            {'>'}
          </div>
          <p className='text-xs md:text-lg text-neutral-600 dark:text-neutral-400'>2 материала</p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-white dark:bg-neutral-800 hover:bg-violet-500 dark:hover:bg-violet-500 rounded-full shadow-md cursor-pointer'>
            <svg className='block fill-black dark:fill-white hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
              <path d="M539-262 341-460q-5-5-7-10t-2-11q0-6 2-11t7-10l199-199q9-9 21.5-9t21.5 9q9 9 8.5 22t-9.5 22L406-481l177 177q9 9 9 21t-9 21q-9 9-22 9t-22-9Z"/>
            </svg>
          </div>
          <div className='bg-white dark:bg-neutral-800 hover:bg-violet-500 dark:hover:bg-violet-500 rounded-full shadow-md cursor-pointer'>
            <svg className='block fill-black dark:fill-white hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
              <path d="M354-262q-8-10-8.5-22t8.5-21l176-176-177-177q-8-8-7.5-21.5T354-701q10-10 21.5-9.5T396-701l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L397-262q-9 9-21 8.5t-22-8.5Z"/>
            </svg>
          </div>
        </div>
      </div>

      <ul className='flex justify-start gap-5 md:gap-10'>

        <li className='bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl cursor-pointer'>
          <Image
            className='rounded-t-lg'
            src='/assets/images/course_10.jpg'
            alt='course-img'
            width={300}
            height={200}
          />
          <div className='h-[100px] flex flex-col justify-between items-start p-3'>
            <h2 className='text-sm md:text-base'>Название курса 1</h2>
            <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base shadow-md rounded-2xl px-2 py-1'>новый</div>
          </div>
        </li>

        <li className='bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl cursor-pointer'>
          <Image
            className='rounded-t-lg'
            src='/assets/images/course_05.jpg'
            alt='course-img'
            width={300}
            height={200}
          />
          <div className='h-[100px] flex flex-col justify-between items-start p-3'>
            <h2 className='text-sm md:text-base'>Название курса 2</h2>
            <div className='bg-violet-500 dark:bg-violet-500 text-white text-xs md:text-base rounded-2xl px-2 py-1'>новый</div>
          </div>
        </li>

      </ul>

    </div>
  )
}

export default CoursesList3;