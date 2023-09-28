'use client';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NewFormSelect from './selects/NewFormSelect';
import CloseIcon from './icons/CloseIcon';
import AddIcon from './icons/AddIcon';
import DeleteIcon from './icons/DeleteIcon';

const NewQuestModal = ({ closeModal, question, setQuestion }) => {

    const [newQuest, setNewQuest] = useState({quest: '', q_queue: question.length + 1, type: '', answers: []});


    const handleAddAnswer = () => {
      setNewQuest({...newQuest, answers: [...newQuest.answers, { a_id: nanoid(), text: '', value: 0, queue: newQuest.answers.length + 1 }]});
    }

    const handleDeleteAnswer = (id) => {
      setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== id)]});
    }

    const handleAddQuest = () => {
      setQuestion([...question, {...newQuest, q_id: nanoid()}]);
      closeModal();
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50' onClick={closeModal}>
      <div className='w-[1000px] bg-neutral-100 dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center mb-5'>
          <h1 className='text-2xl'>Добавление нового вопроса</h1>
          <div onClick={closeModal}>
            <CloseIcon
              className='fill-neutral-700 dark:fill-white hover:cursor-pointer hover:fill-violet-500 dark:hover:fill-violet-500'
              width='30px'
              height='30px'
            />
          </div>
        </div>
        <div className='flex gap-20'>
          <div className='w-full flex flex-col gap-5'>
            <div className='flex justify-between items-center gap-3'>
              <h1 className='w-full'>Номер вопроса:</h1>
              <input
                className='block w-[60px] text-neutral-700 dark:text-white bg-white dark:bg-neutral-900 rounded-md shadow-md p-2'
                type='number'
                value={newQuest.q_queue}
                onChange={(e) => setNewQuest({...newQuest, q_queue: e.target.value})}
              />
            </div>
            <div className='w-full flex justify-between items-center gap-3'>
              <h1 className='w-full'>Тип вопроса:</h1>
              <NewFormSelect
                data={['Единственный выбор', 'Множественный выбор']}
                value={newQuest}
                setValue={setNewQuest}
                exist={'type'}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='py-2'>Текст вопроса:</h1>
              <textarea
                className='w-full bg-white dark:bg-neutral-900 text-neutral-700 dark:text-white resize-none outline-none rounded-md p-2 shadow-md'
                rows={5}
                cols={30}
                value={newQuest.quest}
                onChange={(e) => setNewQuest({...newQuest, quest: e.target.value})}
              />
            </div>
          </div>
          <div className='w-full h-auto'>
            <div className='h-full flex flex-col justify-between gap-3'>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                  <h1>Варианты ответов:</h1>
                  <button
                    className='text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md shadow-xl'
                    type='button'
                    onClick={handleAddAnswer}
                  >
                    Добавить
                  </button>
                </div>
                <ul className='flex flex-col gap-3'>
                  {newQuest.answers?.sort((a, b) => a.queue - b.queue).map((answer) =>
                  <li
                    className='flex items-center gap-5'
                    key={answer.a_id}
                  >
                    <div>
                      <input
                        className='cursor-pointer'
                        type='radio'
                        id={`radio-${answer.a_id}`}
                        name='answer-group'
                        onChange={(e) => setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id).map((arr) => ({...arr, value: 0})), { ...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], value: 1}]})}
                      />
                      <label htmlFor={`radio-${answer.a_id}`}></label>
                    </div>
                    <div className='w-full'>
                      <input
                        className='w-full bg-white dark:bg-neutral-900 rounded-md shadow-md outline-none px-3 py-2'
                        type='text'
                        value={newQuest.answers.filter((a) => a.a_id === answer.a_id)[0].text}
                        onChange={(e) => setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id), { ...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], text: e.target.value }]})}
                      />
                    </div>
                    <div>
                      <button
                        className='block bg-red-500 hover:bg-red-600 p-1 rounded-md shadow-xl'
                        onClick={() => handleDeleteAnswer(answer.a_id)}
                      >
                        <DeleteIcon className='fill-white' width='24px' height='24px' />
                      </button>
                    </div>
                  </li>)}
                </ul>
              </div>
              <div className='flex justify-end'>
                <button
                  className='text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md shadow-xl'
                  type='button'
                  onClick={handleAddQuest}
                >
                  Ок
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewQuestModal;