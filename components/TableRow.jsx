'use client';
import { useState } from 'react';
import Image from 'next/image';

const TableRow = ({ item }) => {

  const [rowIsOpen, setRowIsOpen] = useState(false);

  return (
    <li className="list-none px-2 md:px-5 py-3 border-b border-solid border_gray dark:border-neutral-700 trans_up">
      <div className="grid grid_cols_6 md:grid-cols-[15px_40px_2fr_repeat(5,_minmax(0,_1fr))_1.5fr_20px] gap-2">
        <div className="flex items-center">
          <Image
            className="cursor-pointer"
            src={rowIsOpen ? '/assets/icons/expand_circle_up.svg' : '/assets/icons/expand_circle_down.svg'}
            alt='arrow'
            width={15}
            height={15}
            onClick={() => setRowIsOpen(!rowIsOpen)}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="rounded-full"
            src='/assets/images/profile_photo_empty.png'
            alt='profile_photo'
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-medium">{item.seller} ({item.sellerPosition})</p>
          <p className="text-sm violet_text_light dark:text-neutral-300 leading-4 font-normal">{item.store} ({item.sector})</p>
        </div>
        <div className="flex flex-col justify-center items-end gap-1 text-end">
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-normal">{item.date}</p>
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-normal">{item.time}</p>
        </div>
        <div className="hidden md:flex flex-col justify-center items-end gap-1 text-end">
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-normal">8/10</p>
        </div>
        <div className="hidden md:flex flex-col justify-center items-end gap-1 text-end">
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-normal">7/10</p>
        </div>
        <div className="hidden md:flex flex-col justify-center items-end gap-1 text-end">
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-normal">10/10</p>
        </div>
        <div className="flex flex-col justify-center items-end gap-1 text-end">
          <p className="text-sm leading-4 font-medium text-green-500">78%</p>
        </div>
        <div className="hidden md:flex flex-col justify-center items-end gap-1 text-end">
          <p className="text-sm violet_gray_text dark:text-white leading-4 font-normal">Петров В.В.</p>
        </div>
        <div className="flex items-center">
          <Image
            className="cursor-pointer"
            src='/assets/icons/more_vert.svg'
            alt='more'
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={rowIsOpen ? 'overflow-hidden transition_open' : 'overflow-hidden transition_close'}>
        <div className="pt-5 flex flex-col gap-2">
          <h1 className="font-medium leading-3 violet_gray_text dark:text-white bg-violet-100 dark:bg-violet-500 py-2 pl-5 rounded-sm">СКОК</h1>
          {item.answers.filter((q) => q.questId.includes('group1')).map((quest) =>
            <div className="flex justify-between gap-2 border-b border_gray dark:border-neutral-700 border-solid pb-2" key={`${item._id}-${quest.questId}`}>
              <p className="text-sm violet_gray_text dark:text-white">{quest.questText}</p>
              <p className="text-sm violet_gray_text dark:text-white">{quest.answerText}</p>
            </div>
          )}
        </div>
        <div className="pt-5 flex flex-col gap-2">
          <h1 className="font-medium leading-4 violet_gray_text dark:text-white bg-violet-100 dark:bg-violet-500 py-2 pl-5 rounded-sm">Техника продаж</h1>
          {item.answers.filter((q) => q.questId.includes('group2')).map((quest) =>
            <div className="flex justify-between gap-2 border-b border_gray dark:border-neutral-700 border-solid pb-2" key={`${item._id}-${quest.questId}`}>
              <p className="text-sm violet_gray_text dark:text-white">{quest.questText}</p>
              <p className="text-sm violet_gray_text dark:text-white">{quest.answerText}</p>
            </div>
          )}
        </div>
        <div className="pt-5 flex flex-col gap-2">
          <h1 className="font-medium leading-4 violet_gray_text dark:text-white bg-violet-100 dark:bg-violet-500 py-2 pl-5 rounded-sm">Техника безопасности</h1>
          {item.answers.filter((q) => q.questId.includes('group3')).map((quest) =>
            <div className="flex justify-between gap-2 border-b border_gray dark:border-neutral-700 border-solid pb-2" key={`${item._id}-${quest.questId}`}>
              <p className="text-sm violet_gray_text dark:text-white">{quest.questText}</p>
              <p className="text-sm violet_gray_text dark:text-white">{quest.answerText}</p>
            </div>
          )}
        </div>
        <div className="pt-5 flex flex-col gap-2">
          <h1 className="font-medium leading-4 violet_gray_text dark:text-white bg-violet-100 dark:bg-violet-500 py-2 pl-5 rounded-sm">Комментарий:</h1>
          {item.answers.filter((q) => q.questId.includes('group4')).map((quest) =>
            <p className="text-sm violet_gray_text dark:text-white text-justify" key={`${item._id}-${quest.questId}`}>{quest.answerText}</p>
          )}
        </div>
      </div>
    </li>
  )
}

export default TableRow;