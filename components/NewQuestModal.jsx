'use client';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NewFormSelect from './selects/NewFormSelect';

const NewQuestModal = ({ closeModal }) => {

    const [newQuest, setNewQuest] = useState({quest: '', type: '', answers: []});


    const handleAddAnswer = () => {
      setNewQuest({...newQuest, answers: [...newQuest.answers, { a_id: nanoid(), text: '', value: 0, queue: newQuest.answers.length + 1 }]});
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50' onClick={closeModal}>
      <div className='w-[400px] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5' onClick={(e) => e.stopPropagation()}>
        <h1>Добавление нового вопроса</h1>
        <div>
          <p>Тип вопроса:</p>
          {/* <NewFormSelect
            data={['Единственный выбор', 'Множественный выбор']}
            value={newQuest.type}
            setValue={setNewQuest}
            exist={'type'}
            /> */}
        </div>
        <div className='flex flex-col gap-5 mt-10'>
          <h1>Текст вопроса:</h1>
          <textarea
            className='w-full resize-none outline-none rounded-md p-2'
            rows={5}
            cols={30}
            value={newQuest.quest}
            onChange={(e) => setNewQuest({...newQuest, quest: e.target.value})}
          />
        </div>
        <div className='flex flex-col gap-5 mt-10'>
          <h1>Варианты ответов:</h1>
          <ul className='flex flex-col gap-5'>
            {newQuest.answers.sort((a, b) => a.queue - b.queue).map((answer) =>
            <li
              className='flex items-center gap-5'
              key={answer.a_id}
            >
              <div>
                <input
                  type='radio'
                  id={`radio-${answer.a_id}`}
                  name='answer-group'
                  value={answer.a_id}
                  onChange={(e) => setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id), { ...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], value: e.target.value}]})}
                />
                <label htmlFor={`radio-${answer.a_id}`}></label>
              </div>
              <div className='w-full'>
                <input
                  className='w-full rounded-md outline-none px-3 py-2'
                  type='text'
                  value={newQuest.answers.filter((a) => a.a_id === answer.a_id)[0].text}
                  onChange={(e) => setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id), { ...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], text: e.target.value }]})}
                />
              </div>
            </li>)}
          </ul>
          <button
            type='button'
            onClick={handleAddAnswer}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewQuestModal;