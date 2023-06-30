'use client';
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {

  const [currentPage, setCurrentPage] = useState('main');

  return (
    <div className='hidden min-h-screen md:flex flex-col justify-between items-center fixed top-0 left-0 bg-white dark:bg-neutral-800 shadow-md py-5'>
      <div>
        <div className='w-full flex justify-center items-center p-3'>
          <div className='w-full flex justify-center items-center'>
            <svg
              className='fill-neutral-700 dark:fill-white'
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M105-215v-91h750v91H105Zm0-219v-91h750v91H105Zm0-220v-92h750v92H105Z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center'>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'main' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main' onClick={() => setCurrentPage('main')}>
              <svg
                className={`transition-colors ${currentPage === 'main' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'main' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M226.666-186.666h140.001v-246.667h226.666v246.667h140.001v-380.001L480-756.667l-253.334 190v380.001Zm0 66.666q-27.5 0-47.083-19.583T160-186.666v-380.001q0-15.833 7.083-30 7.084-14.166 19.584-23.333L440-810q9.197-6.667 19.23-10 10.032-3.333 20.901-3.333T500.943-820q9.943 3.333 19.057 10l253.333 190q12.5 9.167 19.584 23.333 7.083 14.167 7.083 30v380.001q0 27.5-19.583 47.083T733.334-120H526.667v-246.667h-93.334V-120H226.666ZM480-472Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Главная</div>
        </div>
        
        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'programs' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/programs' onClick={() => setCurrentPage('programs')}>
              <svg
                className={`transition-colors ${currentPage === 'programs' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'programs' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M104-264q-9.667-9.667-9.333-23.166.333-13.5 9.333-23.5l246-246.667q5.333-5 11-7.333Q366.667-567 373.333-567q6.667 0 12.5 2.334 5.833 2.333 10.833 7.333L538-415.999l230.001-229.334H682q-14.333 0-23.833-9.5-9.5-9.5-9.5-23.834 0-14.333 9.5-23.833 9.5-9.5 23.833-9.5h164.667q14.333 0 23.833 9.5 9.5 9.5 9.5 23.833V-514q0 13.667-9.5 23.5t-23.166 9.833q-13.667 0-23.5-9.833Q814-500.333 814-514v-83.334L560.667-344q-5.334 5.333-11 7.5-5.667 2.167-12.334 2.167-6.666 0-12.333-2.167t-11-7.5L372.667-485.333 150.333-263q-9 9-22.667 9Q114-254 104-264Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Программы обучения</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'courses' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/courses' onClick={() => setCurrentPage('courses')}>
              <svg
                className={`transition-colors ${currentPage === 'courses' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'courses' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M479.333-129.667q-8.39 0-16.362-1.833-7.971-1.833-15.638-6.167l-220-120q-16-9-25.333-24.416-9.334-15.417-9.334-34.584v-200L93.333-571q-8.905-4.972-12.952-12.429-4.048-7.457-4.048-16.571t4.048-16.571q4.047-7.457 12.952-12.429l354-193.333q7.579-4.334 15.579-6.5 8-2.167 16.421-2.167t16.421 2.167q8 2.166 15.579 6.5l391 212.666q8.667 5 13.167 12.811Q920-589.044 920-580v264.667q0 14.166-9.617 23.75Q900.766-282 886.55-282q-14.216 0-23.716-9.583-9.5-9.584-9.5-23.75V-562L766-516.667v200q0 19.167-9.333 34.584-9.333 15.416-25.333 24.416l-220.001 120q-7.666 4.334-15.638 6.167-7.971 1.833-16.362 1.833Zm0-306.333 301.334-164-301.334-162-300 162 300 164Zm0 240.334 220.001-120.667v-162.334L511.666-377Q504-372.667 496-370.833 488-369 479.333-369q-8.666 0-16.333-1.833-7.667-1.834-15.333-6.167L259.333-480v163.667l220 120.667ZM480-436Zm-.667 100.333Zm0 0Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Курсы</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'media' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/media' onClick={() => setCurrentPage('media')}>
              <svg
                className={`transition-colors ${currentPage === 'media' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'media' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M146.666-80q-27 0-46.833-19.833T80-146.666v-426.668q0-27 19.833-46.833T146.666-640h666.668q27 0 46.833 19.833T880-573.334v426.668q0 27-19.833 46.833T813.334-80H146.666Zm0-66.666h666.668v-426.668H146.666v426.668ZM430.333-225 611-346.333q7.667-5.334 7.667-13.667T611-373.667L430.333-494.333q-8.666-5.667-17.166-1.123-8.5 4.543-8.5 14.456v242.667q0 9.913 8.5 14.456 8.5 4.544 17.166-1.123ZM186-693.334q-14.167 0-23.75-9.617-9.584-9.617-9.584-23.833 0-14.216 9.584-23.716 9.583-9.5 23.75-9.5h588q14.167 0 23.75 9.617 9.584 9.617 9.584 23.833 0 14.216-9.584 23.716-9.583 9.5-23.75 9.5H186Zm127.333-120q-14.166 0-23.75-9.617Q280-832.568 280-846.784q0-14.216 9.583-23.716 9.584-9.5 23.75-9.5h333.334q14.166 0 23.75 9.617Q680-860.766 680-846.55q0 14.216-9.583 23.716-9.584 9.5-23.75 9.5H313.333ZM146.666-146.666v-426.668 426.668Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Медиатека</div>
        </div>
        
        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'tests' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/tests' onClick={() => setCurrentPage('tests')}>
              <svg
                className={`transition-colors ${currentPage === 'tests' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'tests' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M553.333-606.667q-14.166 0-23.75-9.617Q520-625.901 520-640.117q0-14.216 9.583-23.716 9.584-9.5 23.75-9.5h293.334q14.166 0 23.75 9.617Q880-654.099 880-639.883q0 14.216-9.583 23.716-9.584 9.5-23.75 9.5H553.333Zm0 320q-14.166 0-23.75-9.617Q520-305.901 520-320.117q0-14.216 9.583-23.716 9.584-9.5 23.75-9.5h293.334q14.166 0 23.75 9.617Q880-334.099 880-319.883q0 14.216-9.583 23.716-9.584 9.5-23.75 9.5H553.333Zm-354.666-266L103.333-648q-9.666-9.667-9.666-23.334 0-13.666 9.666-23.333Q113-704.333 126.666-704q13.667.333 23.334 9.333l71.667 71.001 152.667-152.667q10-10 23.333-9.5 13.333.5 23.594 10.5 9.406 10 9.406 23.333 0 13.333-9.667 23.333l-175.667 176q-10 10-23.333 10-13.333 0-23.333-10Zm0 320L103.333-328q-9.666-9.667-9.666-23.334 0-13.666 9.666-23.333Q113-384.333 126.666-384q13.667.333 23.334 9.333l71.667 71.001 152.667-152.667q10-10 23.333-9.5 13.333.5 23.594 10.5 9.406 10 9.406 23.333 0 13.333-9.667 23.333l-175.667 176q-10 10-23.333 10-13.333 0-23.333-10Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Тесты</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'events' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/events' onClick={() => setCurrentPage('events')}>
              <svg
                className={`transition-colors ${currentPage === 'events' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'events' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M186.666-80q-27 0-46.833-19.833T120-146.666v-600.001q0-27 19.833-46.833 19.833-19.834 46.833-19.834h56.667v-31.999q0-14.734 9.967-24.7Q263.267-880 278-880q15.017 0 25.175 9.967 10.158 9.966 10.158 24.7v31.999h333.334v-31.999q0-14.734 9.966-24.7Q666.6-880 681.333-880q15.017 0 25.175 9.967 10.159 9.966 10.159 24.7v31.999h56.667q27 0 46.833 19.834Q840-773.667 840-746.667v600.001q0 27-19.833 46.833T773.334-80H186.666Zm0-66.666h586.668v-420.001H186.666v420.001Zm0-486.667h586.668v-113.334H186.666v113.334Zm0 0v-113.334 113.334ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Мероприятия</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'info' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/info' onClick={() => setCurrentPage('info')}>
              <svg
                className={`transition-colors ${currentPage === 'info' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'info' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M482.117-280q14.216 0 23.716-9.583 9.5-9.584 9.5-23.75v-173.334q0-14.166-9.617-23.75Q496.099-520 481.883-520q-14.216 0-23.716 9.583-9.5 9.584-9.5 23.75v173.334q0 14.166 9.617 23.75Q467.901-280 482.117-280Zm-2.129-316q15.012 0 25.179-9.966 10.166-9.967 10.166-24.7 0-15.3-10.155-25.65-10.155-10.35-25.166-10.35-15.012 0-25.179 10.35-10.166 10.35-10.166 25.65 0 14.733 10.155 24.7Q464.977-596 479.988-596Zm.189 516q-82.822 0-155.666-31.5t-127.178-85.833Q143-251.667 111.5-324.56 80-397.454 80-480.333q0-82.88 31.5-155.773Q143-709 197.333-763q54.334-54 127.227-85.5Q397.454-880 480.333-880q82.88 0 155.773 31.5Q709-817 763-763t85.5 127Q880-563 880-480.177q0 82.822-31.5 155.666T763-197.456q-54 54.21-127 85.833Q563-80 480.177-80Zm.156-66.666q139 0 236.001-97.334 97-97.333 97-236.333t-96.875-236.001q-96.876-97-236.459-97-138.667 0-236 96.875Q146.666-619.583 146.666-480q0 138.667 97.334 236 97.333 97.334 236.333 97.334ZM480-480Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>База знаний</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'news' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/news' onClick={() => setCurrentPage('news')}>
              <svg
                className={`transition-colors ${currentPage === 'news' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'news' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M186.666-120q-27 0-46.833-19.833T120-186.666v-586.668q0-27 19.833-46.833T186.666-840h454.667L840-641.333v454.667q0 27-19.833 46.833T773.334-120H186.666Zm0-66.666h586.668v-419.048H606v-167.62H186.666v586.668Zm92.667-100.668h401.334V-354H279.333v66.666Zm0-318.666H480v-66.666H279.333V-606Zm0 159.333h401.334v-66.666H279.333v66.666Zm-92.667-326.667v167.62-167.62 586.668-586.668Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Новости</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'results' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/results' onClick={() => setCurrentPage('results')}>
              <svg
                className={`transition-colors ${currentPage === 'results' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'results' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M186.666-120q-27 0-46.833-19.833T120-186.666v-620.001q0-14.166 9.617-23.75Q139.234-840 153.45-840q14.216 0 23.716 9.583 9.5 9.584 9.5 23.75v620.001h620.001q14.166 0 23.75 9.617Q840-167.432 840-153.216q0 14.216-9.583 23.716-9.584 9.5-23.75 9.5H186.666Zm96.439-130Q269-250 259.5-259.584q-9.5-9.583-9.5-23.749v-276q0-14.167 9.542-23.75 9.541-9.583 23.645-9.583h66.375q14.104 0 23.604 9.583t9.5 23.75v276q0 14.166-9.541 23.749Q363.584-250 349.479-250h-66.374Zm198.666 0q-14.104 0-23.604-9.584-9.5-9.583-9.5-23.749v-480q0-14.167 9.541-23.75 9.542-9.584 23.646-9.584h66.374q14.105 0 23.605 9.584 9.5 9.583 9.5 23.75v480q0 14.166-9.541 23.749Q562.25-250 548.146-250h-66.375Zm196 0q-14.104 0-23.604-9.584-9.5-9.583-9.5-23.749v-113.334q0-14.166 9.541-23.749Q663.749-430 677.854-430h66.374q14.105 0 23.605 9.584 9.5 9.583 9.5 23.749v113.334q0 14.166-9.542 23.749Q758.25-250 744.146-250h-66.375Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Мои результаты</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'achievements' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/achievements' onClick={() => setCurrentPage('achievements')}>
              <svg
                className={`transition-colors ${currentPage === 'achievements' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'achievements' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M446.667-186.666v-140.001q-52.334-11-93.167-44.833-40.833-33.834-57.5-84.5-74.333-8.334-125.167-61.834Q120-571.334 120-645.333V-688q0-27.5 19.583-47.083 19.583-19.584 47.083-19.584h96.001v-18.667q0-27.5 19.583-47.083T349.333-840h261.334q27.5 0 47.083 19.583t19.583 47.083v18.667h96.001q27.5 0 47.083 19.584Q840-715.5 840-688v42.667q0 73.999-50.833 127.499Q738.333-464.334 664-456q-16.667 50.666-57.5 84.5-40.833 33.833-93.167 44.833v140.001h121.334q14.166 0 23.749 9.617Q668-167.432 668-153.216q0 14.216-9.584 23.716-9.583 9.5-23.749 9.5H325.333q-14.166 0-23.749-9.617Q292-139.234 292-153.45q0-14.216 9.584-23.716 9.583-9.5 23.749-9.5h121.334Zm-164-340.001V-688h-96.001v42.667q0 42.666 27 75.166 27.001 32.5 69.001 43.5ZM480.157-390q54.51 0 92.51-38.305 38-38.306 38-93.028v-252.001H349.333v252.001q0 54.722 38.157 93.028Q425.647-390 480.157-390Zm197.176-136.667q42-11 69.001-43.5 27-32.5 27-75.166V-688h-96.001v161.333ZM480-582Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Достижения</div>
        </div>

        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'tasks' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/tasks' onClick={() => setCurrentPage('tasks')}>
              <svg
                className={`transition-colors ${currentPage === 'tasks' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'tasks' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M480-80q-84.333 0-157.333-30.833-73-30.834-127-84.834t-84.834-127Q80-395.667 80-480q0-83.667 30.833-156.667 30.834-73 84.834-127t127-85.166Q395.667-880 480-880q56 0 109.167 15.333 53.167 15.334 100.501 45.001 12.333 7.333 15.499 20.666 3.167 13.334-5.5 24.667Q691.001-763 677.501-761t-26.167-5.333q-38.666-23-82.167-35.001-43.5-12-89.167-12-141 0-237.167 96.167T146.666-480q0 141 96.167 237.167T480-146.666q141 0 237.167-96.167T813.334-480q0-15.334-1.167-29.834t-4.167-28.5q-2-14.333 4.834-26.833 6.833-12.5 20.499-15.5 14-3.667 26 4t14 21.666q3.334 18.001 5 36.667Q880-499.667 880-480q0 84.333-31.167 157.333-31.166 73-85.166 127t-127 84.834Q563.667-80 480-80Zm-58-315.333L807.334-781q9.666-9.667 23.833-9.833Q845.333-791 856-781q10.333 10.333 10.333 24.667 0 14.333-10.333 24.666l-410.667 411q-10 10-23.333 10-13.333 0-23.333-10l-119.334-120Q269.667-450.333 270-465q.333-14.667 10-24.333Q289.667-499 304.333-499q14.667 0 24.333 9.667l93.334 94Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Задания</div>
        </div>
        
      </div>
      <div>
        <div className={`relative w-full flex justify-center items-center p-3 transition-colors duration-300 ${currentPage === 'svk' && 'bg-violet-500 dark:bg-violet-500'}`}>
          <div className='w-full flex justify-center items-center cursor-pointer hover_parent'>
            <Link href='/main/svk' onClick={() => setCurrentPage('svk')}>
              <svg
                className={`transition-colors ${currentPage === 'svk' ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== 'svk' && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="M868-230 768-330q-10-9.957-10-22.979Q758-366 767.967-376q9.966-10 23-10Q804-386 814-376l126 125q9 9 9 21t-9 21L814-83q-9.957 10-22.979 10Q778-73 768-83.183q-10-10.184-10-23.5Q758-120 768-130l100-100ZM360-120q-12.75 0-21.375-8.625T330-150v-50H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v267q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T820-513v-267H140v520h516q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T656-200h-26v50q0 12.75-8.625 21.375T600-120H360Zm89-379v100q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T509-399v-100h100q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T609-559H509v-100q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T449-659v100H349q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T349-499h100ZM140-260v-520 520Z"/>
              </svg>
            </Link>
          </div>
          <div className='absolute top-[50%] translate-y-[-50%] left-[80px] bg-white dark:bg-neutral-800 whitespace-nowrap p-1 cursor-default rounded-md hover_child transition-opacity duration-300 shadow-md'>Видеоконтроль</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;