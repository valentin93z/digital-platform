const NewFormInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="block min-w-[180px] rounded-md bg-violet-100 dark:bg-neutral-900 outline-violet-500 dark:outline-violet-500 p-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default NewFormInput;