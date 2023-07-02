const MainIcon = ({ width, height, currentPage, page }) => {
    return (
      <svg
        className={`transition-colors ${currentPage === {page} ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== {page} && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M226.666-186.666h140.001v-246.667h226.666v246.667h140.001v-380.001L480-756.667l-253.334 190v380.001Zm0 66.666q-27.5 0-47.083-19.583T160-186.666v-380.001q0-15.833 7.083-30 7.084-14.166 19.584-23.333L440-810q9.197-6.667 19.23-10 10.032-3.333 20.901-3.333T500.943-820q9.943 3.333 19.057 10l253.333 190q12.5 9.167 19.584 23.333 7.083 14.167 7.083 30v380.001q0 27.5-19.583 47.083T733.334-120H526.667v-246.667h-93.334V-120H226.666ZM480-472Z"/>
      </svg>
    )
}

export default MainIcon;