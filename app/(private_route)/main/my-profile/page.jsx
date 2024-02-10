'use client';
import PersonIcon from '@components/icons/PersonIcon';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getSignature } from '@utils/getSignature';
import { CldImage } from 'next-cloudinary';

const MyProfilePage = () => {

  const { data, update } = useSession();
  const [selectedImage, setSelectedImage] = useState(null);


  const uploadImage = async () => {

    const { signature, timestamp, folder } = await getSignature('avatars');
    

    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
    formData.append('folder', folder);

    const uploadImageResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const uploadImageData = await uploadImageResponse.json();

    const updateUserResponse = await fetch(`/api/users/${data?.user?.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        image: {
          public_id: uploadImageData.public_id,
          secure_url: uploadImageData.secure_url,
          url: uploadImageData.url,
        }
      }),
    });
    
    await update({
      ...data,
      user: {
        ...data?.user,
        image: {
          public_id: uploadImageData.public_id,
          secure_url: uploadImageData.secure_url,
          url: uploadImageData.url,
        },
      },
    });
  }

  console.log(data);

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <div className='md:flex gap-20'>
        <h1 className='text-4xl mt-12 md:mt-0 md:hidden'>Мой профиль</h1>
        <div className='mt-10 md:mt-20'>
          <input
            className='hidden'
            type='file'
            id='profile-photo'
            onChange={(e) => setSelectedImage(e.target.files[0])}
            accept='.jpg, .jpeg, .png'
          />
          <label
            className='relative block max-w-full sm:max-w-[300px] mx-auto bg-white dark:bg-neutral-800 cursor-pointer rounded-md shadow-md overflow-hidden'
            htmlFor='profile-photo'
          >
            <div className='w-[300px] h-[300px]'>
              {data?.user.image.public_id
                ? <CldImage src={data?.user.image.public_id} sizes='300px' fill style={{objectFit: 'cover'}} alt='profile photo' />
                : <PersonIcon className='fill-black dark:fill-neutral-600' width='300px' height='300px' />
              }
            </div>
            <div className='absolute top-0 right-0 bottom-0 left-0 grid place-items-center opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.4)] dark:hover:bg-[rgba(0,0,0,0.7)] transition-all'>
              <p className='text-center text-white align-middle'>Загрузить фото</p>
            </div>
          </label>
          <button
            className='block min-w-full sm:min-w-[300px] mx-auto text-white bg-violet-500 p-2 rounded-md mt-5 disabled:bg-neutral-500 cursor-pointer shadow-lg'
            type='button'
            onClick={uploadImage}
            disabled={!selectedImage}
          >
            Обновить фото</button>
        </div>
        <div className='w-full mt-10 md:mt-0 mb-10 md:mb-0'>
          <h1 className='text-4xl mb-10 hidden md:block'>Мой профиль</h1>
          <div className='flex flex-col gap-5 bg-white dark:bg-neutral-800 p-5 md:p-10 rounded-md shadow-lg'>
            <div>
              <h2 className='text-2xl text-left text-neutral-800 dark:text-white'>{data?.user?.lastname} {data?.user?.firstname} {data?.user?.middlename}</h2>
              <p className='text-neutral-400 text-left'>
                {data?.user?.position === 'pk' && 'Продавец-консультант'}
                {data?.user?.position === 'zum' && 'Заместитель управляющего магазином'}
                {data?.user?.position === 'um' && 'Управляющий магазином'}
              </p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center gap-5'>
                  <hr className='w-full dark:border-neutral-700' />
                  <h3 className='md:text-xl text-neutral-400 flex-shrink-0'>Общие данные</h3>
                  <hr className='w-full dark:border-neutral-700' />
                </div>
                <p className='flex gap-5'>
                  <span className='text-neutral-400 text-sm'>Дата рождения:</span>
                  <span className='text-neutral-800 dark:text-white text-sm md:text-base'>{data?.user?.birthday}</span>
                </p>
                <p className='flex gap-5'>
                  <span className='text-neutral-400 text-sm md:text-base'>В компании:</span>
                  <span className='text-neutral-800 dark:text-white text-sm md:text-base'>...</span>
                </p>
                <p className='flex gap-5'>
                  <span className='text-neutral-400 text-sm md:text-base'>Стаж работы:</span>
                  <span className='text-neutral-800 dark:text-white text-sm md:text-base'>...</span>
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-center items-center gap-5'>
                  <hr className='w-full dark:border-neutral-700' />
                  <h3 className='md:text-xl text-neutral-400 flex-shrink-0'>Контакты</h3>
                  <hr className='w-full dark:border-neutral-700' />
                </div>
                <p className='flex gap-5'>
                  <span className='text-neutral-400 text-sm md:text-base'>Номер телефона:</span>
                  <span className='text-neutral-800 dark:text-white text-sm md:text-base'> {data?.user?.phone}</span>
                </p>
                <p className='flex gap-5'>
                  <span className='text-neutral-400 text-sm md:text-base'>Email:</span>
                  <span className='text-neutral-800 dark:text-white text-sm md:text-base'> {data?.user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfilePage;