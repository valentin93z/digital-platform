const SearchTableInput = () => {
  return (
    <div className='relative'>
      <input
        className="bg-violet-100 dark:bg-neutral-900 pl-9 pr-2 py-2 rounded-md outline-none placeholder:violet_text dark:placeholder:text-neutral-400 violet_gray_text dark:text-white"
        type='text'
        placeholder="Поиск..."
      />
      <div className='absolute top_center left-2'>
        <svg className='fill-[#8B83BA] dark:fill-neutral-400' xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
          <path d="M761-127 526-361q-29 22.923-68.459 35.962Q418.082-312 372-312q-115.162 0-195.081-80Q97-472 97-585t80-193q80-80 193.5-80t193 80Q643-698 643-584.85q0 44.85-12.5 83.35Q618-463 593-429l237 235q14 14.442 14 33.721 0 19.279-14.913 33.192Q814.711-112 794.633-112q-20.077 0-33.633-15ZM371.353-406q74.897 0 126.272-52.25T549-585q0-74.5-51.522-126.75T371.353-764q-75.436 0-127.895 52.25Q191-659.5 191-585t52.311 126.75Q295.623-406 371.353-406Z"/>
        </svg>
      </div>
    </div>
  )
}

export default SearchTableInput;