import Image from "next/image";

const AllCoursesPage = () => {
  return (
      <div className="w-full flex justify-start flex-wrap gap-5">
        <div className="w-[270px] dark:bg-neutral-800 dark:hover:bg-neutral-950 p-[10px] rounded-md cursor-pointer">
          <div>
            <Image
              className="rounded-md"
              src='/assets/images/course_01.jpg'
              alt='card-img'
              width={250}
              height={120}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-lg text-violet-400">Название курса</h1>
            <p className="font-roboto text-sm">Описание курса. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit libero minima neque in alias animi quam.</p>
            <p className="text-xs text-right">15 мин.</p>
          </div>
        </div>
        <div className="w-[270px] dark:bg-neutral-800 dark:hover:bg-neutral-950 p-[10px] rounded-md cursor-pointer">
          <div>
            <Image
              className="rounded-md"
              src='/assets/images/course_02.jpg'
              alt='card-img'
              width={250}
              height={120}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-lg text-violet-400">Название курса</h1>
            <p className="font-roboto text-sm">Описание курса. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit libero minima neque in alias animi quam.</p>
            <p className="text-xs text-right">15 мин.</p>
          </div>
        </div>
        <div className="w-[270px] dark:bg-neutral-800 dark:hover:bg-neutral-950 p-[10px] rounded-md cursor-pointer">
          <div>
            <Image
              className="rounded-md"
              src='/assets/images/course_03.jpg'
              alt='card-img'
              width={250}
              height={120}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-lg text-violet-400">Название курса</h1>
            <p className="font-roboto text-sm">Описание курса. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit libero minima neque in alias animi quam.</p>
            <p className="text-xs text-right">15 мин.</p>
          </div>
        </div>
      </div>
  )
}

export default AllCoursesPage;