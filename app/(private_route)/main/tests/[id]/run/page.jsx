'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAnswerVariants, checkTestQuest } from '@utils/checkQuest';
import { useSession } from 'next-auth/react';
import BarsLoader from '@components/loader/BarsLoader';
import DragHableIcon from '@components/icons/DragHableIcon';
import { shuffleArray } from '@utils/shuffleArray';

const TestRunPage = ({ params }) => {

  const { status, data, update } = useSession();
  const [loading, setLoading] = useState(false);

  const [testData, setTestData] = useState({});
  const [questNum, setQuestNum] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(0);

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
      // setTestData({...data,
      //   questions: [
      //     ...data.questions.filter((q) => q.type !== 'Порядок'),
      //     ...data.questions.filter((q) => q.type === 'Порядок').map((q) => {
      //       return {...q, answers: shuffleArray(q.answers)}
      //     })],
      // });
      // setTestData({...data,
      //   question: [
      //     ...data.questions.filter((q) => q.type !== 'Порядок'),
      //     ...data.questions.filter((q) => q.type === 'Порядок').map((q) => {
      //       return {...q, answers: answers.map((a) => {})}
      //       ///////
      //     })
      //   ]});

      setAnswers([
        ...answers,
        ...data.questions.filter((q) => q.type === 'Порядок').map((q) => ({
          type: q.type,
          q_id: q.q_id,
          quest: q.quest,
          answers: shuffleArray(q.answers)
        }))
      ]);
      // setAnswers([answers.map((q) => ({...q, answers: q.answers.map((a, index) => ({...a, order: index}))}))]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/test-result`, {
        method: 'POST',
        body: JSON.stringify({
          test_id: params.id,
          title: testData.title,
          forPosition: ['seller-pk'],
          answers: answers,
          userId: String(data?.user?.id),
          startTime: startTime,
          finishTime: Date.now(),
        })
      })
      const answerData = await response.json();
      
      console.log('Test is assigned', data.user.tests.assigned.filter((a) => a.assign_test_id === params.id)?.length >= 1);
      if (data.user.tests.assigned.filter((a) => a.assign_test_id === params.id)?.length >= 1) {
        await fetch(`/api/users/${data.user.id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            tests: {
              assigned: [...data.user.tests.assigned.filter((test) => test.assign_test_id !== testData._id)],
              completed: [...data.user.tests.completed, testData._id],
            }
          })
        });
        await update({
          ...data,
          user: {
            ...data?.user,
            tests: {
              assigned: [...data.user.tests.assigned.filter((test) => test.assign_test_id !== testData._id)],
              completed: [...data.user.tests.completed, testData._id],
            }
          }
        });
      }

      router.push(`/main/tests/${answerData._id}/finish`);
    } catch (error) {
      console.log(error);
    }
  }



// Drag & Drop

const [currentItem, setCurrentItem] = useState(null);

const dragStartHandler = (e, item) => {
  setCurrentItem(item);
  console.log(item);
}

const dragEndHandler = (e) => {
  ///
  e.target.style.background = '';
}

const dragOverHandler = (e) => {
  e.preventDefault();
  ///
  e.target.style.background = '';
}

const dropHandler = (e, item, quest_id) => {
  e.preventDefault();
  // setAnswers(answers.filter((answer) => answer.q_id === quest_id).length >= 1
  //   ? [...answers.filter((a) => a.q_id !== quest_id), answers.filter((a) => a.q_id === quest_id)[0].answers.map((i) => {
  //     if (i.a_id === item.a_id) {
  //       return {...i, order: currentItem.order}
  //     }
  //     if (i.a_id === currentItem.a_id) {
  //       return {...i, order: item.order}
  //     }
  //     return i;
  //   })]
  //   : [...answers, answers.filter((a) => a.q_id === quest_id)[0].answers.map((i) => {
  //     if (i.a_id === item.a_id) {
  //       return {...i, order: currentItem.order}
  //     }
  //     if (i.a_id === currentItem.a_id) {
  //       return {...i, order: item.order}
  //     }
  //     return i;
  // })]);
  // setNewQuest({...newQuest, answers: [...newQuest.answers.map((i) => {
  //   if (i.a_id === item.a_id) {
  //     return {...i, order: currentItem.order}
  //   }
  //   if (i.a_id === currentItem.a_id) {
  //     return {...i, order: item.order}
  //   }
  //   return i;
  // })]});
  ///
  e.target.style.background = '';
}

//////////


  useEffect(() => {
    setStartTime(Date.now());
    fetchTestData();
  }, []);

  if (loading || !testData.questions) return <BarsLoader />

  return (
    <div className='w-full h-[calc(100vh-120px)] p-5 md:p-10 unselectable'>
      <div className='max-w-[800px] bg-white dark:bg-neutral-800 rounded-xl mx-auto shadow-lg'>
        <div className='p-5 md:px-20 md:py-10'>
          <p className='sm:text-xl'>{testData.questions[questNum].quest}</p>
        </div>
        <div className='p-5 md:px-20 md:py-5 flex flex-col gap-5'>

          {testData.questions[questNum].type === 'Единственный выбор' &&
            testData?.questions[questNum].answers.map((answer) =>
              <div className='flex items-center gap-3 px-3 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white rounded-md shadow-md' key={answer.a_id}>
                <input
                  className='w-5 h-5 accent-violet-500'
                  type='radio'
                  id={answer.a_id}
                  name={testData.questions[questNum].q_id}
                  value={answer.text}
                  onChange={() => setAnswers(checkTestQuest ? [...answers.filter((i) => i.q_id !== testData.questions[questNum].q_id), { type: testData.questions[questNum].type, q_id: testData.questions[questNum].q_id, quest: testData.questions[questNum].quest, answerId: answer.a_id, answerText: answer.text }] : [...answers, { type: testData.questions[questNum].type, q_id: testData.questions[questNum].q_id, quest: testData.questions[questNum].quest, answerId: answer.a_id, answerText: answer.text }])}
                  checked={answers.length !== 0 && answers?.filter((a) => a.answerId === answer.a_id)[0]?.answerId === answer.a_id}
                />
                <label className='sm:text-xl w-full py-3 cursor-pointer' htmlFor={answer.a_id}>{answer.text}</label>
              </div>
            )
          }

          {testData.questions[questNum].type === 'Множественный выбор' &&
            testData?.questions[questNum].answers.map((answer) =>
              <div className='flex items-center gap-3 px-3 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white rounded-md shadow-md' key={answer.a_id}>
                <input
                  className='w-5 h-5 accent-violet-500'
                  type='checkbox'
                  id={answer.a_id}
                  name={testData.questions[questNum].q_id}
                  value={answer.text}
                  onChange={() => setAnswers(
                    checkTestQuest(answers, testData.questions[questNum].q_id)
                      ? [...answers.filter((a) => a.q_id !== testData.questions[questNum].q_id), {
                          type: testData.questions[questNum].type,
                          q_id: testData.questions[questNum].q_id,
                          quest: testData.questions[questNum].quest,
                          variants:
                            checkAnswerVariants(answers.filter((a) => a.q_id === testData.questions[questNum].q_id)[0].variants, answer.a_id)
                              ? [...answers.filter((a) => a.q_id === testData.questions[questNum].q_id)[0].variants.filter((v) => v.answerId !== answer.a_id)]
                              : [...answers.filter((a) => a.q_id === testData.questions[questNum].q_id)[0].variants, { answerId: answer.a_id, answerText: answer.text }]
                        }]
                      : [...answers, {
                          type: testData.questions[questNum].type,
                          q_id: testData.questions[questNum].q_id,
                          quest: testData.questions[questNum].quest,
                          variants: [{ answerId: answer.a_id, answerText: answer.text }]
                        }]
                  )}
                  checked={answers.length !== 0 && checkAnswerVariants(answers?.filter((a) => a.q_id === testData.questions[questNum].q_id)[0]?.variants, answer.a_id)}
                />
                <label className='sm:text-xl w-full py-3 cursor-pointer' htmlFor={answer.a_id}>{answer.text}</label>
              </div>
            )
          }

          {testData.questions[questNum].type === 'Порядок' &&

            answers.filter((answer) => answer.q_id === testData.questions[questNum].q_id)[0]?.answers.map((answer) =>
            <div
              key={answer.a_id}
              className='flex items-center gap-3 px-3 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white rounded-md shadow-md cursor-grab'
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, answer)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, answer, testData.questions[questNum].q_id)}
            >
              <DragHableIcon
                className='fill-neutral-700 dark:fill-white cursor-grab'
                width='24px'
                height='24px'
              />
              <p>{answer.text}</p>
            </div>
            )
            // testData?.questions[questNum].answers.map((answer, index) =>
            //   <div
            //     key={answer.a_id}
            //     className='flex items-center gap-3 px-3 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white rounded-md shadow-md cursor-grab'
            //     draggable={true}
            //     onDragStart={(e) => dragStartHandler(e, index, answer)}
            //     onDragLeave={(e) => dragEndHandler(e)}
            //     onDragEnd={(e) => dragEndHandler(e)}
            //     onDragOver={(e) => dragOverHandler(e)}
            //     onDrop={(e) => dropHandler(e, answer)}
            //   >
            //     <DragHableIcon
            //       className='fill-neutral-700 dark:fill-white cursor-grab'
            //       width='24px'
            //       height='24px'
            //     />
            //     <p>{answer.text}</p>
            //   </div>
            // )
          }

        </div>


        <div className='flex justify-between p-5 md:px-20 md:py-10'>

          <div className='w-full'></div>

          <div className='w-full flex justify-center gap-5'>
            <button
              className='text-white bg-violet-500 hover:bg-violet-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:hover:bg-neutral-300 dark:disabled:hover:bg-neutral-700 px-2 py-1 rounded-md shadow-md'
              type='button'
              disabled={questNum <= 0 && true}
              onClick={() => changeQuest('dec')}
            >
              Пред.
            </button>
            <button
              className='text-white bg-violet-500 hover:bg-violet-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:hover:bg-neutral-300 dark:disabled:hover:bg-neutral-700 px-2 py-1 rounded-md shadow-md'
              type='button'
              disabled={questNum >= testData.questions.length - 1 && true}
              onClick={() => changeQuest('inc')}
            >
              След.
            </button>
          </div>

          <div className='w-full flex justify-end'>
            {answers.length === testData.questions.length &&
                <button
                  className='hidden sm:block text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md shadow-md'
                  type='button'
                  onClick={handleSave}
                >
                  Завершить тест
                </button>
            }
          </div>
        </div>
        
        <div className='sm:hidden w-full flex justify-center'>
            {answers.length === testData.questions.length &&
                <button
                  className='text-white bg-green-500 hover:bg-green-600 px-2 py-1 mb-5 rounded-md shadow-md'
                  type='button'
                  onClick={handleSave}
                >
                  Завершить тест
                </button>
            }
          </div>

      </div>
    </div>
  )
}

export default TestRunPage;