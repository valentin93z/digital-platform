'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CircleLoader from '@components/loader/CircleLoader';

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

  if (loading) return <CircleLoader />

  return (
    <div className="font-rubik px-5 md:px-20">
      <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Тест: {testData.title}</h1>
      <div className='max-w-[1000px] flex flex-col gap-5'>
        <div className='flex flex-col gap-2 text-sm bg-white dark:bg-neutral-800 rounded-lg p-2'>
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
          <Link className='border border-violet-500 dark:border-violet-500 border-solid hover:text-violet-700 rounded-md px-2 py-1' href={`/main/tests`}>Отмена</Link>
          <Link className='bg-violet-500 hover:bg-violet-700 text-white rounded-md px-2 py-1' href={`/main/tests/${params.id}/run`}>Начать тест</Link>
        </div>
      </div>
    </div>
  )
}

export default TestPreviewPage;