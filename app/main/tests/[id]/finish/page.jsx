'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import CircleLoader from "@components/loader/CircleLoader";

const TestFinishPage = ({ params }) => {

  const [loading, setLoading] = useState(false);
  const [testData, setTestData] = useState({});

  const fetchTestData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/test-answers/${params.id}`);
      const data = await response.json();
      setTestData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTestData();
  }, []);

  if (loading || !testData) return <CircleLoader />

  return (
    <div className='w-full h-[calc(100vh-120px)] p-10'>
      <div className='w-full h-[calc(100vh-200px)] flex justify-center items-center bg-white dark:bg-neutral-800 rounded-xl'>
  
        {testData.result >= 75 &&
          <div className="flex flex-col items-center gap-5">
            <svg className="fill-green-500" xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 24 24" width="150px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/>
            </svg>
            <h1 className="text-3xl">Тест пройден</h1>
            <div>
              <div className="flex justify-between gap-10">
                <p>Результат:</p>
                <p>{testData.result}%</p>
              </div>
              <div className="flex justify-between gap-10">
                <p>Правильных ответов:</p>
                <p>{testData.trueAnswers}/{testData?.answers?.length}</p>
              </div>
            </div>
            <Link className="text-white bg-violet-500 hover:bg-violet-700 px-2 py-1 rounded-md" href='/main/results'>Выход</Link>
          </div>
        }

        {testData.result < 75 &&
          <div className="flex flex-col items-center gap-5">
            <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 24 24" width="150px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"/>
            </svg>
            <h1 className="text-3xl">Тест не пройден</h1>
            <div>
              <div className="flex justify-between gap-10">
                <p>Результат:</p>
                <p>{testData.result}%</p>
              </div>
              <div className="flex justify-between gap-10">
                <p>Правильных ответов:</p>
                <p>{testData.trueAnswers}/{testData?.answers?.length}</p>
              </div>
            </div>
            <Link className="text-white bg-violet-500 hover:bg-violet-700 px-2 py-1 rounded-md" href='/main/results'>Выход</Link>
          </div>
        }

      </div>
    </div>
  )
}

export default TestFinishPage;