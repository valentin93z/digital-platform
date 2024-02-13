'use client';
import { useState } from "react";
import { parsePosition, parseRole } from "@utils/parseUserData";


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
        className='max-w-full sm:max-w-5xl max-h-[100vh] sm:max-h-[90vh] text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 rounded-md sm:rounded-2xl opacity-100 p-5 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-5 mb-10">
          <div className="mb-3">
            <p className="text-2xl">{existUser.lastname} {existUser.firstname} {existUser.middlename}</p>
            <p className="text-right">{parsePosition(existUser.position)}</p>
          </div>
          <div className="flex flex-col gap-2">
            {existUser.direction &&
              <p className="w-full flex justify-between items-center">
                <span>Направление:</span>
                <span>{existUser.direction}</span>
              </p>
            }
            {existUser.direction &&
              <p className="w-full flex justify-between items-center">
                <span>Сектор:</span>
                <span>{existUser.sector}</span>
              </p>
            }
            {existUser.direction &&
              <p className="w-full flex justify-between items-center">
                <span>Торговая точка:</span>
                <span>{existUser.store}</span>
              </p>
            }
          </div>
          <div className="flex flex-col gap-2">
            <p className="w-full flex justify-between items-center">
              <span>Номер телефона:</span>
              <span>{existUser.phone}</span>
            </p>
            <p className="w-full flex justify-between items-center">
              <span>Email:</span>
              <span>{existUser.email}</span>
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Курсы</h1>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white py-1 px-2 rounded-md shadow-md hover:shadow-lg"
              onClick={() => handleAssign('course')}
            >
              Назначить
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${courseTab === 'assigned' ? 'bg-white dark:bg-neutral-900 rounded-t-md shadow-md' : ''}`}
                  onClick={() => setCourseTab('assigned')}
                >
                  Назначенные
                </h2>
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${courseTab === 'completed' ? 'bg-white dark:bg-neutral-900 rounded-t-md shadow-md' : ''}`}
                  onClick={() => setCourseTab('completed')}
                >
                  Пройденные
                </h2>
              </div>
              {courseTab === 'completed' ?
                <ul className={`relative bg-white dark:bg-neutral-900 p-2 rounded-b-md shadow-md ${courseTab === 'completed' ? 'rounded-tl-md' : ''}`}>
                  {existUser.courses.completed.length === 0
                    ? <p>Нет пройденных курсов</p>
                    : existUser.courses.completed.map((course, index) =>
                      <li>Курс {index + 1} пройден</li>)
                  }
                </ul>
              :
                <ul className={`relative bg-white dark:bg-neutral-900 p-2 rounded-b-md shadow-md ${courseTab === 'assigned' ? 'rounded-tr-md' : ''}`}>
                  {existUser.courses.assigned.length === 0
                    ? <p>Нет назначенных курсов</p>
                    : existUser.courses.assigned.map((course, index) =>
                      <li>Курс {index + 1} назначен</li>)
                  }
                </ul>
              }
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Тесты</h1>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white py-1 px-2 rounded-md shadow-md hover:shadow-lg"
              onClick={() => handleAssign('test')}
            >
              Назначить
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${testTab === 'assigned' ? 'bg-white dark:bg-neutral-900 rounded-t-md shadow-md' : ''}`}
                  onClick={() => setTestTab('assigned')}
                >
                  Назначенные
                </h2>
                <h2
                  className={`w-full text-center cursor-pointer p-2 ${testTab === 'completed' ? 'bg-white dark:bg-neutral-900 rounded-t-md shadow-md' : ''}`}
                  onClick={() => setTestTab('completed')}
                >
                  Пройденные
                </h2>
              </div>
              {testTab === 'completed' ?
                <ul className={`relative bg-white dark:bg-neutral-900 p-2 rounded-b-md shadow-md ${testTab === 'completed' ? 'rounded-tl-md' : ''}`}>
                  {existUser.tests.completed.length === 0
                    ? <p>Нет пройденных тестов</p>
                    : existUser.tests.completed.map((course, index) =>
                      <li>Тест {index + 1} пройден</li>)
                  }
                </ul>
              :
                <ul className={`relative bg-white dark:bg-neutral-900 p-2 rounded-b-md shadow-md ${testTab === 'assigned' ? 'rounded-tr-md' : ''}`}>
                  {existUser.tests.assigned.length === 0
                    ? <p>Нет назначенных тестов</p>
                    : existUser.tests.assigned.map((course, index) =>
                      <li>Тест {index + 1} назначен</li>)
                  }
                </ul>
              }
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-neutral-400 hover:bg-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-white shadow-md hover:shadow-lg rounded-md p-2"
            type="button"
            onClick={() => setModalIsOpen(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
      }
    </div>
  )
}

export default UserMoreModal;