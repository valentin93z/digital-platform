'use client';
import { useState } from "react";

const UserRow = ({ user }) => {

  const [dropMenuIsOpen, setDropMenuIsOpen] = useState(false);

  const translateRole = (role) => {
    switch (role) {
        case 'admin':
            return 'Адм.';
            break;
        case 'seller-pk':
            return 'ПК';
            break;
        case 'seller-zum':
            return 'ЗУМ';
            break;
        case 'seller-um':
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
    <li className="font-rubik text-sm grid grid-cols-[40px_200px_120px_80px_260px_40px] items-center gap-2 bg-white dark:bg-neutral-800 shadow-lg p-2 rounded-md">
      <div className="flex justify-center items-center">
        <div className="w-[32px] h-[32px] flex justify-center items-center bg-violet-500 rounded-full">
          <svg className="w-[24px] h-[24px] fill-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-496q-79.5 0-134.25-54.75T291-685q0-79.5 54.75-133.75T480-873q79.5 0 134.25 54.25T669-685q0 79.5-54.75 134.25T480-496ZM256-122q-50.938 0-85.969-35.031Q135-192.062 135-243v-21.03q0-41.97 21.75-77.22t59.272-53.761Q280-426 346.25-442.25 412.5-458.5 480-458.5q69.5 0 135.75 15.75t128.228 46.739Q781.5-377.5 803.25-342.75T825-264.03V-243q0 50.938-35.031 85.969Q754.938-122 704-122H256Z"/>
          </svg>
        </div>
      </div>
      <div>
        <p>{user.lastname} {user.firstname}</p>
        <p>{user.middlename}</p>
      </div>
      <div className="text-right">
        {translateRole(user.role)}
      </div>
      <div className="text-right">
        <p>{user.birthday}</p>
      </div>
      <div className="text-right">
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
      <div
        className="relative flex justify-center items-center cursor-pointer"
        onClick={() => setDropMenuIsOpen(!dropMenuIsOpen)}
      >
        <svg className='w-[24px] h-[24px] fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960">
          <path d="M480.5-114q-39.5 0-67.5-27.906T385-209q0-39.6 27.906-67.8Q440.812-305 480-305q40 0 67.5 28.075t27.5 67.5Q575-170 547.5-142t-67 28Zm0-271q-39.5 0-67.5-27.906T385-480q0-40 27.906-67.5T480-575q40 0 67.5 27.5t27.5 67q0 39.5-27.5 67.5t-67 28Zm0-270q-39.5 0-67.5-28.283t-28-68Q385-791 412.906-818.5T480-846q40 0 67.5 27.5t27.5 67.217q0 39.717-27.5 68T480.5-655Z"/>
        </svg>

        {dropMenuIsOpen &&
          <ul className="absolute bottom-[-75px] right-0 flex flex-col gap-1 bg-white dark:bg-neutral-800 shadow-xl rounded-md p-2 z-[68]">
            <li className="text-black dark:text-white hover:text-violet-500 dark:hover:text-violet-500">Изменить</li>
            <li className="text-black dark:text-white hover:text-violet-500 dark:hover:text-violet-500">Удалить</li>
          </ul>
        }
      </div>
    </li>
  )
}

export default UserRow;