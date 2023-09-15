const PrimaryInput = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        className="block min-w-[180px] rounded-md outline-violet-500 dark:outline-violet-500 p-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )
  }
  
  export default PrimaryInput;