import { usersPosition, usersRoles } from "@utils/NewFormSelectData";
import NewFormInput from "./inputs/NewFormInput";
import NewFormSelect from "./selects/NewFormSelect";
import OutlinedButton from "./buttons/OutlinedButton";
import FilledVioletButton from "./buttons/FilledVioletButton";


const UserModal = ({ type, title, newUser, setNewUser, setModalIsOpen, handleSave, handleEdit, handleReset, setSelectedFile, uploadImage, directionList, sectorList, storeList }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 black_opacity flex justify-center items-center px-0 sm:px-5 z-[60]"
      onClick={() => setModalIsOpen(false)}
    >
      <div
        className='max-w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-800 sm:rounded-2xl opacity-100 p-5 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl pb-5">{title}</h1>
        <form className="flex flex-col gap-4" onSubmit={type === 'new' ? handleSave : handleEdit}>
          <div>
            <NewFormInput
              type='text'
              placeholder='Логин'
              value={newUser.username}
              onChange={(e) => setNewUser({...newUser, username: e.target.value})}
            />
          </div>
          {type === 'new' &&
            <div>
              <NewFormInput
                type='text'
                placeholder='Пароль'
                value={newUser.password}
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
              />
            </div>
          }
          <div>
            <NewFormSelect
              data={usersRoles}
              value={newUser}
              setValue={setNewUser}
              exist='role'
            />
          </div>
          <div>
            <NewFormSelect
              data={usersPosition}
              value={newUser}
              setValue={setNewUser}
              exist='position'
            />
          </div>
          {newUser.role === 'retail' &&
            <div>
              <NewFormSelect
                data={directionList}
                value={newUser}
                setValue={setNewUser}
                exist='direction'
              />
            </div>
          }
          {newUser.direction === 'ЦМ' &&
            <div>
              <NewFormSelect
                data={sectorList}
                value={newUser}
                setValue={setNewUser}
                exist='sector'
              />
            </div>
          }
          <div>
            <NewFormSelect
              data={storeList}
              value={newUser}
              setValue={setNewUser}
              exist='store'
            />
          </div>
          <div>
            <NewFormInput
              type='text'
              placeholder='Фамилия'
              value={newUser.lastname}
              onChange={(e) => setNewUser({...newUser, lastname: e.target.value})}
            />
          </div>
          <div>
            <NewFormInput
              type='text'
              placeholder='Имя'
              value={newUser.firstname}
              onChange={(e) => setNewUser({...newUser, firstname: e.target.value})}
            />
          </div>
          <div>
            <NewFormInput
              type='text'
              placeholder='Отчество'
              value={newUser.middlename}
              onChange={(e) => setNewUser({...newUser, middlename: e.target.value})}
            />
          </div>
          <div>
            <NewFormInput
              type='text'
              placeholder='Email'
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            />
          </div>
          <div>
            <NewFormInput
              type='text'
              placeholder='Номер телефона'
              value={newUser.phone}
              onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
            />
          </div>
          <div>
            <NewFormInput
              type='text'
              placeholder='Дата рождения'
              value={newUser.birthday}
              onChange={(e) => setNewUser({...newUser, birthday: e.target.value})}
            />
          </div>
          <div>
            <input type='file' onChange={(e) => setSelectedFile(e.target.files[0])} />
            <button
              type="button"
              onClick={uploadImage}
            >
              Прикрепить</button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <OutlinedButton type='button' text='Отмена' onClick={handleReset} />
            <FilledVioletButton type='submit' text='Сохранить' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal;