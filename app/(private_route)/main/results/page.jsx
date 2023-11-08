'use client';
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const ResultsPage = () => {

  const { data } = useSession();
  console.log(data);

  const [currentTab, setCurrentTab] = useState('common');
  const [resultsTests, setResultsTests] = useState([]);
  const [resultsCourses, setResultsCourses] = useState([]);

  const fetchResultsTests = async () => {
    try {
      const response = await fetch('/api/test-result');
      const testData = await response.json();
      setResultsTests(testData?.filter((test) => test?.userId === data?.user.id));
      console.log(testData);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchResultsCourses = async () => {
    try {
      const response = await fetch('/api/course-result');
      const courseData = await response.json();
      setResultsCourses(courseData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchResultsTests();
    fetchResultsCourses();
  }, [data]);

  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Мои результаты</h1>
      <div className="flex items-center gap-2 md:gap-5 py-5">
        <div className="relative z-30">
          <input
            className="absolute w-0 h-0 opacity-0"
            type="radio"
            id="common"
            name="results"
            onChange={() => setCurrentTab('common')}
            checked={currentTab === 'common'}
          />
          <label className={`text-sm md:text-base rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'common' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="common">Общие результаты</label>
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
          <label className={`text-sm md:text-base rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'tests' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="tests">Тесты</label>
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
          <label className={`text-sm md:text-base rounded-xl shadow-md px-2 py-1 cursor-pointer ${currentTab === 'courses' ? 'text-white dark:text-white bg-violet-500 dark:bg-violet-500' : 'dark:bg-neutral-800'}`} htmlFor="courses">Курсы</label>
        </div>
      </div>

      {currentTab === 'common' && <div className="text-sm md:text-base mt-5">Здесь будет общая статистика</div>}

      {currentTab === 'tests' &&
        <div>
          <ul className="flex flex-col gap-2 text-xs md:text-base mb-10">
            {resultsTests?.sort((a, b) => b.finishTime - a.finishTime).map((item) =>
              <li className="w-full flex justify-between bg-white dark:bg-neutral-800 rounded-md p-2" key={item._id}>
                <div className="grid grid-cols-[90px_1fr]">
                  <p>
                    {new Date(item.finishTime).getDate() < 10 ? `0${new Date(item.finishTime).getDate()}` : new Date(item.finishTime).getDate()}
                    .
                    {new Date(item.finishTime).getMonth() < 10 ? `0${new Date(item.finishTime).getMonth()}` : new Date(item.finishTime).getMonth()}
                    .
                    {new Date(item.finishTime).getFullYear()}
                  </p>
                  <p>{item.title}</p>
                </div>
                <div className="grid grid-cols-[25px_30px_70px] md:grid-cols-[50px_50px_100px] items-center gap-5 text-right">
                  <p>{item.trueAnswers}/{item.answers.length}</p>
                  <p>{item.result}%</p>
                  <p>{item.result >= 75 ? 'Пройден' : 'Не пройден'}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      }

      {currentTab === 'courses' &&
        <div>
          <ul className="flex flex-col gap-2 text-xs md:text-base mb-10">
            {resultsCourses?.map((item) =>
            <li className="w-full flex justify-between bg-white dark:bg-neutral-800 rounded-md p-2" key={item._id}>
              <div>{item.title}</div>
              <div className="flex gap-2">
                <div>{`${new Date(item.finishTime).getDate()}/${new Date(item.finishTime).getMonth()}/${new Date(item.finishTime).getFullYear()}`}</div>
                <div className="text-right">{item.result ? 'Пройден' : 'Не пройден'}</div>
              </div>
            </li>
            )}
          </ul>
        </div>
      }

    </div>
  )
}
  
export default ResultsPage;