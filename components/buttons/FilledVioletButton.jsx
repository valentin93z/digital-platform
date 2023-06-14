const FilledVioletButton = ({ type, text, onClick }) => {
  return (
    <button
      className='bg-violet-500 hover:bg-violet-700 text-white px-3 py-2 rounded-md'
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default FilledVioletButton;