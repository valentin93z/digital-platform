import { getMonthName } from "@utils/getMonthName";
import TimerIcon from "./icons/TimerIcon";

const EventList = ({ events, newEvent }) => {
  return (
    <div className="text-neutral-700 dark:text-white">
      <div className='flex flex-col gap-5'>
        <h1 className='text-xl text-center'>{`${newEvent.day} ${getMonthName(newEvent.month)} ${newEvent.year}г.`}</h1>
        <div className="flex justify-between items-center gap-5">
          <h2 className='text-xl'>Запланированные мероприятия:</h2>
          <h2 className='text-xl'>{events.filter((event) => event.day === newEvent.day && event.month === newEvent.month + 1 && event.year === newEvent.year).length}</h2>
        </div>
      </div>
      <ul className="flex flex-col justify-start gap-3 mt-5">
        {events.filter((event) => event.day === newEvent.day && event.month === newEvent.month + 1 && event.year === newEvent.year).map((event) =>
          <li className="border-solid border border-violet-500 dark:border-white shadow-lg rounded-md p-3" key={event._id}>
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-4xl">
                  {event.hours < 10 ? `0${event.hours}` : event.hours}
                  :
                  {event.minutes < 10 ? `0${event.minutes}` : event.minutes}
                </p>
                <p>
                  {event.day < 10 ? `0${event.day}` : event.day}
                  .
                  {event.month < 10 ? `0${event.month}` : event.month}
                  .
                  {event.year < 10 ? `0${event.year}` : event.year}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <TimerIcon className='block fill-neutral-700 dark:fill-white' width={32} height={32} />
                <p className="text-sm text-right">{event.duration}</p>
              </div>
              <div>
                <p>{event.title}</p>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default EventList;