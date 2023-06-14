const OutlinedButton = ({ type, text, onClick }) => {
  return (
    <button
      className="violet_gray_text dark:text-white border-violet-200 dark:border-white border-solid border rounded-md px-3 py-2"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default OutlinedButton;