const LoginInput = ({ loginData, setLoginData }) => {
  return (
    <>
      <input
        className='text-neutral-700 dark:text-white p-2 outline-violet-500 dark:outline-violet-500 rounded-md shadow-md text-lg'
        type='text'
        placeholder='Введите логин'
        value={loginData.login}
        onChange={(e) => setLoginData({ ...loginData, login: e.target.value })}
      />
    </>
  )
}

export default LoginInput;