'use client';
import { useState } from "react";
import { positions } from "@utils/positions";
import { getSignature } from "@utils/getSignature";
import NewQuestModal from "@components/NewQuestModal";
import DeleteIcon from "@components/icons/DeleteIcon";
import EditIcon from "@components/icons/EditIcon";
import { useRouter } from "next/navigation";

const NewTestPage = () => {

  const [newQuestModal, setNewQuestModal] = useState(false);

  const [testTitle, setTestTitle] = useState('');
  const [forPosition, setForPosition] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const [minPercentage, setMinPercentage] = useState(0);
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState([]);

  const router = useRouter();

  const closeModal = () => {
    setNewQuestModal(false);
  }

  const handleDeleteQuest = (id) => {
    setQuestion([...question.filter((q) => q.q_id !== id)]);
  }

  const uploadImage = async () => {

    const { signature, timestamp, folder } = await getSignature('test-images');

    const formData = new FormData();
    formData.append('file', image);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    formData.append('folder', folder);

    const uploadImageResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const uploadImageData = await uploadImageResponse.json();

    return uploadImageData;

  }

  const handleSubmit =  async () => {
    try {
      const response = await fetch('/api/tests', {
        method: 'POST',
        body: JSON.stringify({
          title: testTitle,
          forPosition: forPosition,
          attempts: attempts,
          minPercentage: minPercentage,
          questions: question,
        })
      })
      const data = await response.json();
      if (response.ok) {
        const imgRes = await uploadImage();
        const updateTestResponse = await fetch(`/api/tests/${data._id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            image: {
              public_id: imgRes.public_id,
              secure_url: imgRes.secure_url,
              url: imgRes.url,
            }
          })
        })
        router.push(`/dashboard/education/tests`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 font-rubik text-neutral-700 dark:text-white px-5 md:px-20 mb-10">
      <div className="mt-10 md:mt-0 mb-5 md:mb-5">
        <h1 className="text-2xl md:text-4xl text-neutral-700 dark:text-white sm:py-8">Создание нового теста</h1>
      </div>
      <div className="max-w-[600px] flex flex-col gap-8 mx-auto">
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <p className="flex-shrink-0">Название теста</p>
            <input
              className='block w-full rounded-md outline-violet-500 dark:outline-violet-500 p-2 shadow-md'
              type='text'
              placeholder=''
              value={testTitle}
              onChange={(e) => setTestTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-10">
            <p>Целевая аудитория</p>
            <ul className="flex items-center gap-5">
              {positions.map((position) =>
              <li className="flex items-center gap-2" key={position.value}>
                <input
                  className="w-[20px] h-[20px] shadow-md hover:shadow-lg cursor-pointer accent-violet-500"
                  type="checkbox"
                  id={position.value}
                  name='position'
                  value={position.value}
                  onClick={() => setForPosition(forPosition.includes(position.value) ? [...forPosition.filter((pos) => pos !== position.value)] : [...forPosition, position.value])}
                />
                <label className="text-sm sm:text-base" htmlFor={position.title}>{position.title}</label>
              </li>)}
            </ul>
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
        <div className="w-full flex flex-col gap-5">
          <div className="flex justify-between items-center gap-5 mt-5">
            <h1 className="text-2xl">Вопросы</h1>
            <button
              className="bg-violet-500 text-white px-3 py-2 rounded-md hover:bg-violet-600 hover:shadow-xl shadow-lg"
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
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-10">
            <p>Обложка теста</p>
            <div>
              <input
                className=''
                type='file'
                id='test-image'
                onChange={(e) => setImage(e.target.files[0])}
                accept='.jpg, .jpeg, .png'
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <button
              className="w-full bg-neutral-500 hover:bg-neutral-600 text-white rounded-md shadow-md hover:shadow-lg px-3 py-2"
              type="button"
              onClick={() => router.push(`/dashboard/education/tests`)}
            >
              Отмена
            </button>
            <button
              className="w-full bg-violet-500 hover:bg-violet-600 hover:shadow-xl text-white px-3 py-2 rounded-md shadow-lg"
              type="button"
              onClick={handleSubmit}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
      {newQuestModal && <NewQuestModal closeModal={closeModal} question={question} setQuestion={setQuestion} />}
    </div>
  )
}

export default NewTestPage;