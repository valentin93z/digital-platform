import AddIcon from "@components/icons/AddIcon";

const BelgorodStoresPage = () => {
    return (
      <div className="font-rubik px-5 md:px-20">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">ТТ сектор: Белгород</h1>
          <button className="flex items-center gap-3 bg-violet-500 rounded-md px-2 py-3 hover:bg-violet-600 cursor-pointer" type="button">
            <AddIcon className='dark:fill-white' width='24px' height='24px' />
            <p className="text-lg">Добавить</p>
          </button>
        </div>
      </div>
    )
  }
  
  export default BelgorodStoresPage;