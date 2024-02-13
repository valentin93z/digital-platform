'useClient';
import { useState } from "react";

const NewFormSelect = ({ data, value, setValue, exist, placeholder }) => {

  const [selectIsOpen, setSelectIsOpen] = useState(false);

  return (
    <div className="w-full relative bg-white dark:bg-neutral-900 p-2 rounded-md shadow-md cursor-pointer" onClick={() => setSelectIsOpen(!selectIsOpen)}>
      <div className="flex justify-between items-center">
        <p className="text-neutral-700 dark:text-white">{value[exist] ? value[exist] : <span className="text-[#9ca3af]">{placeholder}</span>}</p>
        {selectIsOpen ? (
          <svg className="block fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
            <path d="m283.239-332.37-56.109-56.108L480-641.109l252.87 251.631-55.109 56.108L480-531.37l-196.761 199Z"/>
          </svg>
        ) : (
          <svg className="block fill-neutral-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
            <path d="M480-332.37 227.13-585.239l56.109-55.87L480-442.348l197.761-197.761 55.109 55.87L480-332.37Z"/>
          </svg>
        )}
      </div>
      {selectIsOpen &&
        <ul className="absolute min-w-[180px] max-h-[100px] overflow-y-scroll top-[40px] right-0 bg-white dark:bg-neutral-900 p-2 rounded-md shadow-md z-20">
          {data.map((item, index) =>
            <li
              className="py-1 text-neutral-700 dark:text-white hover:text-violet-500 dark:hover:text-violet-500"
              key={index}
              onClick={() => setValue({ ...value, [exist]: item})}
            >
              {item}
            </li>
          )}
        </ul>
      }
    </div>
  )
}

export default NewFormSelect;