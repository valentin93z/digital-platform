
const NewsModal = ({ handleReset, handleSubmit, newItem, setNewItem }) => {
  return (
    <div
        className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50'
        onClick={handleReset}
    >
      <div className='w-[600px] bg-neutral-100 dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-2xl text-center text-neutral-800 dark:text-white mb-5">Создание новой записи</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          
          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Заголовок</p>
            <input
              className='block w-full rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
              type='text'
              placeholder=''
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p>Содержание</p>
            <textarea
                className="block w-full bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 p-2 rounded-md shadow-md resize-none"
                cols={50}
                rows={5}
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p>Изображение</p>
            <input
                type="file"
                onChange={(e) => setNewItem({...newItem, image: e.target.files[0]})}
            />
          </div>

          <div className="flex justify-between items-center gap-5 mt-5">
            <button
              className="block bg-neutral-500 hover:bg-neutral-700 text-white rounded-md shadow-md cursor-pointer px-3 py-2"
              type='button'
              onClick={handleReset}
            >
              Отмена
            </button>
            <button
              className="block bg-violet-500 hover:bg-violet-700 text-white rounded-md shadow-md cursor-pointer px-3 py-2"
              type='submit'
            >
              Сохранить
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default NewsModal;