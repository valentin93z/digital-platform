const ProgramsIcon = ({ width, height, currentPage, page }) => {
    return (
      <svg
        className={`transition-colors ${currentPage === {page} ? 'fill-white dark:fill-white' : 'fill-neutral-700 dark:fill-white'} ${currentPage !== {page} && 'hover:fill-violet-500 dark:hover:fill-violet-500'}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M104-264q-9.667-9.667-9.333-23.166.333-13.5 9.333-23.5l246-246.667q5.333-5 11-7.333Q366.667-567 373.333-567q6.667 0 12.5 2.334 5.833 2.333 10.833 7.333L538-415.999l230.001-229.334H682q-14.333 0-23.833-9.5-9.5-9.5-9.5-23.834 0-14.333 9.5-23.833 9.5-9.5 23.833-9.5h164.667q14.333 0 23.833 9.5 9.5 9.5 9.5 23.833V-514q0 13.667-9.5 23.5t-23.166 9.833q-13.667 0-23.5-9.833Q814-500.333 814-514v-83.334L560.667-344q-5.334 5.333-11 7.5-5.667 2.167-12.334 2.167-6.666 0-12.333-2.167t-11-7.5L372.667-485.333 150.333-263q-9 9-22.667 9Q114-254 104-264Z"/>
      </svg>
    )
}

export default ProgramsIcon;