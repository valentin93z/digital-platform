import { getMonthName } from "@utils/getMonthName";
import NewFormSelect from "./selects/NewFormSelect";

const EventModal = ({ newEvent, setNewEvent, handleSave, handleReset }) => {
  return (
    <div
      className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50'
      onClick={handleReset}
    >
      <div className='w-[600px] bg-neutral-100 dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5' onClick={(e) => e.stopPropagation()}>
        <h1 className="text-2xl text-center text-neutral-800 dark:text-white mb-5">Новое мероприятие на {`${newEvent.day} ${getMonthName(newEvent.month)} ${newEvent.year}г.`}</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSave}
        >

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Название</p>
            <input
              className='block w-full rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
              type='text'
              placeholder=''
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Тип мероприятия</p>
            <NewFormSelect
              data={['Вебинар', 'Обучение', 'Экзамен']}
              value={newEvent}
              setValue={setNewEvent}
              exist={'type'}
            />
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Время начала</p>
            <div className="flex justify-end gap-2">
              <div className="flex items-center gap-2">
                <input
                  className='block w-[80px] rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
                  type='text'
                  placeholder=''
                  value={newEvent.hours}
                  onChange={(e) => setNewEvent({ ...newEvent, hours: e.target.value })}
                />
                <p>ч.</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className='block w-[80px] rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
                  type='text'
                  placeholder=''
                  value={newEvent.minutes}
                  onChange={(e) => setNewEvent({ ...newEvent, minutes: e.target.value })}
                />
                <p>мин.</p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Длительность</p>
            <div className="flex justify-end">
              <input
                className='block w-[230px] rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
                type='text'
                placeholder=''
                value={newEvent.duration}
                onChange={(e) => setNewEvent({ ...newEvent, duration: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Ссылка</p>
            <input
              className='block w-full rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
              type='text'
              placeholder=''
              value={newEvent.link}
              onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <p className="text-neutral-800 dark:text-white">Описание</p>
            <input
              className='block w-full rounded-md bg-white dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 shadow-md p-2'
              type='text'
              placeholder=''
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
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

export default EventModal;