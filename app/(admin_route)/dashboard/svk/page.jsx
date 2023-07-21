'use client';
import { useEffect, useState } from "react";
import FilterTableButton from "@components/buttons/FilterTableButton";
import SearchTableInput from "@components/inputs/SearchTableInput";
import Modal from '@components/Modal';
import TableRow from "@components/TableRow";
import FilledVioletButton from "@components/buttons/FilledVioletButton";


const TablePage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [newControlItem, setNewControlItem] = useState({
    date: '',
    time: '',
    store: '',
    sector: '',
    seller: '',
    sellerPosition: '',
    answers: [],
    creator: 'Администратор',
  });

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const fetchCheckList = async () => {
    const response = await fetch('/api/video-control');
    const data = await response.json();
    setCheckList(data);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
    setNewControlItem({
      date: null,
      time: null,
      store: '',
      sector: '',
      seller: '',
      sellerPosition: '',
      answers: [],
      creator: 'Администратор',
    });
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/video-control', {
        method: "POST",
        body: JSON.stringify({
          date: newControlItem.date,
          time: newControlItem.time,
          store: newControlItem.store,
          sector: newControlItem.sector,
          seller: newControlItem.seller,
          sellerPosition: newControlItem.sellerPosition,
          answers: newControlItem.answers,
          creator: newControlItem.creator,
        }),
      });
      if (response.ok) {
        setModalIsOpen(false);
        setNewControlItem({
          date: null,
          time: null,
          store: '',
          sector: '',
          seller: '',
          sellerPosition: '',
          answers: [],
          creator: 'Администратор',
        });
        fetchCheckList();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCheckList();
  }, []);

  return (
    <div className='w-full px-2 py-10 font-roboto'>
      {modalIsOpen && <Modal closeModal={closeModal} newControlItem={newControlItem} setNewControlItem={setNewControlItem} handleSave={handleSave} handleReset={handleReset} />}
      <section className='max-w-5xl mx-auto shadow-md rounded-md'>
        <div className='w-full flex justify-between items-center bg-white dark:bg-neutral-800 px-2 md:px-5 py-4 rounded-t-md'>
          <div className="flex gap-5">
            <div className="block">
              <FilterTableButton />
            </div>
            <div className="hidden sm:block">
              <SearchTableInput />
            </div>
          </div>
          <FilledVioletButton type='button' text='Создать' onClick={() => setModalIsOpen(true)} />
        </div>
        <div className='w-full'>
          <div className='grid grid_cols_6 md:grid-cols-[15px_40px_2fr_repeat(5,_minmax(0,_1fr))_1.5fr_20px] gap-2 bg-violet-100 dark:bg-violet-500 px-2 md:px-5 py-3 border-y border-solid border_gray dark:border-neutral-800 text-xs font-semibold violet_text_light dark:text-white'>
            <div className="hidden sm:block"></div>
            <div className="hidden sm:block"></div>
            <div className='text-start hidden sm:block'>Сотрудник</div>
            <div className='text-end hidden sm:block'>Дата/Время</div>
            <div className='text-end hidden md:block'>СКОК</div>
            <div className='text-end hidden md:block'>ТП</div>
            <div className='text-end hidden md:block'>ТБ</div>
            <div className='text-end hidden sm:block'>Результат</div>
            <div className='text-end hidden md:block'>Оценивал</div>
            <div className="hidden sm:block"></div>
          </div>
          <ul className='bg-white dark:bg-neutral-800 rounded-b-md'>
            {checkList.map((item) =>
              <TableRow key={item._id} item={item} />
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default TablePage;