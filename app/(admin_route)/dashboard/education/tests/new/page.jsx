'use client';
import NewQuestModal from "@components/NewQuestModal";
import DeleteIcon from "@components/icons/DeleteIcon";
import EditIcon from "@components/icons/EditIcon";
import { useState } from "react";

const NewTestPage = () => {

  const [newQuestModal, setNewQuestModal] = useState(false);

  const [testTitle, setTestTitle] = useState('');
  const [forPosition, setForPosition] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const [minPercentage, setMinPercentage] = useState(0);
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState([]);

  const closeModal = () => {
    setNewQuestModal(false);
  }

  const handleDeleteQuest = (id) => {
    setQuestion([...question.filter((q) => q.q_id !== id)]);
  }

  return (
    <div className="font-rubik text-neutral-700 dark:text-white px-5 md:px-20">
      <div className="mb-10">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Создание нового теста</h1>
      </div>
      <div className="flex justify-between gap-20">
        <div className="min-w-[400px] flex flex-col gap-5">
          <div className="flex gap-3 justify-between items-center">
            <p>Название теста</p>
            <input
              className='block w-[300px] rounded-md outline-violet-500 dark:outline-violet-500 p-2 shadow-md'
              type='text'
              placeholder=''
              value={testTitle}
              onChange={(e) => setTestTitle(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center gap-10">
            <p>Целевая аудитория</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="trainee" name="position" value='trainee' />
                <label htmlFor="trainee">Стажер</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="pk" name="position" value='pk' />
                <label htmlFor="pk">ПК</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="zum" name="position" value='zum' />
                <label htmlFor="zum">ЗУМ</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="um" name="position" value='um' />
                <label htmlFor="um">УМ</label>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3 items-center">
            <p>Количество попыток</p>
            <input
              className='block w-[70px] rounded-md outline-violet-500 dark:outline-violet-500 p-2 shadow-md'
              type='number'
              min={0}
              max={10}
              placeholder=''
              value={attempts}
              onChange={(e) => setAttempts(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-3 items-center">
            <p>Минимальный процент</p>
            <input
              className='block w-[70px] rounded-md outline-violet-500 dark:outline-violet-500 p-2 shadow-md'
              type='number'
              min={0}
              max={100}
              placeholder=''
              value={minPercentage}
              onChange={(e) => setMinPercentage(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-10 mb-5">
            <h1 className="text-2xl">Вопросы</h1>
            <button
              className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-600 shadow-md"
              type="button"
              onClick={() => setNewQuestModal(true)}
            >
              Добавить</button>
          </div>
          <ul className="flex flex-col gap-3">
          {question?.sort((a,b) => a.q_queue - b.q_queue).map((quest) =>
            <li
              className="flex justify-between items-center bg-white dark:bg-neutral-800 rounded-md shadow-md p-5"
              key={quest.q_id}
            >
              <div className="flex gap-5">
                <p>{quest.q_queue}.</p>
                <p>{quest.quest}</p>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-700 p-2 rounded-md shadow-md"
                  type="button"
                >
                  <EditIcon className='fill-neutral-700 dark:fill-white' width='24px' height='24px' />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 p-2 rounded-md shadow-md"
                  type="button"
                  onClick={() => handleDeleteQuest(quest.q_id)}
                >
                  <DeleteIcon className='fill-white' width='24px' height='24px' />
                </button>
              </div>
            </li>)}
          </ul>
        </div>
      </div>
      {newQuestModal && <NewQuestModal closeModal={closeModal} question={question} setQuestion={setQuestion} />}
    </div>
  )
}

export default NewTestPage;