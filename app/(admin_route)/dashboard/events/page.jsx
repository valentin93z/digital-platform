'use client';
import { useState, useEffect } from 'react';
import Calendar from "@components/Calendar";
import EventModal from '@components/EventModal';
import { getMonthName } from '@utils/getMonthName';
import TimerIcon from '@components/icons/TimerIcon';

const EventsPage = () => {

  const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    hours: 0,
    minutes: 0,
    title: '',
    type: '',
    description: '',
    duration: '',
    members: [],
    link: '',
  });

  const [eventModalIsOpen, setEventModalIsOpen] = useState(false);

  const fetchEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    setEvents(data);
  }

  const handleReset = () => {
    setEventModalIsOpen(false);
    setNewEvent({
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDate(),
      hours: 0,
      minutes: 0,
      title: '',
      type: '',
      description: '',
      duration: '',
      members: [],
      link: '',
    });
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/events', {
        method: "POST",
        body: JSON.stringify({
          year: newEvent.year,
          month: newEvent.month + 1,
          day: newEvent.day,
          hours: newEvent.hours ? newEvent.hours : 0,
          minutes: newEvent.minutes ? newEvent.minutes : 0,
          type: newEvent.type,
          title: newEvent.title,
          description: newEvent.description ? newEvent.description : 'Описание не указано',
          duration: newEvent.duration ? newEvent.duration : 'Длительность не указана',
          members: newEvent.members,
          link: newEvent.link ? newEvent.link : 'Ссылка не указана',
        }),
      });
      if (response.ok) {
        handleReset();
        fetchEvents();
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <div className="mb-10">
        <h1 className="text-3xl text-neutral-700 dark:text-white">Мероприятия</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 mb-10">
        <div className='bg-white dark:bg-neutral-800 shadow-xl p-10 rounded-xl'>
          <Calendar newEvent={newEvent} setNewEvent={setNewEvent} events={events} />
        </div>

        {/* EVENT LIST */}
        <div className='bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-xl'>
          <div className="text-neutral-700 dark:text-white">
            <div className='flex flex-col gap-5'>
              <div className="flex justify-between">
                <h1 className='text-xl text-center'>{`${newEvent.day} ${getMonthName(newEvent.month)} ${newEvent.year}г.`}</h1>
                <button
                  className='block bg-violet-500 text-white rounded-md shadow-md hover:bg-violet-600 cursor-pointer px-3 py-2'
                  type='button'
                  onClick={() => setEventModalIsOpen(true)}
                >
                  Запланировать
                </button>
              </div>
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
        </div>
      </div>
      {eventModalIsOpen &&
        <EventModal
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          setEventModalIsOpen={setEventModalIsOpen}
          handleSave={handleSave}
          handleReset={handleReset}
        />
      }
    </div>
  )
}

export default EventsPage;