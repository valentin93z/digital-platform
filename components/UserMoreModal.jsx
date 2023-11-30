'use client';
import { useState } from "react";


const UserMoreModal = ({ setModalIsOpen, existUser }) => {

  const [courseTab, setCourseTab] = useState('completed');
  const [testTab, setTestTab] = useState('completed');

  const [assignModal, setAssignModal] = useState(false);
  const [assignModalType, setAssignModalType] =useState('');

  const [allTestList, setAllTestList] = useState([]);
  const [allCourseList, setAllCourseList] = useState([]);


  console.log(existUser);

  const handleAssign = async (type) => {
    if (type === 'test') {
      setAssignModalType('test');
      const testResponse = await fetch('/api/tests');
      const allTestData = await testResponse.json();
      setAllTestList(allTestData);
    }
    if (type === 'course') {
      setAssignModalType('course');
      const courseResponse = await fetch('/api/course');
      const allCourseData = await courseResponse.json();
      setAllCourseList(allCourseData);
    }
    setAssignModal(true);
  }

  const handleConfirm = async (type, testId, userId) => {
    if (confirm(`Назначить ${type}?`)) {

      setAssignModal(false);
    }
  }

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-[60]"
      onClick={() => setModalIsOpen(false)}
    >
      {assignModal
      ?
        <div
          className='max-w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll'
          onClick={(e) => e.stopPropagation()}
        >

          {assignModalType === 'test' &&
            <ul className="flex flex-col gap-3">
              {allTestList.map((test) =>
                <li
                  className="hover:text-violet-500 cursor-pointer p-2"
                  onClick={() => handleConfirm('тест', test._id, existUser._id)}
                >
                  {test.title}
                </li>)}
            </ul>
          }

          {assignModalType === 'course' &&
            <ul className="flex flex-col gap-3">
              {allCourseList.map((course) =>
                <li
                  className="hover:text-violet-500 cursor-pointer p-2"
                  onClick={() => handleConfirm('курс', course._id, existUser._id)}
                >
                  {course.title}
                </li>)}
            </ul>
          }

        </div>
      :
      <div
        className='max-w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-10">
          <p className="text-2xl mb-3">{existUser.lastname} {existUser.firstname} {existUser.middlename}</p>
          <p>Email: {existUser.email}</p>
          <p>Номер телефона: {existUser.phone}</p>
        </div>
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Курсы</h1>
            <button
              className="bg-violet-500 py-1 px-2 rounded-md"
              onClick={() => handleAssign('course')}
            >
              Назначить
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${courseTab === 'assigned' ? 'bg-neutral-900 rounded-t-md' : ''}`}
                  onClick={() => setCourseTab('assigned')}
                >
                  Назначенные
                </h2>
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${courseTab === 'completed' ? 'bg-neutral-900 rounded-t-md' : ''}`}
                  onClick={() => setCourseTab('completed')}
                >
                  Пройденные
                </h2>
              </div>
              {courseTab === 'completed' ?
                <ul className={`bg-neutral-900 p-2 rounded-b-md ${courseTab === 'completed' ? 'rounded-tl-md' : ''}`}>
                  completed
                  {existUser.courses.completed.map((course) =>
                    <li>course 1 completed</li>
                  )}
                </ul>
              :
                <ul className={`bg-neutral-900 p-2 rounded-b-md ${courseTab === 'assigned' ? 'rounded-tr-md' : ''}`}>
                  assigned
                  {existUser.courses.assigned.map((course) =>
                    <li>course 2 assigned</li>
                  )}
                </ul>
              }
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Тесты</h1>
            <button
              className="bg-violet-500 py-1 px-2 rounded-md"
              onClick={() => handleAssign('test')}
            >
              Назначить
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${testTab === 'assigned' ? 'bg-neutral-900 rounded-t-md' : ''}`}
                  onClick={() => setTestTab('assigned')}
                >
                  Назначенные
                </h2>
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${testTab === 'completed' ? 'bg-neutral-900 rounded-t-md' : ''}`}
                  onClick={() => setTestTab('completed')}
                >
                  Пройденные
                </h2>
              </div>
              {testTab === 'completed' ?
                <ul className={`bg-neutral-900 p-2 rounded-b-md ${testTab === 'completed' ? 'rounded-tl-md' : ''}`}>
                  completed
                  {existUser.tests.completed.map((test) =>
                    <li>test 1 completed</li>
                  )}
                </ul>
              :
                <ul className={`bg-neutral-900 p-2 rounded-b-md ${testTab === 'assigned' ? 'rounded-tr-md' : ''}`}>
                  assigned
                  {existUser.tests.assigned.map((test) =>
                    <li>test 2 assigned</li>
                  )}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default UserMoreModal;