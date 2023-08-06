'use client';
import { getDaysOfMonth } from '@utils/getDaysOfMonth';
import { useState, useEffect } from 'react';

const Calendar = () => {

  const [date, setDate] = useState(new Date().getTime());
  const [days, setDays] = useState([]);

  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    hours: null,
    minutes: null,
    title: '',
    type: '',
    description: '',
    duration: '',
    members: '',
    link: '',
  });

  const daysNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const monthNames = { 0: 'Январь', 1: 'Февраль', 2: 'Март', 3: 'Апрель', 4: 'Май', 5: 'Июнь', 6: 'Июль', 7: 'Август', 8: 'Сентябрь', 9: 'Октябрь', 10: 'Ноябрь', 11: 'Декабрь' };

  const year = new Date(date).getFullYear();
  const monthName = monthNames[new Date(date).getMonth()];

  const incrementMonth = () => {
    const d = new Date(date);
    setDate(d.setMonth(d.getMonth() + 1));
  }

  const decrementMonth = () => {
    const d = new Date(date);
    setDate(d.setMonth(d.getMonth() - 1));
  }

  const setEventDate = (e) => {
    const value = JSON.parse(e.target.value);
    setNewEvent({...newEvent, year: value.year, month: value.month, day: value.dayOfMonth});
  }

  
  useEffect(() => {
    setDays(getDaysOfMonth(year, new Date(date).getMonth()));
  }, [date]);


  return (
    <div className='font-rubik max-w-[600px]'>
      <div className='flex justify-between items-center'>
        <button className='text-3xl font-light cursor-pointer' onClick={decrementMonth}>{'<'}</button>
        <p>{`${monthName} ${year}г.`}</p>
        <button className='text-3xl font-light cursor-pointer' onClick={incrementMonth}>{'>'}</button>
      </div>
      <div>
        <ul className='grid grid-cols-7'>
          {daysNames.map((day) =>
            <li className='text-center p-[10px]' key={day}>{day}</li>
          )}
        </ul>
      </div>
      <div>
        <ul className='grid grid-cols-7'>
          {days.map((day) =>
            <li
              className='relative border-2 border-transparent hover:border-solid hover:border-violet-500 rounded-md overflow-hidden'
              style={ day.dayOfMonth === 1 ? {gridColumn: day.dayOfWeek} : {}}
              key={`${day.dayOfMonth}_${day.month}_${day.year}`}
            >
              <input
                className='hidden calendar_day_radio'
                type="radio"
                name="dayOfMonth"
                id={`${day.dayOfMonth}_${day.month}_${day.year}`}
                value={JSON.stringify(day)}
                onChange={setEventDate}
                checked={day.year === newEvent.year && day.month === newEvent.month && day.dayOfMonth === newEvent.day}
              />
              <label
                className='block text-center w-full h-full cursor-pointer p-[10px] calendar_day_label'
                htmlFor={`${day.dayOfMonth}_${day.month}_${day.year}`}
              >
                <div>{day.dayOfMonth}</div>
              </label>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Calendar;