'use client';
import UserModal from "@components/UserModal";
import UserRow from "@components/UserRow";
import { useState, useEffect } from "react";

const UsersPage = () => {

  const [newModalIsOpen, setNewModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    _id: '',
    username: '',
    password: '',
    role: '',
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    phone: '',
    birthday: '',
    image: 'none',
  });

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setNewModalIsOpen(false);
    setNewUser({
      _id: '',
      username: '',
      password: '',
      role: '',
      firstname: '',
      lastname: '',
      middlename: '',
      email: '',
      phone: '',
      birthday: '',
      image: 'none',
    });
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username: newUser.username,
          password: newUser.password,
          role: newUser.role,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          middlename: newUser.middlename,
          email: newUser.email,
          phone: newUser.phone,
          birthday: newUser.birthday,
          image: newUser.image,
        }),
      });
      if (response.ok) {
        setNewModalIsOpen(false);
        setNewUser({
          _id: '',
          username: '',
          password: '',
          role: '',
          firstname: '',
          lastname: '',
          middlename: '',
          email: '',
          phone: '',
          birthday: '',
          image: 'none',
        });
        fetchUsers();
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/${newUser._id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          username: newUser.username,
          role: newUser.role,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          middlename: newUser.middlename,
          email: newUser.email,
          phone: newUser.phone,
          birthday: newUser.birthday,
          image: newUser.image,
        })
      });
      if (response.ok) {
        setEditModalIsOpen(false);
        setNewUser({
          _id: '',
          username: '',
          password: '',
          role: '',
          firstname: '',
          lastname: '',
          middlename: '',
          email: '',
          phone: '',
          birthday: '',
          image: 'none',
        });
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    const hasConfirmed = confirm('Удалить пользователя?');
    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          fetchUsers();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="font-rubik px-5 md:px-20 unselectable">
      <div className="max-w-[748px] flex justify-between items-center mb-10">
        <h1 className="text-3xl">Пользователи</h1>
        <div>
          <button
            className='flex items-center gap-2 bg-violet-500 hover:bg-violet-700 text-white px-3 py-2 rounded-md'
            type='button'
            onClick={() => setNewModalIsOpen(true)}
          >
            <svg className="w-[20px] h-[20px] fill-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M759.825-400Q747-400 738.5-408.625T730-430v-100H630q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T630-590h100v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T790-690v100h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-530H790v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM360-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM70-160q-12.75 0-21.375-8.625T40-190v-64q0-35 18-63.5t50-42.5q75-33 133.338-46.5 58.339-13.5 118.5-13.5Q420-420 478.5-406.5 537-393 611-360q32 15 50.5 43t18.5 63v64q0 12.75-8.625 21.375T650-160H70Zm30-60h520v-34q0-16-8-30.5T587-306q-70-34-119.5-44T360-360q-58 0-107.5 10.5T132-306q-15 7-23.5 21.5T100-254v34Zm260-321q39 0 64.5-25.5T450-631q0-39-25.5-64.5T360-721q-39 0-64.5 25.5T270-631q0 39 25.5 64.5T360-541Zm0-90Zm0 271Z"/>
            </svg>
            <p>Новый пользователь</p>
          </button>
        </div>
      </div>
      <ul className="flex flex-col items-start gap-1">
        {users?.map((user) =>
          <UserRow key={user._id} user={user} handleDelete={handleDelete} newUser={newUser} setNewUser={setNewUser} setEditModalIsOpen={setEditModalIsOpen} />
        )}
      </ul>
      {newModalIsOpen && <UserModal type='new' title='Новый пользователь' newUser={newUser} setNewUser={setNewUser} setModalIsOpen={setNewModalIsOpen} handleSave={handleSave} handleReset={handleReset} />}
      {editModalIsOpen && <UserModal type="edit" title='Редактирование пользователя' newUser={newUser} setNewUser={setNewUser} setModalIsOpen={setEditModalIsOpen} handleEdit={handleEdit} handleReset={handleReset} />}
    </div>
  )
}

export default UsersPage;