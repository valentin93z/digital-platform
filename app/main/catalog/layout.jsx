import Link from "next/link"; 

const CatalogLayout = ({ children }) => {
  return (
    <div className="w-full flex gap-20 px-20">
      <div className="min-w-[190px] font-roboto">
        <ul className="flex flex-col gap-5 dark:bg-neutral-800 rounded-md px-3 py-5">
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href='/main/catalog/my-courses'>Назначенные курсы</Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href='/main/catalog/all-courses'>Все курсы</Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href='/main/catalog/my-tests'>Назначенные тесты</Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link href='/main/catalog/all-tests'>Все тесты</Link>
          </li>
        </ul>
      </div>
      <div className="w-full">{children}</div>
    </div>
  )
}

export default CatalogLayout;