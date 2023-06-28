'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkTestQuest } from '@utils/checkQuest';
import CircleLoader from '@components/loader/CircleLoader';

const TestRunPage = ({ params }) => {

  const [loading, setLoading] = useState(false);

  const [testData, setTestData] = useState({});
  const [questNum, setQuestNum] = useState(0);
  const [answers, setAnswers] = useState([]);

  const router = useRouter();

  const changeQuest = (action) => {
    if (action === 'inc' && questNum < testData.questions.length - 1) {
      setQuestNum(prev => prev + 1);
    }
    if (action === 'dec' && questNum > 0) {
      setQuestNum(prev => prev - 1);
    }
    return;
  }

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

  const handleSave = async () => {
    try {
      const response = await fetch('/api/test-answers', {
        method: 'POST',
        body: JSON.stringify({
          title: testData.title,
          forPosition: ['seller-pk'],
          answers: answers,
        })
      })
      const data = await response.json();

      router.push(`/main/tests/${data._id}/finish`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTestData();
  }, []);

  if (loading || !testData.questions) return <CircleLoader />

  return (
    <div className='w-full h-[calc(100vh-120px)] p-10'>
      <div className='w-full h-[calc(100vh-200px)] bg-white dark:bg-neutral-800 rounded-xl'>
        <div className='px-20 py-10'>
          <p className='text-xl'>{testData.questions[questNum].question}</p>
        </div>
        <div className='px-20 py-10'>
          {testData?.questions[questNum].answers.map((answer) =>
            <div className='flex items-center gap-3' key={answer.a_id}>
              <input
                className='w-5 h-5'
                type='radio'
                id={answer.a_id}
                name={testData.questions[questNum].q_id}
                value={answer.text}
                onChange={() => setAnswers(checkTestQuest ? [...answers.filter((i) => i.q_id !== testData.questions[questNum].q_id), { q_id: testData.questions[questNum].q_id, question: testData.questions[questNum].question, answerId: answer.a_id, answerText: answer.text }] : [...answers, { q_id: testData.questions[questNum].q_id, question: testData.questions[questNum].question, answerId: answer.a_id, answerText: answer.text }])}
                checked={answers.length !== 0 && answers?.filter((a) => a.answerId === answer.a_id)[0]?.answerId === answer.a_id}
              />
              <label className='text-xl' htmlFor={answer.a_id}>{answer.text}</label>
            </div>
          )}
        </div>
        <div className='flex gap-5 px-20 py-10'>
          <button
            className='text-white bg-violet-500 hover:bg-violet-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:hover:bg-neutral-300 dark:disabled:hover:bg-neutral-700 px-2 py-1 rounded-md'
            type='button'
            disabled={questNum <= 0 && true}
            onClick={() => changeQuest('dec')}
          >
            Пред.
          </button>
          <button
            className='text-white bg-violet-500 hover:bg-violet-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:hover:bg-neutral-300 dark:disabled:hover:bg-neutral-700 px-2 py-1 rounded-md'
            type='button'
            disabled={questNum >= testData.questions.length - 1 && true}
            onClick={() => changeQuest('inc')}
          >
            След.
          </button>
        </div>
        {answers.length === testData.questions.length &&
          <div className='px-20'>
            <button
              className='text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md'
              type='button'
              onClick={handleSave}
            >
              Завершить тест
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default TestRunPage;