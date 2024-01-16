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
  
  console.log(testList);

  return (
    <div className="font-rubik text-neutral-700 dark:text-white px-5 md:px-20">
      <div className="mb-10">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Создание нового курса</h1>
      </div>
      <div className="max-w-[600px] flex flex-col gap-5 mx-auto">
        <div className="flex items-center gap-5">
          <p className="flex-shrink-0">Название курса</p>
          <input
            className="w-full p-2 outline-none rounded-md"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center gap-10">
          <p>Целевая аудитория</p>
          <ul className="flex items-center gap-5">
            {positions.map((position) =>
              <li className="flex items-center gap-2" key={position.value}>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  id={position.value}
                  name='position'
                  value={position.value}
                  onClick={() => setForPosition(forPosition.includes(position.value) ? [...forPosition.filter((pos) => pos !== position.value)] : [...forPosition, position.value])}
                />
                <label htmlFor={position.title}>{position.title}</label>
              </li>)}
          </ul>
        </div>
        <div className="flex justify-between items-center gap-10">
          <p>Направление</p>
          <ul className="flex items-center gap-5">
            {directions.map((direction) =>
              <li className="flex items-center gap-2" key={direction.value}>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  id={direction.value}
                  name='direction'
                  value={direction.value}
                  onClick={() => setForDirection(forDirection.includes(direction.value) ? [...forDirection.filter((dir) => dir !== direction.value)] : [...forDirection, direction.value])}
                />
                <label htmlFor={direction.title}>{direction.title}</label>
              </li>)}
          </ul>
        </div>
        <div className="flex gap-5">
          <p>Описание курса</p>
          <textarea
            className="p-2 outline-none rounded-md"
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
        <div className="flex flex-col gap-5 dark:bg-neutral-800 rounded-md p-3">
          <div className="flex justify-between items-center gap-5">
            <p>Прикрепленный тест</p>
            <button
              className="bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md"
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
                className="bg-red-500 py-1 px-2 rounded-md"
                onClick={() => setAttachedTest({ id: '', title: '' })}
              >
                Удалить
              </button>
            </div>}
        </div>
        <button
          className="bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-md"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
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