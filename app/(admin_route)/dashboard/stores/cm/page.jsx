import Link from "next/link";

const CmStoresPage = () => {
    return (
      <div className="font-rubik px-5 md:px-20">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5 mb-10">Сектор</h1>
        <ul className="flex items-start gap-5">
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/belgorod'>
              <div>
                <p className="text-3xl text-center">Белгород</p>
                <p className="text-sm text-center text-neutral-400">10 торговых точек</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/stariy-oskol'>
              <div>
                <p className="text-3xl text-center">Старый Оскол</p>
                <p className="text-sm text-center text-neutral-400">10 торговых точек</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/kursk1'>
              <div>
                <p className="text-3xl text-center">Курск 1</p>
                <p className="text-sm text-center text-neutral-400">10 торговых точек</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="w-[300px] h-[200px] grid place-items-center bg-violet-700 rounded-xl hover:scale-105 transition-all" href='/dashboard/stores/cm/kursk2'>
              <div>
                <p className="text-3xl text-center">Курск 2</p>
                <p className="text-sm text-center text-neutral-400">10 торговых точек</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  
  export default CmStoresPage;