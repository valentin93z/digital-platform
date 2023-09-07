import Image from 'next/image';
import Link from 'next/link';

const EducationPage = () => {
  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5 mb-10">Учебные материалы</h1>
      <ul className="flex justify-start gap-10">
        <li className='dark:bg-neutral-800 rounded-xl hover:scale-105 hover:text-violet-500 transition-all'>
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
                <p className='text-sm text-center dark:text-neutral-400'>34 материала</p>
              </div>
          </Link>
        </li>
        <li className='dark:bg-neutral-800 rounded-xl hover:scale-105 hover:text-violet-500 transition-all'>
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
                <p className='text-sm text-center dark:text-neutral-400'>18 материалов</p>
              </div>
          </Link>
        </li>
        <li className='dark:bg-neutral-800 rounded-xl hover:scale-105 hover:text-violet-500 transition-all'>
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
                <p className='text-sm text-center dark:text-neutral-400'>4 материала</p>
              </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default EducationPage;