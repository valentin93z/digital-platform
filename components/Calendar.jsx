'use client';
import { getDaysOfMonth } from '@utils/getDaysOfMonth';
import { useState, useEffect } from 'react';

const Calendar = ({ newEvent, setNewEvent, events }) => {

  const [date, setDate] = useState(new Date().getTime());
  const [days, setDays] = useState([]);

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

  console.log();

  return (
    <div className='font-rubik text-neutral-700 dark:text-white w-full h-full'>
      <div className='flex justify-between items-center mb-5'>
        <button className='text-3xl font-light cursor-pointer pl-[40px] hover:text-violet-500' onClick={decrementMonth}>{'<'}</button>
        <p className='text-xl'>{`${monthName} ${year}г.`}</p>
        <button className='text-3xl font-light cursor-pointer pr-[40px] hover:text-violet-500' onClick={incrementMonth}>{'>'}</button>
      </div>
      <div>
        <ul className='grid grid-cols-7'>
          {daysNames.map((day) =>
            <li className='text-xl text-center p-[10px]' key={day}>{day}</li>
          )}
        </ul>
      </div>
      <div>
        <ul className='grid grid-cols-7'>
          {days.map((day) =>
            <li
              className='relative border-2 border-transparent hover:border-solid hover:border-violet-500 hover:shadow-lg transition-colors rounded-md overflow-hidden'
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
                className='block relative text-center w-full h-full cursor-pointer p-[10px] calendar_day_label transition-colors'
                htmlFor={`${day.dayOfMonth}_${day.month}_${day.year}`}
              >
                {events.filter((event) => event.day === day.dayOfMonth && event.month === day.month + 1 && event.year === day.year).length > 0 ?
                  <div className='absolute top-[2px] right-[2px] w-[10px] h-[10px] rounded-full bg-green-400 shadow-sm'></div> :
                  <div className='absolute'></div>
                }
                <div className='text-xl'>{day.dayOfMonth}</div>
              </label>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}


export default Calendar;