'use client';
import { useState, useEffect } from "react";
import AddIcon from "@components/icons/AddIcon";
import NewStoreModal from "@components/NewStoreModal";

const BelgorodStoresPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [storesList, setStoresList] = useState([]);
  const [directionList, setDirectionList] = useState([]);
  const [sectorList, setSectorList] = useState([]);
  const [newStore, setNewStore] = useState({ title: '', direction: '', sector: '' });

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const fetchStoresList = async () => {
    const response = await fetch('/api/store');
    const data = await response.json();
    setStoresList(data);
  }

  const fetchDirectionList = async () => {
    const response = await fetch('/api/direction');
    const data = await response.json();
    const directionArr = data.map((item) => item.title);
    setDirectionList(directionArr);
  }

  const fetchSectorList = async () => {
    const response = await fetch('/api/sector');
    const data = await response.json();
    const sectorArr = data.map((item) => item.title);
    setSectorList(sectorArr);
  }

  const handleReset = () => {
    setModalIsOpen(false);
    setNewStore({ title: '', direction: '', sector: '' });
  }

  const resetSector = () => {
    if (newStore.direction !== 'ЦМ') {
      setNewStore({...newStore, sector: ''});
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/store', {
        method: "POST",
        body: JSON.stringify({
          title: newStore.title,
          direction: newStore.direction,
          sector: newStore.sector,
        }),
      });
      if (response.ok) {
        setModalIsOpen(false);
        handleReset();
        fetchStoresList();
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/store/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchStoresList();
      }
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchStoresList();
    fetchDirectionList();
    fetchSectorList();
  }, []);

  useEffect(() => {
    resetSector();
  }, [newStore.direction]);

    return (
      <div className="font-rubik px-5 md:px-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">ТТ сектор: Белгород</h1>
          <button
            className="flex items-center gap-3 bg-violet-500 rounded-md px-2 py-3 hover:bg-violet-600 cursor-pointer"
            type="button"
            onClick={() => setModalIsOpen(true)}
          >
            <AddIcon className='dark:fill-white' width='24px' height='24px' />
            <p className="text-lg">Добавить</p>
          </button>
        </div>
        <div>
          <div className="grid grid_cols_2_stores justify-between items-center gap-10 p-2">
            <div className="grid grid_cols_3_stores gap-3">
              <div>Название ТТ</div>
              <div>Направление</div>
              <div>Сектор</div>
            </div>
            <div className="min-w-[207px] text-center">Управление</div>
          </div>
          <ul className="flex flex-col gap-2">
            {storesList.map((store) =>
              <li className="grid grid_cols_2_stores justify-between items-center gap-10 bg-neutral-800 p-2 rounded-md" key={store._id}>
                <div className="grid grid_cols_3_stores gap-3">
                  <div>{store.title}</div>
                  <div>{store.direction}</div>
                  <div>{store.sector}</div>
                </div>
                <div className="flex justify-end items-center min-w-[207px] gap-5">
                  <button className="bg-neutral-600 hover:bg-neutral-700 text-white rounded-md px-3 py-2" type='button'>Изменить</button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2"
                    type='button'
                    onClick={() => handleDelete(store._id)}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
        {modalIsOpen &&
          <NewStoreModal
            closeModal={closeModal}
            newStore={newStore}
            setNewStore={setNewStore}
            handleReset={handleReset}
            handleSave={handleSave}
            handleDelete={handleDelete}
            directionList={directionList}
            sectorList={sectorList}
          />}
      </div>
    )
  }
  
  export default BelgorodStoresPage;