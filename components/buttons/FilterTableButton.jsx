import React from 'react';

const FilterTableButton = () => {
  return (
    <button
      className="flex gap-1 border-violet-200 dark:border-white border-solid border rounded-md px-3 py-2"
      type='button'
    >
      <svg className="fill-[#8B83BA] dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
        <path d="M440-160q-17 0-28.5-11.5T400-200v-240L161-745q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560-440v240q0 17-11.5 28.5T520-160h-80Z"/>
      </svg>
      <p className='violet_gray_text dark:text-white'>Фильтр</p>
    </button>
  )
}

export default FilterTableButton;