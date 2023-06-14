const LoginInput = ({ loginData, setLoginData }) => {
  return (
    <>
      <input
        className='p-2 outline-violet-800 dark:outline-violet-500 rounded-sm text-lg'
        type='text'
        placeholder='Введите логин'
        value={loginData.login}
        onChange={(e) => setLoginData({ ...loginData, login: e.target.value })}
      />
    </>
  )
}

export default LoginInput;