const EventList = ({ events }) => {
  return (
    <div>
      <div className='flex justify-between items-end'>
        <h2 className='text-xl'>Запланированные мероприятия: {events.length}</h2>
        <p className='text-xl'>25 августа 2023г.</p>
      </div>
      <ul>
        {events.map((event) =>
          <li className="border-b-2 border-white border-solid p-3" key={event._id}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl">{event.hours}:{event.minutes}</p>
                <p>{event.day}.{event.month}.{event.year}</p>
              </div>
              <div>
                <p className="text-sm text-right">{event.duration}</p>
              </div>
              <div>
                <p>{event.title}</p>
              </div>
              <div>
                <p>Перейти</p>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default EventList;