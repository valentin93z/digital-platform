'use client';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NewFormSelect from './selects/NewFormSelect';
import CloseIcon from './icons/CloseIcon';
import DeleteIcon from './icons/DeleteIcon';
import DragHableIcon from './icons/DragHableIcon';

const NewQuestModal = ({ closeModal, question, setQuestion }) => {

    const [newQuest, setNewQuest] = useState({quest: '', q_queue: question.length + 1, type: 'Единственный выбор', answers: []});


    const handleAddAnswer = () => {
      setNewQuest({...newQuest, answers: [...newQuest.answers, { a_id: nanoid(), text: '', value: 0, queue: newQuest.answers.length + 1 }]});
    }

    const handleDeleteAnswer = (id) => {
      setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== id)]});
    }

    const handlerAddOrderAnswer = () => {
      setNewQuest({...newQuest, answers: [...newQuest.answers, { a_id: nanoid(), text: '', order: newQuest.answers.length + 1 }]});
    }

    const handleAddQuest = () => {
      setQuestion([...question, {...newQuest, q_id: nanoid()}]);
      closeModal();
    }

    // Drag & Drop

    const [currentItem, setCurrentItem] = useState(null);

    const dragStartHandler = (e, item) => {
      setCurrentItem(item);
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

    const dropHandler = (e, item) => {
      e.preventDefault();
      setNewQuest({...newQuest, answers: [...newQuest.answers.map((i) => {
        if (i.a_id === item.a_id) {
          return {...i, order: currentItem.order}
        }
        if (i.a_id === currentItem.a_id) {
          return {...i, order: item.order}
        }
        return i;
      })]});
      ///
      e.target.style.background = '';
    }


    useEffect(() => {
      setNewQuest({...newQuest, answers: []});
    }, [newQuest.type]);

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50 unselectable' onClick={closeModal}>
      <div className='relative max-w-[600px] h-[100vh] sm:h-[95vh] bg-neutral-100 dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll sm:overflow-auto' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center gap-10 mb-5'>
          <h1 className='text-2xl'>Добавление нового вопроса</h1>
          <div onClick={closeModal}>
            <CloseIcon
              className='fill-neutral-700 dark:fill-white hover:cursor-pointer hover:fill-violet-500 dark:hover:fill-violet-500'
              width='30px'
              height='30px'
            />
          </div>
        </div>
        <div className='flex flex-col gap-10'>
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
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3'>
              <h1 className='w-full'>Тип вопроса:</h1>
              <NewFormSelect
                data={['Единственный выбор', 'Множественный выбор', 'Открытый вопрос', 'Соотнесение', 'Порядок', 'Прикрепление файла', 'Шкала от 1 до 10', 'Пропущенное слово']}
                value={newQuest}
                setValue={setNewQuest}
                exist={'type'}
                onChange={(e) => setNewQuest({...newQuest, type: e.target.value})}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='py-2'>Текст вопроса:</h1>
              <textarea
                className='w-full bg-white dark:bg-neutral-900 text-neutral-700 dark:text-white resize-none outline-none rounded-md p-2 shadow-md'
                rows={3}
                cols={30}
                value={newQuest.quest}
                onChange={(e) => setNewQuest({...newQuest, quest: e.target.value})}
              />
            </div>
          </div>


          <div className='w-full h-auto'>

            {/* Добавление вопроса с единственным выбором правильного ответа */}
            {newQuest.type === 'Единственный выбор' &&
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
                  <ul className={`flex flex-col gap-3 sm:max-h-[250px] sm:overflow-y-scroll py-3 ${newQuest.answers.length > 4 ? 'sm:pr-5' : ''}`}>
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
            }

            {/* Добавление вопроса с множественным выбором правильных ответов */}
            {newQuest.type === 'Множественный выбор' &&
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
                  <ul className={`flex flex-col gap-3 sm:max-h-[250px] sm:overflow-y-scroll py-3 ${newQuest.answers.length > 4 ? 'sm:pr-5' : ''}`}>
                    {newQuest.answers?.sort((a, b) => a.queue - b.queue).map((answer) =>
                    <li
                      className='flex items-center gap-5'
                      key={answer.a_id}
                    >
                      <div>
                        <input
                          className='cursor-pointer'
                          type='checkbox'
                          id={`checkbox-${answer.a_id}`}
                          name='checkbox-answer-group'

                          // Добавление нескольких правильных ответов
                          onChange={(e) => setNewQuest(
                            answer.value === 1
                              ? ({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id), {...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], value: 0}]})
                              : ({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id), {...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], value: 1}]})
                          )}
                          //////////////////////
                        />
                        <label htmlFor={`checkbox-${answer.a_id}`}></label>
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
                          type='button'
                          onClick={() => handleDeleteAnswer(answer.a_id)}
                        >
                          <DeleteIcon className='fill-white' width='24px' height='24px' />
                        </button>
                      </div>
                    </li>)}
                  </ul>
                </div>
            }

            {/* Добавление вопроса на порядок элементов */}
            {newQuest.type === 'Порядок' &&
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                    <h1>Элементы списка:</h1>
                    <button
                      className='text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md shadow-xl'
                      type='button'
                      onClick={handlerAddOrderAnswer}
                    >
                      Добавить
                    </button>
                  </div>
                  <ul className='flex flex-col gap-3'>
                    {newQuest.answers?.sort((a, b) => a.order - b.order).map((answer) =>
                      <li
                        key={answer.a_id}
                        className='w-full flex justify-between items-center gap-5 rounded-md p-1'
                        draggable={true}
                        onDragStart={(e) => dragStartHandler(e, answer)}
                        onDragLeave={(e) => dragEndHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, answer)}
                      >
                        <div className='w-full flex items-center gap-2'>
                          <DragHableIcon
                            className='fill-neutral-700 dark:fill-white cursor-grab'
                            width='24px'
                            height='24px'
                          />
                          <input
                            className='w-full block rounded-md outline-none dark:outline-none p-2 shadow-md'
                            type='text'
                            value={newQuest.answers.filter((a) => a.a_id === answer.a_id)[0].text}
                            onChange={(e) => setNewQuest({...newQuest, answers: [...newQuest.answers.filter((a) => a.a_id !== answer.a_id), { ...newQuest.answers.filter((a) => a.a_id === answer.a_id)[0], text: e.target.value }]})}
                          />
                        </div>
                        <button
                          className='block bg-red-500 hover:bg-red-600 p-1 rounded-md shadow-xl'
                          type='button'
                          onClick={() => handleDeleteAnswer(answer.a_id)}
                        >
                          <DeleteIcon className='fill-white' width='24px' height='24px' />
                        </button>
                      </li>
                    )}
                  </ul>
              </div>
            }

          </div>


        </div>

        
        <div className='relative sm:absolute sm:bottom-5 sm:left-5 w-full sm:w-[calc(100%-40px)] flex justify-center gap-3 mt-5 sm:mt-0'>
          <button
              className="w-full bg-neutral-500 hover:bg-neutral-600 text-white rounded-md shadow-md hover:shadow-lg px-3 py-2"
              type="button"
              onClick={closeModal}
            >
              Отмена
            </button>
          <button
            className='w-full text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md shadow-xl disabled:bg-neutral-700'
            type='button'
            onClick={handleAddQuest}
            disabled={(newQuest.type === newQuest.type === 'Прикрепление файла' || newQuest.type === 'Шкала от 1 до 10' || newQuest.type === 'Пропущенное слово') || (newQuest.type !== 'Открытый вопрос' && newQuest.answers.length === 0)}
          >
            Сохранить
          </button>
        </div>

      </div>
    </div>
  )
}

export default NewQuestModal;