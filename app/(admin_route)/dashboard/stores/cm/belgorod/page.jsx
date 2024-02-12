'use client';
import { useState, useEffect } from "react";
import AddIcon from "@components/icons/AddIcon";
import NewStoreModal from "@components/NewStoreModal";
import EditIcon from "@components/icons/EditIcon";
import DeleteIcon from "@components/icons/DeleteIcon";
import { getNoun } from "@utils/getNoun";

const BelgorodStoresPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [storesList, setStoresList] = useState([]);
  const [directionList, setDirectionList] = useState([]);
  const [sectorList, setSectorList] = useState([]);
  const [newStore, setNewStore] = useState({ id: '', title: '', direction: '', sector: '' });

  const closeModal = () => {
    setModalIsOpen(false);
    setEditModalIsOpen(false);
  }

  const fetchStoresList = async () => {
    const response = await fetch('/api/store');
    const data = await response.json();
    setStoresList(data.filter((store) => store.sector === 'Белгород'));
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
    setEditModalIsOpen(false);
    setNewStore({ id: '', title: '', direction: '', sector: '' });
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

  const handleOpenEditWindow = (store) => {
    setNewStore({
      id: store._id,
      title: store.title,
      direction: store.direction,
      sector: store.sector,
    });
    setEditModalIsOpen(true);
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

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/store/${newStore.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: newStore.title,
          direction: newStore.direction,
          sector: newStore.sector,
        })
      });
      if (response.ok) {
        setEditModalIsOpen(false);
        fetchStoresList();
        setNewUser({
          id: '',
          title: '',
          direction: '',
          sector: '',
        });
        fetchStoresList();
      }
    } catch (error) {
      console.log(error);
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
      <div className="font-rubik px-5 md:px-20 mt-10 md:mt-0">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-lg md:text-4xl text-neutral-700 dark:text-white py-5">
            <span>Сектор: </span>
            <span>Белгород </span>
            <span className="hidden sm:inline">-</span>
            <br className="block sm:hidden" />
            <span>{` ${storesList.length} ${getNoun(storesList.length, 'торговая точка', 'торговых точки', 'торговых точек')}`}</span>
          </h1>
          <button
            className="flex items-center gap-3 bg-violet-500 rounded-md px-2 py-3 hover:bg-violet-600 shadow-lg hover:shadow-xl cursor-pointer"
            type="button"
            onClick={() => setModalIsOpen(true)}
          >
            <AddIcon className='fill-white' width='24px' height='24px' />
            <p className="text-lg text-white">Добавить</p>
          </button>
        </div>
        <div>
          <div className="grid grid_cols_2_stores justify-between items-center gap-10 p-2">
            <div className="hidden xl:grid grid_cols_3_stores gap-3">
              <div>Название ТТ</div>
              <div>Направление</div>
              <div>Сектор</div>
            </div>
            <div className="block xl:hidden">
              <div>Название ТТ</div>
            </div>
            <div className="min-w-[60px] text-right">Управление</div>
          </div>
          <ul className="flex flex-col gap-2 mb-10">
            {storesList.map((store) =>
              <li className="grid grid_cols_2_stores justify-between items-center gap-10 bg-white dark:bg-neutral-800 shadow-md hover:shadow-lg p-2 rounded-md border cursor-pointer border-solid border-neutral-300 hover:border-violet-500 dark:border-neutral-800 dark:hover:border-neutral-700" key={store._id}>
                <div className="hidden xl:grid grid_cols_3_stores gap-3">
                  <div>{store.title}</div>
                  <div>{store.direction}</div>
                  <div>{store.sector}</div>
                </div>
                <div className="block xl:hidden">
                  <div>{store.title}</div>
                </div>
                <div className="flex justify-end items-center min-w-[60px] gap-3">
                  <button
                    className="bg-neutral-400 hover:bg-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-white shadow-md hover:shadow-lg rounded-md p-2"
                    type='button'
                    onClick={() => handleOpenEditWindow(store)}
                  >
                    <EditIcon className='block fill-white' width={20} height={20} />
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg rounded-md p-2"
                    type='button'
                    onClick={() => handleDelete(store._id)}
                  >
                    <DeleteIcon className='block fill-white' width={20} height={20} />
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>

        {modalIsOpen &&
          <NewStoreModal
            type='new'
            closeModal={closeModal}
            newStore={newStore}
            setNewStore={setNewStore}
            handleReset={handleReset}
            handleSave={handleSave}
            directionList={directionList}
            sectorList={sectorList}
          />}

          {editModalIsOpen &&
            <NewStoreModal
              type='edit'
              newStore={newStore}
              setNewStore={setNewStore}
              handleReset={handleReset}
              closeModal={closeModal}
              handleSave={handleEdit}
              directionList={directionList}
              sectorList={sectorList}
            />
          }
      </div>
    )
  }
  
  export default BelgorodStoresPage;