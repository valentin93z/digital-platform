import NewFormInput from "./inputs/NewFormInput";
import NewFormSelect from "./selects/NewFormSelect";

const NewStoreModal = ({ type, closeModal, newStore, setNewStore, handleReset, handleSave, directionList, sectorList }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50' onClick={closeModal}>
      <div className='w-[400px] bg-neutral-100 dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-2xl text-center text-neutral-800 dark:text-white mb-5">Добавление торговой точки</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSave}>
          <div className="flex justify-between items-center gap-5">
            <p className="text-neutral-800 dark:text-white">Название ТТ</p>
            <input
              className='block min-w-[180px] rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
              type='text'
              placeholder=''
              value={newStore.title}
              onChange={(e) => setNewStore({...newStore, title: e.target.value})}
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <p className="text-neutral-800 dark:text-white">Направление</p>
            <NewFormSelect
              data={directionList}
              value={newStore}
              setValue={setNewStore}
              exist={'direction'}
            />
          </div>
          {newStore.direction === 'ЦМ' &&
            <div className="flex justify-between items-center gap-5">
              <p className="text-neutral-800 dark:text-white">Сектор</p>
              <NewFormSelect
                data={sectorList}
                value={newStore}
                setValue={setNewStore}
                exist={'sector'}
              />
            </div>
          }
          <div className="flex justify-between items-center gap-5">
            <button
              className="w-full bg-neutral-400 hover:bg-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-white px-3 py-2 rounded-md"
              type="button"
              onClick={handleReset}
            >
              Отмена
            </button>
            <button
              className="w-full bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 rounded-md"
              type="submit"
            >
              {type === 'edit' ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewStoreModal;