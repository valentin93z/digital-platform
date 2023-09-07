import CreateIcon from "@components/icons/CreateIcon";
import Link from "next/link";

const TestsPageAdmin = () => {
  return (
    <div className="font-rubik px-5 md:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Каталог тестов</h1>
        <Link className="flex gap-3 items-center bg-violet-500 hover:bg-violet-600 rounded-md px-3 py-2" href='/dashboard/education/tests/new'>
          <CreateIcon className='block dark:fill-white' width='24px' height='24px' />
          <p className="text-lg mt-1">Создать</p>
        </Link>
      </div>
    </div>
  )
}

export default TestsPageAdmin;