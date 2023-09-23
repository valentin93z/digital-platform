'use client';
import NewQuestModal from "@components/NewQuestModal";
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

  return (
    <div className="font-rubik text-neutral-700 dark:text-white px-5 md:px-20">
      <div className="mb-10">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Создание нового теста</h1>
      </div>
      <div className="flex gap-60">
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
        <div>
          <div className="flex items-center gap-10">
            <h1 className="text-2xl">Вопросы</h1>
            <button
              className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-600 shadow-md"
              type="button"
              onClick={() => setNewQuestModal(true)}
            >
              Добавить</button>
          </div>
        </div>
      </div>
      {newQuestModal && <NewQuestModal closeModal={closeModal} />}
    </div>
  )
}

export default NewTestPage;