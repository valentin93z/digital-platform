'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { parseDateFormat } from "@utils/parseUserData";
import NewsModal from "@components/NewsModal";
import { getSignature } from "@utils/getSignature";
import { CldImage } from "next-cloudinary";

const page = () => {

  const { status, data } = useSession();

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newsModalIsOpen, setNewsModalIsOpen] = useState(false);

  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    image: null,
    date: Date.now(),
  });

  const fetchNewsData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news');
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleReset = () => {
    setNewsModalIsOpen(false);
    setNewItem({
      title: '',
      description: '',
      image: null,
      date: Date.now(),
    });
  }

  const uploadImage = async () => {

    const { signature, timestamp, folder } = await getSignature('news-images');

    const formData = new FormData();
    formData.append('file', newItem.image);
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

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        body: JSON.stringify({
          title: newItem.title,
          description: newItem.description,
          date: newItem.date,
        })
      })
      const data = await response.json();
      if (response.ok) {
        const imgRes = await uploadImage();
        const updateTestResponse = await fetch(`/api/news/${data._id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            image: {
              public_id: imgRes.public_id,
              secure_url: imgRes.secure_url,
              url: imgRes.url,
            }
          })
        })
        handleReset();
        fetchNewsData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">

      <div className="flex justify-between items-center gap-5">
        <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">Главная страница</h1>
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white px-3 py-2 rounded-md cursor-pointer"
          type='button'
          onClick={() => setNewsModalIsOpen(true)}
        >
          Добавить запись
        </button>
      </div>

      <div className='flex flex-col gap-5 mb-10 mt-10'>
        {newsData.sort((a, b) => b.date - a.date).map((item) =>
          <div
            className="w-full grid grid-cols-[1fr_3fr] gap-10 bg-white shadow-lg rounded-md p-10 cursor-pointer"
            key={item._id}
          >
            <div className="relative w-[300px] h-[170px] rounded-md overflow-hidden">

            {item?.image
                ?
                  <div className="relative w-full sm:w-[300px] h-[200px]">
                    <CldImage
                      src={item.image.public_id}
                      sizes='300px'
                      fill
                      style={{objectFit: 'cover'}}
                      alt='course-image'
                    />
                  </div>
                :
                  <Image
                    className='rounded-t-lg'
                    src='/assets/images/math-course.jpg'
                    alt='course-img'
                    width={300}
                    height={200}
                  />
              }

            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-2xl text-neutral-700'>{item?.title}</h2>
              <p className='text-neutral-700 text-justify'>{item?.description}</p>
              <p className='text-neutral-600 text-right'>{parseDateFormat(item?.date)}</p>
            </div>
          </div>
        )}
      </div>
    
      {newsModalIsOpen &&
        <NewsModal
          handleReset={handleReset}
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      }

    </div>
  )
}

export default page;