'use client';
import { getSignature } from "@utils/getSignature";
import { positions } from "@utils/positions";
import { directions } from "@utils/directions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AddTestInCourseModal from "@components/AddTestInCourseModal";

const NewCoursePage = () => {

    const router = useRouter();

    const [testList, setTestList] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [forDirection, setForDirection] = useState([]);
    const [forPosition, setForPosition] = useState([]);
    const [document, setDocument] = useState(null);
    const [image, setImage] = useState(null);
    const [attachedTest, setAttachedTest] = useState({ id: '', title: '' });

    const [TestModal, setTestModal] = useState(false);

    const closeModal = () => {
      setTestModal(false);
    }

    const uploadFile = async (file, path) => {
        const { signature, timestamp, folder } = await getSignature(path);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('timestamp', timestamp);
        formData.append('signature', signature);
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
        formData.append('folder', folder);
        const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadResponse.json();
        return uploadData;
      }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/course', {
        method: 'POST',
        body: JSON.stringify({ title, description, forPosition, forDirection, attached_test: attachedTest }),
      });
      const data = await response.json();
      if (response.ok) {
        const docRes = await uploadFile(document, 'documents');
        const imgRes = await uploadFile(image, 'course-images');
        
        const res = await fetch(`/api/course/${data._id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            image: {
              public_id: imgRes.public_id,
              secure_url: imgRes.secure_url,
              url: imgRes.url,
            },
            path: {
              public_id: docRes.public_id,
              secure_url: docRes.secure_url,
              url: docRes.url,
            },
          })
        })
        const totalData = await res.json();
        router.push(`/dashboard/education/courses`);
      }
    } catch(error) {
        console.log(error);
    }
  }

  useEffect(() => {
    const getTestList = async () => {
      const response = await fetch('/api/tests');
      const data = await response.json();
      setTestList(data);
    }
    getTestList();
  }, []);


  return (
    <div className="min-h-[100vh] bg-neutral-100 dark:bg-neutral-900 font-rubik text-neutral-700 dark:text-white px-5 md:px-20 pb-10">
      <div className="sm:mb-10">
        <h1 className="text-2xl md:text-4xl text-neutral-700 dark:text-white py-5">Создание нового курса</h1>
      </div>
      <div className="max-w-[600px] flex flex-col gap-8 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <p className="flex-shrink-0">Название курса</p>
          <input
            className="w-full p-2 outline-none rounded-md shadow-md"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-10">
          <p>Направление</p>
          <ul className="flex items-center gap-5">
            {directions.map((direction) =>
              <li className="flex items-center gap-2" key={direction.value}>
                <input
                  className="w-[20px] h-[20px] shadow-md hover:shadow-lg cursor-pointer accent-violet-500"
                  type="checkbox"
                  id={direction.value}
                  name='direction'
                  value={direction.value}
                  onClick={() => setForDirection(forDirection.includes(direction.value) ? [...forDirection.filter((dir) => dir !== direction.value)] : [...forDirection, direction.value])}
                />
                <label className="text-sm sm:text-base" htmlFor={direction.title}>{direction.title}</label>
              </li>)}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <p>Описание курса</p>
          <textarea
            className="p-2 outline-none rounded-md shadow-md resize-none"
            cols={50}
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <p>Загрузка документа</p>
          <input
            type="file"
            onChange={(e) => setDocument(e.target.files[0])}
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <p>Изображение курса</p>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col gap-5 rounded-md">
          <div className="flex justify-between items-center gap-5">
            <p>Прикрепленный тест</p>
            <button
              className="text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md"
              type="button"
              onClick={() => setTestModal(true)}
            >
              {attachedTest.id ? 'Заменить' : 'Добавить'}
            </button>
          </div>
          {attachedTest.id &&
            <div className="flex justify-between items-center">
              <p>{attachedTest.title}</p>
              <button
                type="button"
                className="bg-red-500 py-1 px-2 rounded-md shadow-md hover:shadow-lg"
                onClick={() => setAttachedTest({ id: '', title: '' })}
              >
                Удалить
              </button>
            </div>}
        </div>
        <div className="flex justify-between items-center gap-5">
          <button
            className="w-full bg-neutral-500 hover:bg-neutral-600 text-white rounded-md shadow-md hover:shadow-lg px-3 py-2"
            type="button"
            onClick={() => router.push(`/dashboard/education/courses`)}
          >
            Отмена
          </button>
          <button
          className="w-full text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md shadow-md hover:shadow-lg"
          type="button"
          onClick={handleSubmit}
        >
          Сохранить
        </button>
        </div>
      </div>

      {TestModal && 
        <AddTestInCourseModal 
          closeModal={closeModal}
          testList={testList}
          attachedTest={attachedTest}
          setAttachedTest={setAttachedTest}
        />}

    </div>
  )
}

export default NewCoursePage;