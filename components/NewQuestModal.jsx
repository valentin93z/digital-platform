'use client';
import { useState } from 'react';

const NewQuestModal = ({ closeModal }) => {

    const [newQuest, setNewQuest] = useState({});

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-50' onClick={closeModal}>
      <div className='w-[400px] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5' onClick={(e) => e.stopPropagation()}>

      </div>
    </div>
  )
}

export default NewQuestModal;