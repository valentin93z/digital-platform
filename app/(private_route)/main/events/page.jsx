'use client';
import Calendar from "@components/Calendar";
import EventList from "@components/EventList";
import { useEffect, useState } from "react";

const EventsPage = () => {

  const [events, setEvents] = useState([]);

  const [currentDay, setCurrentDay] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
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
      <div className="w-full font-rubik px-5 md:px-20 unselectable">
        <div className="mb-10">
          <h1 className="text-3xl text-neutral-700 dark:text-white">Мероприятия</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 mb-10">
          <div className='bg-white dark:bg-neutral-800 shadow-xl p-10 rounded-xl'>
            <Calendar newEvent={currentDay} setNewEvent={setCurrentDay} events={events} />
          </div>
          <div className='bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-xl'>
            <EventList events={events} newEvent={currentDay} />
          </div>
        </div>
      </div>
    )
  }
  
export default EventsPage;