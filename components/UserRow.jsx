
const UserRow = ({ user }) => {

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
    <li className="font-rubik text-sm grid grid-cols-[40px_200px_120px_80px_260px] items-center gap-2 bg-white dark:bg-neutral-800 shadow-lg p-2 rounded-md">
      <div>
        img
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
    </li>
  )
}

export default UserRow;