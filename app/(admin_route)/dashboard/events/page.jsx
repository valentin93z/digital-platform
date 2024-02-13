'use client';
import { useState, useEffect } from 'react';
import Calendar from "@components/Calendar";
import EventList from '@components/EventList';

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
    members: '',
    link: '',
  });

  const fetchEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    setEvents(data);
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
          <Calendar newEvent={newEvent} setNewEvent={setNewEvent} />
        </div>
        <div className='bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-xl'>
          <EventList events={events} newEvent={newEvent} />
        </div>
      </div>
      <div className='bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-xl'>

      </div>
    </div>
  )
}

export default EventsPage;