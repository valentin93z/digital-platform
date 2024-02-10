'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BarsLoader from '@components/loader/BarsLoader';

const TestPreviewPage = ({ params }) => {

  const [testData, setTestData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchTestData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/tests/${params.id}`);
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

  if (loading) return <BarsLoader />

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <h1 className="text-xl md:text-4xl text-neutral-700 dark:text-white mt-10 sm:mt-0 mb-5 sm:mb-0 sm:py-8">Тест: {testData.title}</h1>
      <div className='w-full flex flex-col gap-5'>
        <div className='flex flex-col gap-2 sm:gap-5 sm:text-lg bg-white dark:bg-neutral-800 rounded-lg shadow-md p-3 sm:p-8'>
          <div className='flex justify-between'>
            <p>Количество вопросов:</p>
            <p>{testData?.questions?.length}</p>
          </div>
          <div className='flex justify-between'>
            <p>Минимальный порог:</p>
            <p>{testData.minPercentage}%</p>
          </div>
          <div className='flex justify-between'>
            <p>Количество попыток:</p>
            <p>{testData.attempts}</p>
          </div>
        </div>
        <div className='flex justify-end gap-5'>
          <Link className='border border-violet-500 dark:border-violet-500 border-solid hover:text-violet-700 rounded-md shadow-md px-2 py-1' href={`/main/tests`}>Отмена</Link>
          <Link className='bg-violet-500 hover:bg-violet-700 text-white rounded-md shadow-md px-2 py-1' href={`/main/tests/${params.id}/run`}>Начать тест</Link>
        </div>
      </div>
    </div>
  )
}

export default TestPreviewPage;