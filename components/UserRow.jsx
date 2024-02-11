'use client';
import { useState } from "react";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";

const UserRow = ({ user, handleDelete, newUser, setNewUser, setEditModalIsOpen, setMoreModalIsOpen, setExistUser }) => {

  const [dropMenuIsOpen, setDropMenuIsOpen] = useState(false);

  const modalIsOpen = () => {
    setMoreModalIsOpen(true);
    setExistUser(user);
  }

  const translateRole = (role) => {
    switch (role) {
        case 'admin':
            return 'Адм.';
            break;
        case 'pk':
            return 'ПК';
            break;
        case 'zum':
            return 'ЗУМ';
            break;
        case 'um':
            return 'УМ';
            break;
        case 'trainee':
            return 'Стажер';
            break;
        default:
            return 'Неизвестно';
    }
  }

  return (
    <li
      className="font-rubik text-sm flex justify-between gap-2 bg-white dark:bg-neutral-800 shadow-md hover:shadow-lg p-2 rounded-md cursor-pointer border border-solid border-neutral-300 hover:border-violet-500 dark:border-neutral-800 dark:hover:border-neutral-700"
      onClick={modalIsOpen}
    >
      <div className="flex justify-center items-center">
        <div className="w-[32px] h-[32px] flex justify-center items-center bg-violet-500 rounded-full">
          <svg className="w-[24px] h-[24px] fill-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-496q-79.5 0-134.25-54.75T291-685q0-79.5 54.75-133.75T480-873q79.5 0 134.25 54.25T669-685q0 79.5-54.75 134.25T480-496ZM256-122q-50.938 0-85.969-35.031Q135-192.062 135-243v-21.03q0-41.97 21.75-77.22t59.272-53.761Q280-426 346.25-442.25 412.5-458.5 480-458.5q69.5 0 135.75 15.75t128.228 46.739Q781.5-377.5 803.25-342.75T825-264.03V-243q0 50.938-35.031 85.969Q754.938-122 704-122H256Z"/>
          </svg>
        </div>
      </div>
      <div className="w-[200px]">
        <p>{user.lastname} {user.firstname}</p>
        <p>{user.middlename}</p>
      </div>
      <div className="hidden lg:block w-[120px] text-right">
        {translateRole(user.role)}
      </div>
      <div className="hidden sm:block w-[60px]">
        <p>{user.direction ? user.direction : '-'}</p>
        <p>{user.sector ? user.sector : ''}</p>
      </div>
      <div className="hidden sm:block w-[120px]">
        <p>{user.store ? user.store : '-'}</p>
      </div>
      <div className="hidden xl:block w-[80px] text-right">
        <p>{user.birthday}</p>
      </div>
      <div className="hidden xl:block w-[260px] text-right">
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
      <div className="relative flex justify-center items-center gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          className="bg-neutral-400 hover:bg-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-white shadow-md hover:shadow-lg rounded-md p-2"
          type='button'
          onClick={() => {
            setNewUser({
              _id: user._id,
              username: user.username,
              password: '',
              role: user.role,
              firstname: user.firstname,
              lastname: user.lastname,
              middlename: user.middlename,
              email: user.email,
              phone: user.phone,
              birthday: user.birthday,
              image: user.image,
            });
            setEditModalIsOpen(true);
          }}
        >
          <EditIcon className='block fill-white' width={20} height={20} />
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg rounded-md p-2"
          type='button'
          onClick={() => handleDelete(user._id)}
        >
          <DeleteIcon className='block fill-white' width={20} height={20} />
        </button>
      </div>
    </li>
  )
}

export default UserRow;