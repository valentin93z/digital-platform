
const UserMoreModal = ({ setModalIsOpen, existUser }) => {

  console.log(existUser);

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-[60]"
      onClick={() => setModalIsOpen(false)}
    >
      <div
        className='max-w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p>{existUser.lastname} {existUser.firstname} {existUser.middlename}</p>
          <p>Email: {existUser.email}</p>
          <p>Номер телефона: {existUser.phone}</p>
        </div>
        <div>
          <h1>Курсы</h1>
          <div>
            <div>
              <h2>Назначенные</h2>
              <ul>
                {existUser.courses.assigned.map((course) =>
                  <li></li>
                )}
              </ul>
            </div>
            <div>
              <h2>Пройденные</h2>
              <ul>
                {existUser.courses.completed.map((course) =>
                  <li></li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1>Тесты</h1>
          <div>
            <div>
              <h2>Назначенные</h2>
              <ul>
                {existUser.tests.assigned.map((test) =>
                  <li></li>
                )}
              </ul>
            </div>
            <div>
              <h2>Пройденные</h2>
              <ul>
                {existUser.tests.completed.map((test) =>
                  <li></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMoreModal;