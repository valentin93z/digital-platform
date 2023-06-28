'use client';
import { useState, useEffect } from "react";

const ResultsPage = () => {

  const [currentTab, setCurrentTab] = useState('common');
  const [resultsTests, setResultsTests] = useState([]);
  const [resultsCourses, setResultsCourses] = useState([]);

  const fetchResultsTests = async () => {
    try {
      const response = await fetch('/api/test-answers');
      const data = await response.json();
      setResultsTests(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchResultsTests();
  }, []);

  return (
    <div className="font-rubik px-20">
      <h1 className="text-4xl text-neutral-700 dark:text-white py-5">Мои результаты</h1>
      <div className="flex items-center gap-5 py-5">
        <div className="relative">
          <input
            className="absolute w-0 h-0 opacity-0"
            type="radio"
            id="common"
            name="results"
            onChange={() => setCurrentTab('common')}
            checked={currentTab === 'common'}
          />
          <label className={`rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'common' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="common">Общие результаты</label>
        </div>
        <div className="relative">
          <input
            className="absolute w-0 h-0 opacity-0"
            type="radio"
            id="tests"
            name="results"
            onChange={() => setCurrentTab('tests')}
            checked={currentTab === 'tests'}
          />
          <label className={`rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'tests' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="tests">Тесты</label>
        </div>
        <div className="relative">
          <input
            className="absolute w-0 h-0 opacity-0"
            type="radio"
            id="courses"
            name="results"
            onChange={() => setCurrentTab('courses')}
            checked={currentTab === 'courses'}
          />
          <label className={`rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'courses' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="courses">Курсы</label>
        </div>
      </div>

      {currentTab === 'common' && <div>Здесь будет общая статистика</div>}

      {currentTab === 'tests' &&
        <div>
          <ul className="flex flex-col gap-2">
            {resultsTests?.map((item) =>
              <li className="w-full flex justify-between dark:bg-neutral-800 rounded-md p-2" key={item._id}>
                <div>{item.title}</div>
                <div className="grid grid-cols-[50px_50px_100px] gap-5 text-right">
                  <p>{item.trueAnswers}/{item.answers.length}</p>
                  <p>{item.result}%</p>
                  <p>{item.result >= 75 ? 'Пройден' : 'Не пройден'}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      }

      {currentTab === 'courses' && <div>Здесь будут результаты курсов</div>}

    </div>
  )
}
  
export default ResultsPage;